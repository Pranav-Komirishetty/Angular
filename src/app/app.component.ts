import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {CoindeskService} from './api/coindesk.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  coinInfo : any;
  constructor(private coindesk : CoindeskService){
    coindesk.coinData().subscribe((data)=>{
      console.log('data',data);
      this.coinInfo=data;
    })
  }

  envName = environment.name;
  title = 'NGproject';
  loginForm =new FormGroup({
    username : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    password : new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  loginBtn(){
    console.log(this.loginForm.value);
  }

  get checkUsername(){
    return this.loginForm.get('username');
  }

  get checkPassword(){
    return this.loginForm.get('password');
  }

  Login(item:any){
    console.log(item);
  }
}
console.log(environment.name);

