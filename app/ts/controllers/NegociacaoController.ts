import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacao, Negociacoes } from '../models/index';
import {domInject} from '../helpers/decorators/domInject';

export class NegociacaoController {
	@domInject('#data') private _inputData: JQuery;

	@domInject('#quantidade') private _inputQuantidade: JQuery;

	@domInject('#valor') private _inputValor: JQuery;

	private _negociacoes = new Negociacoes();
	private _negociacoesView = new NegociacoesView('#negociacoesView');
	private _mensagemView = new MensagemView('#mensagemView');

	constructor() {
		this._negociacoesView.update(this._negociacoes);
	}

	adiciona(event: Event) {
		event.preventDefault();

		let data = new Date(this._inputData.val().replace(/-/g, ','));

		if (!this._DiaUtil(data)) {
			this._mensagemView.update('Negociações só devem ser lançadas em dias úteis!');
			return;
		}
		// getDay serve pro dia da semana, Domingo, Quarta, etc.

		const negociacao = new Negociacao(
			data,
			parseInt(this._inputQuantidade.val()),
			parseFloat(this._inputValor.val())
		);

		this._negociacoes.adiciona(negociacao);

		this._negociacoesView.update(this._negociacoes);

		this._mensagemView.update('Negociação adicionada com sucesso!');
	}

	private _DiaUtil(data: Date) {
		return data.getDay() != DiaDaSemana.Sábado && data.getDay() != DiaDaSemana.Domingo;
	}
}

enum DiaDaSemana {
	Domingo,
	Segunda,
	Terça,
	Quarta,
	Quinta,
	Sexta,
	Sábado,
}
// método enum inicia em 0 e termina em 6, a não ser que eu declare o valor da variável de inicialização.
