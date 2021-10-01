import { Component, OnInit } from '@angular/core';
import { ApiResponse, Lancamento } from './../../core/interfaces';

import { LancamentoService } from './../lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  descricao: string = '';
  lancamentos: Lancamento[] = [] ;


  constructor(private lancamentoService: LancamentoService) {}

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    this.lancamentoService.pesquisar({ descricao: this.descricao})
      .subscribe((dados: ApiResponse<Lancamento>) => this.lancamentos = dados.content);
  }

}
