import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';

import { ApiResponse, Lancamento, LancamentoFiltro } from '../../core/interfaces';

import { LancamentoService } from './../lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {
  totalRegistros: number = 0
  filtro: LancamentoFiltro = {
    pagina: 0,
    itensPorPagina: 5
  }


  lancamentos: Lancamento[] = [];


  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit(): void {
    // this.pesquisar();
   // subistituido pelo método onLazyLoad
  }

  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina
    console.log(this.filtro);

    this.lancamentoService.pesquisar(this.filtro)
      .subscribe((dados: ApiResponse<Lancamento>) => {
        this.lancamentos = dados.content
        this.totalRegistros = dados.totalElements
      });
  }

  carregarPagina(event: LazyLoadEvent){
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
    console.log(event);
  }

}
