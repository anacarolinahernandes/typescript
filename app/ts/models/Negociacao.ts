export class Negociacao {
	constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}

	get volume() {
		return this.quantidade * this.valor;
	}
}

// graças ao modificador de propriedades ReadOnly do TypeScript, não é mais necessário declarar os getters! :)
