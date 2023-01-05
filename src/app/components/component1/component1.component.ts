import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit{
  n1:number;
  n2:number;
  n3:number;
  n4:number;
  n5:number;

  constructor(private router:Route){}

  ngOnInit(): void {
    localStorage.clear()
  }
  
  almacenar(){
    localStorage.setItem('Usuario', this.n1.toString())
    localStorage.setItem('Gmail', this.n2.toString())
    localStorage.setItem('Password', this.n3.toString())
    localStorage.setItem('Confirm', this.n4.toString())
    localStorage.setItem('Cell', this.n5.toString())
  }

  navegacion(){
    this.router.navigate(["pag2"])
  }
}
