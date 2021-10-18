import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiResponse, Pessoa } from '../core/interfaces';

export class PessoaFiltro {
  nome?: string;
  pagina: number = 0;
  itensPorPagina: number = 5;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoasUrl = 'http://localhost:8080/pessoas';

  constructor(private http: HttpClient) { }



  pesquisar(filtro: PessoaFiltro): Observable<PessoaFiltro> {

    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    let params = new HttpParams()
      .set('page', filtro.pagina.toString())
      .set('size', filtro.itensPorPagina.toString());


    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }


    console.log(params);


    return this.http.get<PessoaFiltro>(`${this.pessoasUrl}`, { headers, params });



  }

  listarTodas(): Observable<Pessoa> {
    const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get<Pessoa>(`${this.pessoasUrl}`, { headers });


  }


}
