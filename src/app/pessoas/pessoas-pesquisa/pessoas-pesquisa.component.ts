import { Pessoa } from './../../core/interfaces';
import { PessoasModule } from './../pessoas.module';
import { Component } from '@angular/core';

import { LazyLoadEvent } from 'primeng/api';

import { PessoaService, PessoaFiltro } from '../pessoa.service'

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})

export class PessoasPesquisaComponent {

  totalRegistros = 0;

  filtro: PessoaFiltro = {
    pagina: 0,
    itensPorPagina: 5
  }

  pessoas: PessoaFiltro[] = [];


  constructor(private pessoaService: PessoaService) { }


  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina
    console.log(this.filtro);

    this.pessoaService.pesquisar(this.filtro)
      .subscribe((dados: any) => {
        this.pessoas = dados.content
        this.totalRegistros = dados.totalElements
      });
  }


  carregarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
    console.log(event);
  }



}
