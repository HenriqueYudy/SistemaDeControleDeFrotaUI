import { Condutor } from './../../shared/class/condutor';
import { Component, OnInit } from '@angular/core';
import { CondutorService } from '../../shared/service/condutor.service';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'condutor-table',
  templateUrl: './condutor-table.component.html',
  styleUrls: ['./condutor-table.component.css']
})
export class CondutorTableComponent implements OnInit {

  condutores: Condutor[];

  constructor(private condutorService: CondutorService) { }

  ngOnInit() {

    this.condutorService.getCondutores()
      .subscribe(condutores => this.condutores = condutores);
  }

}
