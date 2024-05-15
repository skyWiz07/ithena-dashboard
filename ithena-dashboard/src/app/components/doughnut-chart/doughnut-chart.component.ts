import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent implements OnInit, OnChanges {
  @Input('datasets') datasets = [];

  title = 'ng-chart';
  doughnutChart: any = [];

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
    this.doughnutChart.data.datasets = this.datasets;
    this.doughnutChart.update();
  }

  private createChart() {
    this.doughnutChart = new Chart('doughnut-chart-canvas', {
      type: 'doughnut',
      data: {
        labels: ['Organic Search', 'Direct', 'Referral'],
        datasets: this.datasets,
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
