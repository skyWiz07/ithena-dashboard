import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  public getRandomNumber(min = 0, max = 3) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
