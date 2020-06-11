import { isObject } from 'util';

export class Forecast {
  constructor(
    public date: Date,
    public temperatureC: number,
    public temperatureF: number,
    public summary: string,
  ) {}

  merge(dst:any, src:any) {
    for (let key in src) {
        if (!src.hasOwnProperty(key)) continue;
        if (isObject(dst[key])) {
            this.merge(dst[key], src[key]);
        } else {
            dst[key] = src[key];
        }
    }
  }
}
