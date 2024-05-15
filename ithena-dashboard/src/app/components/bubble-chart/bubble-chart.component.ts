import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss'],
})
export class BubbleChartComponent implements OnInit, OnChanges {
  @Input() datasets = [];

  bubbleChart: any = [];

  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('datasets' in changes) {
      this.datasets = changes['datasets']?.currentValue || [];
      this.updateChart();
    }
  }

  private updateChart() {
    this.bubbleChart.data.datasets = this.datasets;
    this.bubbleChart.update();
  }

  private createChart() {
    this.bubbleChart = new Chart('bubble-chart-canvas', {
      type: 'bubble',
      data: {
        datasets: this.datasets,
      },
      options: {
        scales: {
          y: {
            min: -2,
            max: 14,
            ticks: {
              callback: function (value, index, ticks) {
                return parseInt(value.toString()) < 0
                  ? `-$${Math.abs(parseInt(value.toString()))}`
                  : `$${value}`;
              },
            },
            grid: {
              display: false,
            },
          },
          x: {
            min: 0,
            max: 700,
            ticks: {
              callback: function (value, index, ticks) {
                return `$${value}`;
              },
            },
            stacked: true,
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            position: 'bottom',
          },
          tooltip: {
            enabled: false,
          },
        },
      },
    });
  }
}
