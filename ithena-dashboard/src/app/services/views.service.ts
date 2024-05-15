import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class ViewsService {
  readonly mockData = [
    [
      {
        data: [300, 50, 100],
        backgroundColor: ['#82B16E', '#F5C85D', '#7899CB'],
      },
    ],
    [
      {
        data: [230, 150, 10],
        backgroundColor: ['#82B16E', '#F5C85D', '#7899CB'],
      },
    ],
    [
      {
        data: [30, 320, 190],
        backgroundColor: ['#82B16E', '#F5C85D', '#7899CB'],
      },
    ],
  ];
  constructor(private utilService: UtilService) {}

  public getPageViewsData(params: any) {
    const idx = this.utilService.getRandomNumber();
    const data = this.mockData[idx];
    return of(data);
  }
}
