import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { barChartDataList } from '../bar-chart/bar-chart';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class MtrService {
  private readonly mockData = [
    [
      {
        // label: 'MRR',
        data: barChartDataList[0][0],
        borderWidth: 1,
        barThickness: 35,
        backgroundColor: '#7899CB',
      },
      {
        // label: 'MRR',
        data: barChartDataList[0][1],
        borderWidth: 1,
        barThickness: 35,
        backgroundColor: '#F1A445',
      },
      {
        // label: 'MRR',
        data: barChartDataList[0][2],
        borderWidth: 1,
        barThickness: 35,
        backgroundColor: '#F5C85D',
      },
    ],
    [
      {
        // label: 'MRR',
        data: barChartDataList[1][0],
        borderWidth: 1,
        barThickness: 35,
        backgroundColor: '#7899CB',
      },
      {
        // label: 'MRR',
        data: barChartDataList[1][1],
        borderWidth: 1,
        barThickness: 35,
        backgroundColor: '#F1A445',
      },
      {
        // label: 'MRR',
        data: barChartDataList[1][2],
        borderWidth: 1,
        barThickness: 35,
        backgroundColor: '#F5C85D',
      },
    ],
    [
      {
        // label: 'MRR',
        data: barChartDataList[2][0],
        borderWidth: 1,
        barThickness: 35,
        backgroundColor: '#7899CB',
      },
      {
        // label: 'MRR',
        data: barChartDataList[2][1],
        borderWidth: 1,
        barThickness: 35,
        backgroundColor: '#F1A445',
      },
      {
        // label: 'MRR',
        data: barChartDataList[2][2],
        borderWidth: 1,
        barThickness: 35,
        backgroundColor: '#F5C85D',
      },
    ],
  ];

  constructor(private utilService: UtilService) {}

  public getMTRData(params: any) {
    const idx = this.utilService.getRandomNumber();
    const data = this.mockData[idx];
    return of(data);
  }
}
