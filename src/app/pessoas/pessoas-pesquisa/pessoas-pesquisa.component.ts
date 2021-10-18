import { PessoasModule } from './../pessoas.module';
import { Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { PessoaService } from './../pessoa.service';
import { Pessoa, ApiResponse, PessoaFiltro } from './../../core/interfaces';

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
  };
  pessoas: any[] = [];


  constructor(private pessoaService: PessoaService) { }

  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina;

    this.pessoaService.pesquisar(this.filtro)
      .subscribe((dados: any) => {
        this.pessoas = dados
        this.totalRegistros = dados.pessoa
      });
  }

  carregarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
  }

}
