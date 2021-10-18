import { HttpClientModule } from '@angular/common/http';
import { LancamentoService } from './lancamento.service';
import { CommonModule, DatePipe } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';
import { SharedModule } from './../shared/shared.module';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';
import { MessagesModule } from 'primeng/messages';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NgModule } from '@angular/core';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';




@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    BrowserAnimationsModule,
    TooltipModule,
    SelectButtonModule,
    CalendarModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    FormsModule,
    InputTextareaModule,
    InputNumberModule,
    InputMaskModule,
    HttpClientModule,

    SharedModule

  ],
  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,

    ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ],
  providers: [
    DatePipe
  ],

})
export class LancamentosModule { }
