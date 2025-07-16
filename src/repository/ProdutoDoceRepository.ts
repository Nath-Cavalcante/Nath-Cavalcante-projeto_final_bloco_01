import { ProdutoDoce } from '../model/ProdutoDoce';
import { Pedido } from '../model/Pedido';

export interface CestaCompras{
    numero: number;
    itens: Pedido[];
    status: "pendente" | "confirmado" | "cancelado";
    total: number;
}

export interface ProdutoDoceRepository{
    listaDoces(): void;
    buscaDoceCodigo(codigo: number): ProdutoDoce | undefined;
    cadastraDoce(doce: ProdutoDoce): void;
    atualizadoceCodigo(doce: ProdutoDoce): void;
    deletaDoce(codigo: number): void;
    
    iniciaPedido(): number;
    adicionaItemPedido(numeroPedido: number, codigoDoce: number, quantidade: number): void;
    confirmaPedido(numeroPedido: number): void;
    removeItemPedido(numeroPedido: number, codigoDoce: number, quantidade: number): void;
    visualizaPedido(numeroPedido: number): void;
    cancelaPedido(numeroPedido: number): void;
    listaPedido(): void;

    buscaPedidoNumero(numero: number): CestaCompras | undefined;


}