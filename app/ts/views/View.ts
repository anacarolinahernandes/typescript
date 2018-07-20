export abstract class View<T> {
	protected _elemento: JQuery;
	private _escapar: boolean;

	// constructor(seletor: string, escapar?: boolean)
	constructor(seletor: string, escapar: boolean = false) {
		this._elemento = $(seletor);
		this._escapar = escapar;
	}
	// a ? ao lado de 'escapar' indica que o parâmetro no constructor é opcional, adotando "undefined" como padrão
	// os parâmetros opcionais precisam SEMPRE serem os últimos do constructor

	update(modelo: T) {
		let template = this.template(modelo);
		if (this._escapar) template = template.replace(/<script>[\s\S]*?<\/script>/, '');

		this._elemento.html(template);
	}

	abstract template(modelo: T): string;
}
