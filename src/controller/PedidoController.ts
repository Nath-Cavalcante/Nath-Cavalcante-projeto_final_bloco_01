import { ProdutoDoce } from '../model/ProdutoDoce';
import { Pedido } from "../model/Pedido";
import { ProdutoDoceRepository, CestaCompras} from "../repository/ProdutoDoceRepository";

export class PedidoController implements ProdutoDoceRepository{

    private cardapioDoces: Array<ProdutoDoce> = new Array<ProdutoDoce>();
    private listaPedidoCompleto: Array<CestaCompras> = new Array<CestaCompras>(); 
    private proxCodigoDoce: number = 0;
    private proxNumeroPedido: number = 0;

    constructor(){
        this.cadastraDoce(new ProdutoDoce(this.addProxCodigoDoce(), "Caixa 4 Brigadeiros", "Brigadeiro Tradicional, Oreo, MM's e Beijinho", 15.00));
        this.cadastraDoce(new ProdutoDoce(this.addProxCodigoDoce(), "Brownie Gourmet", "Brigadeiro, Ninho com Nutella", 15.00));
        this.cadastraDoce(new ProdutoDoce(this.addProxCodigoDoce(), "Tortinha", "Limão, Banoffe", 10.00));
        this.cadastraDoce(new ProdutoDoce(this.addProxCodigoDoce(), "Cone Recheado", "Brigadeiro, Ninho com Nutella, Paçoca, Beijinho", 10.00));
        this.cadastraDoce(new ProdutoDoce(this.addProxCodigoDoce(), "Palha Italiana", "Brigadeiro, Ninho com Nutella, doce de leite", 8.00));
    }

    public addProxNumeroPedido(): number{
        return ++this.proxNumeroPedido;
    }

        public addProxCodigoDoce(): number{
        return ++this.proxCodigoDoce
    }

    listaDoces(): void {
        if(this.cardapioDoces.length === 0){
            console.log("Cardapio vazio");
                return;
        }
        
        console.log("\nCardapio Doce");
        for (let doce of this.cardapioDoces){
            doce.visualizar();

        }
    }

        buscaDoceCodigo(codigo: number): ProdutoDoce | undefined{
            const doce = this.cardapioDoces.find (d => d.codigo === codigo);
            return doce;
        }

        cadastraDoce(doce: ProdutoDoce): void{
            this.cardapioDoces.push(doce);
            console.log("Doce: " + doce.nome + "Codigo: " + doce.codigo + " adicionado.")
        }

        atualizadoceCodigo(doce: ProdutoDoce): void {
        const index = this.cardapioDoces.findIndex(d => d.codigo === doce.codigo);
        if (index !== -1) {
            this.cardapioDoces[index] = doce;
            console.log("\nDoce com código: " +doce.codigo+  " foi atualizado");
        } else {
            console.log("\nDoce com código: " +doce.codigo+  " não encontrado");
        }
    }

        deletaDoce(codigo: number): void {
        const index = this.cardapioDoces.findIndex(doce => doce.codigo === codigo);
        if (index !== -1) {
            const nomeDoce = this.cardapioDoces[index].nome;
            this.cardapioDoces.splice(index, 1);
            console.log("Doce: " + nomeDoce + "Codigo: " + codigo + " foi removido.");
        }
    }

    buscaPedidoNumero(numero: number): CestaCompras | undefined{
        return this.listaPedidoCompleto.find(pedido => pedido.numero === numero); 
    }

    iniciaPedido(): number {
        const novoNumero = this.addProxCodigoDoce();
        const novoPedido:  CestaCompras = {
            numero: novoNumero,
            itens: [],
            status: 'pendente',
            total: 0
        };
        this.listaPedidoCompleto.push(novoPedido);
        console.log("\nNovo pedido numero: " +novoNumero+ " criado");
        return novoNumero;
    }

        adicionaItemPedido(numeroPedido: number, codigoDoce: number, quantidade: number): void {
        const pedidoCompleto = this.buscaPedidoNumero(numeroPedido);
        if (!pedidoCompleto || pedidoCompleto.status !== 'pendente') {
            console.log("Pedido numero: " +numeroPedido+ " não foi encontrado");
            return;
        }
        if (quantidade <= 0) {
            console.log("\nQuantidade adicionada insuficiente");
            return;
        }

        const doceEstoque = this.buscaDoceCodigo(codigoDoce);
        if (!doceEstoque) {
            console.log("\nDoce código: " +codigoDoce+ " não foi encontrado");
            return;
        }
    }

        removeItemPedido(numeroPedido: number, codigoDoce: number, quantidade: number): void {
            const pedidoCompleto = this.buscaPedidoNumero(numeroPedido);
            if (!pedidoCompleto || pedidoCompleto.status !== 'pendente') {
            console.log("Pedido numero: " +numeroPedido+ " não foi encontrado");
            return;
        }

        const indexItem = pedidoCompleto.itens.findIndex(item => item.codigo === codigoDoce);
        if (indexItem === -1) {
            console.log("Doce de codigo: " + codigoDoce + " não foi encontrado");
            return;
        }

    }

    visualizaPedido(numeroPedido: number): void {
        const pedidoCompleto = this.buscaPedidoNumero(numeroPedido);
        if (pedidoCompleto) {
            console.log("\nDetalhes do pedido: "  + pedidoCompleto.numero);
            console.log("Status: " + pedidoCompleto.status);
            if (pedidoCompleto.itens.length === 0) {
                console.log("Nenhum item neste pedido.");
            } else {
                console.log("\nItens do Pedido:");
                pedidoCompleto.itens.forEach(item => item.visualizar());
            }
            console.log("Total do Pedido R$: " + pedidoCompleto.total.toFixed(2));
        } else {
            console.log("\nPedido: " +numeroPedido+ " não foi encontrado");
        }
    }

        confirmaPedido(numeroPedido: number): void {
        const pedidoCompleto = this.buscaPedidoNumero(numeroPedido);
        if (pedidoCompleto) {
            if (pedidoCompleto.status === 'pendente') {
                if (pedidoCompleto.itens.length > 0) {
                    pedidoCompleto.status = 'confirmado';
                    console.log("\nPedido: " +numeroPedido+ " criado com sucesso");
                    console.log("Valor total R$: " +pedidoCompleto.total.toFixed(2));
                } else {
                    console.log("\nPedido: " +numeroPedido+ " esta vazio");
                }
            } else {
                console.log("\nPedido: " +numeroPedido+ " esta: "+ pedidoCompleto.status);
            }
        } else {
            console.log("\nPedido: " +numeroPedido+ " não foi encontrado");
        }
    }

    cancelaPedido(numeroPedido: number): void {
        const pedidoCompleto = this.buscaPedidoNumero(numeroPedido);
        if (pedidoCompleto) {
            if (pedidoCompleto.status === 'pendente') {
                pedidoCompleto.status = 'cancelado';
                console.log("\nPedido: " +numeroPedido+ " cancelado");
            } else {
                console.log("\nPedido: " +numeroPedido+ " não pode ser cancelado, esta: "+ pedidoCompleto.status);
            }
        } else {
            console.log("\nPedido: " +numeroPedido+ " não foi encontrado");
        }
    }

    listaPedido(): void {
        if (this.listaPedidoCompleto.length === 0) {
            console.log("\nNenhum pedido realizado");
            return;
        }
        console.log("\nHistórico de pedidos");
        const pedidosConcluidos = this.listaPedidoCompleto.filter(p => p.status !== 'pendente');

        if (pedidosConcluidos.length === 0) {
            console.log("Historico vazio");
        } else {
            pedidosConcluidos.forEach(pedido => {
                this.visualizaPedido(pedido.numero);
            });
        }
    }

    // Método auxiliar privado para atualizar o total de um pedido completo
    private atualizarTotalPedido(numeroPedido: number): void {
        const pedido = this.buscaPedidoNumero(numeroPedido);
        if (pedido) {
            pedido.total = pedido.itens.reduce((sum, item) => sum + (item.preco * item.quantidadeComprada), 0);
        }
    }
}
