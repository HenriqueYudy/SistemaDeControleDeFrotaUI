import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ProdutoServico } from '../class/produto-servico';

@Injectable()
export class ProdutoServicoService {

  url: string = "http://177.85.0.23:2222/security/produto_servicos";

  constructor(private http: HttpClient) { }

  getProdutoServicos(): Observable<ProdutoServico[]> {
    return this.http.get<ProdutoServico[]>(this.url);
  }

  getProdutoServico(id): Observable<ProdutoServico> {
    return this.http.get<ProdutoServico>(this.getProdutoServicosUrl(id));
  }

  addProdutoServico(produtoServico) {
    return this.http.post(this.url, JSON.stringify(produtoServico));
  }

  updateProdutoServico(produtoServico) {
    return this.http.put(this.getProdutoServicosUrl(produtoServico.id), JSON.stringify(produtoServico));
  }

  deleteProdutoServico(id) {
    return this.http.delete(this.getProdutoServicosUrl(id));
  }

  private getProdutoServicosUrl(id) {
    return this.url + "/" + id;
  }

}
