export class Cliente {

    constructor(
        public nome: string,
        public sobrenome: string,
        public nascimento: string,
        public cpf: string,
        public telefone?: string,
        public id?: number
      ) {  }
}
