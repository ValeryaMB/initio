import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  Usuario:any
  Gmail:any
  Password:any
  Confirm:any
  Cell:any

  constructor(){}

  ngOnInit(): void {
    this.recuperar()
  }

  recuperar(){
    this.Usuario = localStorage.getItem('Usuario')
    this.Gmail = localStorage.getItem('Gmail')
    this.Password = localStorage.getItem('Password')
  }
}
