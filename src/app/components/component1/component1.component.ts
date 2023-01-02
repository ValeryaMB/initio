import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit{
  num1:number;
  num2:number;
  num3:number;
  num4:number;
  num5:number;

  constructor(private router:Route){}

  ngOnInit(): void {
    localStorage.clear()
  }
  
  almacenar(){
    localStorage.setItem('Usuario', this.num1.toString())
    localStorage.setItem('Gmail', this.num2.toString())
    localStorage.setItem('Password', this.num3.toString())
    localStorage.setItem('Confirm', this.num4.toString())
    localStorage.setItem('Cell', this.num5.toString())
  }

  navegacion(){
    this.router.navigate(["pag2"])
  }
}
