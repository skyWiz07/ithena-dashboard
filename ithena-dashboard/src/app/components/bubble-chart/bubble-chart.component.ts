import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss'],
})
export class BubbleChartComponent {
  title = 'ng-chart';
  bubbleChart: any = [];

  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  private createChart() {
    this.bubbleChart = new Chart('bubble-chart-canvas', {
      type: 'bubble',
      data: {
        datasets: [
          {
            data: [
              {
                x: 100,
                y: 4,
                r: 25,
              },
            ],
            label: 'United States',
            backgroundColor: '#E7D9ED',
          },
          {
            data: [
              {
                x: 300,
                y: 11,
                r: 25,
              },
              {
                x: 370,
                y: 9,
                r: 15,
              },
            ],
            backgroundColor: '#BBCBE4',
            label: 'United Kingdom',
          },
          {
            data: [
              {
                x: 250,
                y: 8,
                r: 35,
              },
              {
                x: 550,
                y: 9,
                r: 40,
              },
            ],
            backgroundColor: '#BFD6B5',
            label: 'Australia',
          },
        ],
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
