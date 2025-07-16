import { ProdutoDoce } from './ProdutoDoce';

export class Pedido extends ProdutoDoce{
    
    
    private _quantidade: number;
    private _numeroPedido: number;
    private _quantidadeComprada: number;

    constructor(codigo: number, nome: string, descricao: string, preco: number, quantidade: number, numeroPedido: number, quantidadeComprada: number){
        super(codigo, nome, descricao, preco);
        this._quantidade = quantidade;
        this._numeroPedido = numeroPedido;
        this._quantidadeComprada = quantidadeComprada;
    }

    public get quantidade(): number {
    return this._quantidade;
    }

    public set quantidade(valor: number) {
    this._quantidade = valor;
    }

    public get numeroPedido(): number {
    return this._numeroPedido;
    }

    public set numeroPedido(valor: number) {
    this._numeroPedido = valor;
    }

    public quantidadeComprada(novaQuantidade: number): boolean{
        if(novaQuantidade <=0){
            console.log("\nA quantidade comprada foi insuficiente.");
            return false;
        } this._quantidadeComprada = novaQuantidade;
        console.log("\n A quantidade de " + this.nome + " foi atualizada para: " +this.quantidadeComprada);
        return true;
    }

        public visualizar(): void {
        console.log("Numero do pedido:  " + this._numeroPedido);
        console.log("Quantidade comprada " + this._quantidadeComprada);
        console.log("Total da compra: " + (this._preco * this._quantidadeComprada).toFixed(2));

    }


}