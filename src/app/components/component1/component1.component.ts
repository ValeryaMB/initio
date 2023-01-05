import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit{
  n1:any;
  n2:any;
  n3:any;
  n4:any;
  n5:any;

  constructor(private router:Router){}

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
    this.router.navigate(['pag2'])
  }
}
