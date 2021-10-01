import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';

import { NavbarTesteComponent } from './navbar-teste/navbar-teste.component';


import { CoreModule } from './core/core.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentoService } from './lancamentos/lancamento.service';





@NgModule({
  declarations: [
    AppComponent,
    NavbarTesteComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    HttpClientModule,

    CoreModule,
    LancamentosModule,
    PessoasModule
  ],
  providers: [LancamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
