import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent {
  title = 'ng-chart';
  doughnutChart: any = [];

  constructor() {}

  ngOnInit() {
    this.createChart();
  }

  private createChart() {
    this.doughnutChart = new Chart('doughnut-chart-canvas', {
      type: 'doughnut',
      data: {
        labels: ['Organic Search', 'Direct', 'Referral'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ['#82B16E', '#F5C85D', '#7899CB'],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
          // title: {
          //   display: false,
          //   text: 'Reported Fault Allocation',
          //   color: '#D6001C',
          //   align: 'start',
          //   font: {
          //     family: 'AvenirNextLTW01-Regular',
          //     size: 16,
          //     style: 'normal',
          //   },
          // },
        },
      },
    });
  }
}
