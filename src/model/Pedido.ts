import { ProdutoDoce } from './ProdutoDoce';

export class Pedido extends ProdutoDoce{

    private _numeroPedido: number;
    private _quantidadeComprada: number;

    constructor(codigo: number, nome: string, descricao: string, preco: number, numeroPedido: number, quantidadeComprada: number){
        super(codigo, nome, descricao, preco);
        this._numeroPedido = numeroPedido;
        this._quantidadeComprada = quantidadeComprada;
    }

    public get quantidadeComprada(): number {
    return this._quantidadeComprada;
    }

    public set quantidadeComprada(valor: number) {
    this._quantidadeComprada = valor;
    }

    public get numeroPedido(): number {
    return this._numeroPedido;
    }

    public set numeroPedido(valor: number) {
    this._numeroPedido = valor;
    }

    public atualizaQuantidadeComprada(novaQuantidade: number): boolean{
        if(novaQuantidade <=0){
            console.log("\nA quantidade comprada foi insuficiente.");
            return false;
        } this._quantidadeComprada = novaQuantidade;
        console.log("\n A quantidade de " + this.nome + " foi atualizada para: " +this.quantidadeComprada);
        return true;
    }

        public visualizar(): void {
        super.visualizar();
        console.log("Numero do pedido:  " + this._numeroPedido);
        console.log("Quantidade comprada " + this._quantidadeComprada);
        console.log("Total da compra: " + (this.preco * this._quantidadeComprada).toFixed(2));

    }


}