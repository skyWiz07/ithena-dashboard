import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class MrrService {
  private readonly mockData = [
    [
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

    [
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
            x: 200,
            y: 11,
            r: 35,
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
            x: 220,
            y: 9,
            r: 15,
          },
          {
            x: 250,
            y: 8,
            r: 30,
          },
        ],
        backgroundColor: '#BFD6B5',
        label: 'Australia',
      },
    ],

    [
      {
        data: [
          {
            x: 190,
            y: 3,
            r: 23,
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
            x: 170,
            y: 2,
            r: 12,
          },
        ],
        backgroundColor: '#BBCBE4',
        label: 'United Kingdom',
      },
      {
        data: [
          {
            x: 210,
            y: 6,
            r: 15,
          },
          {
            x: 350,
            y: 10,
            r: 20,
          },
        ],
        backgroundColor: '#BFD6B5',
        label: 'Australia',
      },
    ],
  ];

  constructor(private utilService: UtilService) {}

  public getMRRStatsByCountryData(params: any) {
    const idx = this.utilService.getRandomNumber();
    const data = this.mockData[idx];
    return of(data);
  }
}
