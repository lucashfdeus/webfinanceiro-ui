import { Component, OnInit } from '@angular/core';

interface Categoria {
  name: string,
  code: number
}

interface Pessoa {
  name: string,
  code: number
}


@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  //caixa de seleção
  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];

  //caixa de categorias/Pessoas

  categorias: Categoria[];

  pessoas: Pessoa[];

  constructor() {

    this.categorias = [
      { name: 'Alimentação', code: 1 },
      { name: 'Transporte', code: 2 },
    ];

     this.pessoas = [
       { name: 'Lucas Henrique', code: 1 },
       { name: 'Taynara Amorim', code: 2 },
       { name: 'Maria', code: 3 }
     ];
  }

  // calendar

  date1: Date | undefined;

  date2: Date | undefined;

  dates: Date[] | undefined;

  rangeDates: Date[] | undefined;

  minDate: Date | undefined;

  maxDate: Date | undefined;

  invalidDates: Array<Date> | undefined;

  //caixa de valor
  valor: number = 0;

  ngOnInit() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }
}
