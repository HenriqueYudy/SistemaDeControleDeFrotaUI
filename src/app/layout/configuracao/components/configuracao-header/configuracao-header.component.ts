import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../../../../toaster-service';

@Component({
  selector: 'configuracao-header',
  templateUrl: './configuracao-header.component.html',
  styleUrls: ['./configuracao-header.component.css']
})
export class ConfiguracaoHeaderComponent implements OnInit {

  constructor(private toasterService: ToasterService) { }

  ngOnInit() {
  }

  alerta(){
    this.toasterService.Info("Pagina em desenvolvimento");
  }

}
