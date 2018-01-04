export interface Prodotto {
    Id: number;
    ProdottoNome: string;
    TipologiaQta: string;
    TipologiaQtaId:number;
    Immagine: string[];
    Descrizione :string;
  }
  export interface Misura {
      Id:number;
      MisuraIn:string
  }
  export interface Magazzino {
    Id:number;
    Nome:string;
    Locazione;
}