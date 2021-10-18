export interface ApiResponse<T> {
  content: T[],
  last: boolean,
  totalPages: number,
  totalElements: number,
  number: number,
  size: number,
  sort: {
      sorted?: boolean,
      unsorted?: boolean,
      empty?: boolean
  },
  first: boolean,
  numberOfElements: number,
  empty: boolean
}


export interface Categoria {
  id: number,
  nome: string
}

export interface Lancamento {
  id: number,
  descricao: string,
  dataVencimento: Date,
  dataPagamento?: Date,
  valor: number,
  observacao: string,
  tipo: 'RECEITA' | 'DESPESA',
  categoria: Categoria,
  pessoa: Pessoa
}
export interface LancamentoFiltro {
  descricao?: string,
  dataVencimentoInicio?: Date,
  dataVencimentoFim?: Date,
  pagina: number,
  itensPorPagina: number
}

export interface Pessoa {
  id: number,
  nome: string,
  endereco: Endereco,
  ativo: boolean
}
interface Endereco {
  logradouro: string,
  numero: number,
  complemento?: string,
  bairro: string,
  cep: string,
  cidade: string,
  estado: string
}

export interface PessoaFiltro {
  nome: string;
  pagina: number;
  itensPorPagina: number;
}

