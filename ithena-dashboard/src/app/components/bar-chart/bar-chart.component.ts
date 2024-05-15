import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { barChartDataList } from './bar-chart';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
  title = 'ng-chart';
  barChart: any = [];

  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  private createChart() {
    this.barChart = new Chart('bar-chart-canvas', {
      type: 'bar',

      data: {
        labels: [
          'Jan-Feb',
          'Mar-Apr',
          'May-Jun',
          'Jul-Aug',
          'Sep-Oct',
          'Nov-Dec',
        ],
        datasets: [
          {
            // label: 'MRR',
            data: barChartDataList[0],
            borderWidth: 1,
            barThickness: 35,
            backgroundColor: '#7899CB',
          },
          {
            // label: 'MRR',
            data: barChartDataList[1],
            borderWidth: 1,
            barThickness: 35,
            backgroundColor: '#F1A445',
          },
          {
            // label: 'MRR',
            data: barChartDataList[2],
            borderWidth: 1,
            barThickness: 35,
            backgroundColor: '#F5C85D',
          },
        ],
      },
      options: {
        scales: {
          y: {
            min: -4,
            max: 14,
            ticks: {
              callback: function (value, index, ticks) {
                return parseInt(value.toString()) < 0
                  ? `-$${Math.abs(parseInt(value.toString()))} K`
                  : `$${value} K`;
              },
            },
            border: {
              display: false,
            },
          },
          x: {
            stacked: true,
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
