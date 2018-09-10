import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-campo-invalid',
  templateUrl: './campo-invalid.component.html',
  styleUrls: ['./campo-invalid.component.css']
})
export class CampoInvalidComponent implements OnInit {

  @Input()mostrarErro: boolean;
  @Input()msgErro: string;



  constructor() { }

  ngOnInit() {
  }

}
