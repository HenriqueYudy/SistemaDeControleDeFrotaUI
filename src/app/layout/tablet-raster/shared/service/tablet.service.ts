import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tablet } from '../class/tablet';

@Injectable()
export class TabletService {


  private url: string = "http://177.85.0.23:8987/api/os/buscarTecnicos/";
  private urlHoje: string = "http://177.85.0.23:8987/api/os/buscarTecnicos/map";

  constructor(private http: HttpClient) { }

  getTecnicosByDays(dataInicial, dataFim): Observable<Tablet[]> {
    return this.http.get<Tablet[]>(this.buscarTecnicoUrl(dataInicial, dataFim));
  }

  getTecnicoByDays(dataInicial, dataFim, tecnico): Observable<Tablet[]> {
    return this.http.get<Tablet[]>(this.buscarPorTecnicoUrl(dataInicial, dataFim, tecnico));
  }

  getTecnicoByDaysAndEvent(dataInicial, dataFim, tecnico, evento): Observable<Tablet[]> {
    return this.http.get<Tablet[]>(this.buscarPorTecnicoEventoUrl(dataInicial, dataFim, tecnico, evento));
  }

  getTecnicosByDaysAndEvent(dataInicial, dataFim, evento): Observable<Tablet[]> {
    return this.http.get<Tablet[]>(this.buscarTecnicoPorEventoUrl(dataInicial, dataFim, evento));
  }

  getTecnicosHoje():Observable<Tablet[]>{
    return this.http.get<Tablet[]>(this.urlHoje);
  }

  private buscarTecnicoUrl(dataInicial, dataFim) {
    return this.url + "/" + "dataInicial=" + dataInicial + "/" + "dataFinal=" + dataFim;
  }

  private buscarPorTecnicoUrl(dataInicial, dataFim, tecnico) {
    return this.url + "/" + "dataInicial=" + dataInicial + "/" + "dataFinal=" + dataFim + "/" + "tecnico=" + tecnico;
  }

  private buscarPorTecnicoEventoUrl(dataInicial, dataFim, tecnico, evento) {
    return this.url + "/" + "dataInicial=" + dataInicial + "/" + "dataFinal=" + dataFim + "/" + "tecnico=" + tecnico + "/" + "evento=" + evento;
  }

  private buscarTecnicoPorEventoUrl(dataInicial, dataFim, evento) {
    return this.url + "/" + "dataInicial=" + dataInicial + "/" + "dataFinal=" + dataFim + "/" + "evento=" + evento;
  }

}
