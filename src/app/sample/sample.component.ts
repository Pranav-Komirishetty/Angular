import { Component } from '@angular/core';
import {CoindeskService} from '../api/coindesk.service'

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  coinInfo : any;
  constructor(private coindesk : CoindeskService){
    coindesk.coinData().subscribe((data)=>{
      this.coinInfo=data;
    })
  }
}
