import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CoindeskService {
  url="https://api.coindesk.com/v1/bpi/currentprice.json";

  constructor(private coinApi:HttpClient) { }

  coinData(){
    return this.coinApi.get(this.url);
  }
}
