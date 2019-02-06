import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../../services/weather.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatPaginator, MatSort } from '@angular/material';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public displayedColumns: string[] = ['year', 'month', 'value'];
  public mFrom: number;
  public yFrom: number;
  public mTo: number;
  public yTo: number;
  public selectedMetric;
  public selectedLocate;
  public arrayWeather = [];
  public metricsOption = [
    {
      value: 'Tmax',
      desc: 'Tmax (max temperature)'
    },
    {
      value: 'Tmin',
      desc: 'Tmin (min temperature)'
    },
    {
      value: 'Rainfall',
      desc: 'Rainfall (mm)'
    },
  ];

  public locateOptions = [
    {
      value: 'UK',
      desc: 'UK'
    },
    {
      value: 'England',
      desc: 'England'
    },
    {
      value: 'Scotland',
      desc: 'Scotland'
    },
    {
      value: 'Wales',
      desc: 'Wales'
    },
  ];

  constructor(private _ws: WeatherService) { }

  ngOnInit() {


  }

  public loadWeather() {
    this._ws.getWeathers(this.selectedMetric, this.selectedLocate).subscribe(res => {
      this.filterData(res);
    });
  }

  private filterData(data) {
     this.arrayWeather = [];
     data.filter(d => d.year >= this.yFrom && d.year <= this.yTo).map(o=>{
       if(o.year  === this.yFrom && o.month >= this.mFrom){
          this.arrayWeather.push(o);
          return;
       }
       if(o.year !== this.yFrom && o.year !==this.yTo){
        this.arrayWeather.push(o);
        return;
       }
       if(o.year  === this.yTo && o.month <= this.mTo){
        this.arrayWeather.push(o);
        return;
       }
    });

  }

  public dateFrom(event: MatDatepickerInputEvent<Date>) {
    this.mFrom = (event.value.getMonth() + 1);
    this.yFrom = event.value.getFullYear();
    if (this.selectedLocate && this.selectedMetric && this.mTo && this.yTo) {
      this.loadWeather();
    }
  }

  public dateTo(event: MatDatepickerInputEvent<Date>) {
    this.mTo = (event.value.getMonth() + 1);
    this.yTo = event.value.getFullYear();
    if (this.selectedLocate && this.selectedMetric && this.mFrom && this.yFrom) {
      this.loadWeather();
    }
  }

}
