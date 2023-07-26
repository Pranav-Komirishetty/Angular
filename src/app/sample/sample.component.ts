import { Component } from '@angular/core';
import {CoindeskService} from '../api/coindesk.service'

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  coinInfo : any;
  uniqueID : string = '';
  val : string = '';
  constructor(private coindesk : CoindeskService){
    coindesk.coinData().subscribe((data)=>{
      this.coinInfo=data;
    })
  }
  submitBtn(){
    const unqID = this.uniqueID.replace(/-/g, '');
    this.val=unqID;
    console.log(unqID);
  }
}
