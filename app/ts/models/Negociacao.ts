import { MeuObjeto } from './MeuObjeto';

export class Negociacao implements MeuObjeto<Negociacao> {
	constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

	// graças ao modificador de propriedades ReadOnly do TypeScript, não é mais necessário declarar os getters! :)

	get volume() {
		return this.quantidade * this.valor;
	}

	paraTexto(): void {
		console.log('Impressão...');
		console.log(
			`Data: ${this.data}
			Quantidade: ${this.quantidade}, 
			Valor: ${this.valor}, 
			Volume: ${this.volume}`
		);
	}

	ehIgual(negociacao: Negociacao): boolean {
		return (
			this.data.getDate() == negociacao.data.getDate() &&
			this.data.getMonth() == negociacao.data.getMonth() &&
			this.data.getFullYear() == negociacao.data.getFullYear()
		);
	}
}
