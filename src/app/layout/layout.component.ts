import { Component, OnInit } from '@angular/core';


declare var $ : any;

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  titulo: string = "Onnet";

  constructor() { }

  ngOnInit() {


   
  }

}
