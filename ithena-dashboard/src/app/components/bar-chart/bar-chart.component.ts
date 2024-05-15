import { Component, Input, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { barChartDataList } from './bar-chart';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent {
  @Input('datasets') datasets = [];

  barChart: any = [];

  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('datasets' in changes) {
      this.datasets = changes['datasets']?.currentValue || [];
      console.log(this.datasets);
      this.updateChart();
    }
  }

  private updateChart() {
    this.barChart.data.datasets = this.datasets;
    this.barChart.update();
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
        datasets: this.datasets,
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
