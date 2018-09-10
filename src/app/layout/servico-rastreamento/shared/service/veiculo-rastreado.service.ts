import { RotaVeiculo } from './../class/rota-veiculo';
import { VeiculoRastreado } from './../class/veiculo-rastreado';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { PontoCoord } from '../class/veiculo-coordenada';

@Injectable()
export class VeiculoRastreadoService {

  private url: string = "http://177.85.0.23:2222/security/veiculo_rastreado";
  private ROUTE_URL: string = "";

  constructor(private http: HttpClient) { }


  getVeiculoRastreados(): Observable<VeiculoRastreado[]> {
    return this.http.get<VeiculoRastreado[]>(this.url);
  }

  getVeiculoRastreadosCoord(): Observable<VeiculoRastreado[]> {
    return this.http.get<VeiculoRastreado[]>(this.url + "/initRast");
  }

  getVeiculoRastreado(id): Observable<PontoCoord>{
    return this.http.get<PontoCoord>(this.getVeiculoRastreadorUrl(id));
  }

  getVeiculosRoutes(imei, data, horaInicial, horaFinal):Observable<RotaVeiculo[]>{
    return this.http.get<RotaVeiculo[]>(this.CriaUrlBuscarRotas(imei, data,horaInicial, horaFinal));
  }

  getVeiculoPosicao(imei):Observable<RotaVeiculo>{
    return this.http.get<RotaVeiculo>(this.CrirUrlBuscarPosicao(imei))
  }

  getRastreadorVeiculo(): Observable<PontoCoord[]> {
    return this.http.get<PontoCoord[]>(this.url + "/rastreador");
  }

  addVeiculoRastreado(veiculoRastreado) {
    return this.http.post(this.url, JSON.stringify(veiculoRastreado));
  }

  updateVeiculoRastreado(veiculoRastreado) {
    return this.http.put(this.getVeiculoRastreadorUrl(veiculoRastreado.id), JSON.stringify(veiculoRastreado));
  }

  deleteVeiculoRastreado(id) {
    return this.http.delete(this.getVeiculoRastreadorUrl(id));
  }

  private getVeiculoRastreadorUrl(id) {
    return this.url + "/" + id;
  }

  private CriaUrlBuscarRotas(imei, data, horaInicio, HoraFinal){
    return this.ROUTE_URL = "http://177.85.0.23:2222/security/veiculo_rastreado/rotas/imei="+imei+"/data="+data+"/hora_inicial="+horaInicio+"/hora_final="+HoraFinal
  }

  private CrirUrlBuscarPosicao(imei){
    return this.ROUTE_URL = "http://177.85.0.23:2222/security/veiculo_rastreado/posicao/imei="+imei;
  }
}
