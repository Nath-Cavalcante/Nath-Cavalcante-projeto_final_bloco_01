import { ProdutoDoce } from '../model/ProdutoDoce';
import { Pedido } from '../model/Pedido';

export interface ProdutoDoceRepository{
    listarDoces(): void;
    doceCodigo(): void;
    deletarDoce(): void;

    adicionarItemPedido(numeroPedido: number, codigoDoce: number, quantidade: number): void;
    confirmarPedido(numeroPedido: number): void;
    visualizarPedido(numeroPedido: number): void;
    cancelarPedido(numeroPedido: number): void;
    listarPedido(): void;
    IniciarPedido(): void;
    removerItemPedido(numeroPedido: number, codigoDoce: number, quantidade: number): void;
    


}