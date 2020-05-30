import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caso1',
  templateUrl: './caso1.component.html',
  styleUrls: ['./caso1.component.css']
})
export class Caso1Component implements OnInit {
  
  admin: any = true;
  a: number = 4;
  b: number = 5;
  Varselected: boolean = false;
 

  constructor() { }

  ngOnInit(): void {
  }

}
