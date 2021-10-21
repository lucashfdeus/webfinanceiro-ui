import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { LazyLoadEvent, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';

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
  @ViewChild('tabela') gridTabela!: Table;


  constructor(
    private lancamentoService: LancamentoService,
    private toastyService: ToastyService,
    private confirmationService: ConfirmationService
  ) { }

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

  carregarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
  }

  confirmarExclusao(lancamento: any) {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja excluir? ',
      accept: () => {
        this.excluirLancamento(lancamento);
      }
    })

  }

  excluirLancamento(lancamento: any) {

    this.lancamentoService.excluir(lancamento.id)
      .subscribe(() => {
        this.gridTabela.reset();
        this.toastyService.success('Lançamento excluído com sucesso!')
      })
  }

}
