import leia = require("readline-sync");
import { colors } from './src/util/Colors';
import { ProdutoDoce } from './src/model/ProdutoDoce';
import { Pedido} from './src/model/Pedido';
import { ProdutoDoceRepository } from './src/repository/ProdutoDoceRepository';
import { PedidoController } from "./src/controller/PedidoController";

let pedidoController: PedidoController = new PedidoController();
let numeroPedido: number = 0;

export function main(){
    let opcao: number;

    numeroPedido = pedidoController.iniciaPedido();

    while (true) {
        console.log(colors.bg.magenta, colors.fg.cyanstrong,"=====================================================                                                     ");
        console.log("                                                     ");
        console.log("             Pk.do Brigadeiros Gourmet               ");
        console.log("                                                     ");
        console.log("  =====================================================");
        console.log("                                                     ");
        console.log("\nSelecione um numero: \n");
        console.log("\n1- Faça seu pedido\n");
        console.log("\n2- Altere seu pedido feito\n");
        console.log("\n3- Remova item do seu pedido\n");
        console.log("\n4- Revise seu pedido feito\n");
        console.log("\n5- Confirmar pedido\n");
        console.log("\n6- Cancelar pedido\n");
        console.log("\n7- Historico\n");
        console.log("\n8- Sair");
        console.log("=====================================================");
        console.log("                                                     ",colors.reset);

        console.log(colors.fg.cyanstrong,"Escolha sua opçao: ",colors.reset);
        opcao = leia.questionInt("");

        if(opcao == 5){
            console.log(colors.fg.redstrong,"\nO Pk.do agradece sua visita",colors.reset);
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\nFaça seu pedido\n");
                const pedidoIncompleto = pedidoController.buscaPedidoNumero(numeroPedido);
                if (pedidoIncompleto && pedidoIncompleto.status === 'pendente' && pedidoIncompleto.itens.length > 0) {
                    console.log("\nO pedido " +numeroPedido+ "está em andamento");
                    console.log("Revise, confirme ou cancele o pedido atual antes de iniciar um novo");
                }
                numeroPedido = pedidoController.iniciaPedido();
                keyPress();
                break;

            case 2:
                console.log("\nAltere seu pedido feito\n");
                 pedidoController.listaDoces();
                console.log("\nDigite o codigo do doce desejado:  ");
                let codigoDoceAdd: number = leia.questionInt("");

                console.log("Digite a quantidade: ");
                let quantidadeAdd: number = leia.questionInt("");

                pedidoController.adicionaItemPedido(numeroPedido, codigoDoceAdd, quantidadeAdd);
                keyPress();
                break;

            case 3:
                console.log("\nRemova item do seu pedido\n");
                pedidoController.visualizaPedido(numeroPedido);
                console.log("\nDigite o codigo do doce que deseja remover: ");
                let codigoDoceRemove: number = leia.questionInt("");

                console.log("Digite a quantidade a ser removida: ");
                let quantidadeRemoveInput = leia.question("");
                let quantidadeRemove: number;
                if (quantidadeRemoveInput !== "") {
                    quantidadeRemove = parseInt(quantidadeRemoveInput);
                    if (isNaN(quantidadeRemove) || quantidadeRemove < 0) {
                        console.log("Nenhuma alteraçao feita.");
                        keyPress();
                        break;
                    }
                }

            case 4:
                console.log("\nRevise seu pedido feito\n");
                pedidoController.visualizaPedido(numeroPedido);
                keyPress();
                break;

            case 5:
                console.log("\nConfirmar pedido\n");
                pedidoController.confirmaPedido(numeroPedido);
                numeroPedido = pedidoController.iniciaPedido();
                keyPress();
                break;

            case 6:
                console.log("\nCancelar pedido\n");
                pedidoController.cancelaPedido(numeroPedido);
                numeroPedido = pedidoController.iniciaPedido();
                keyPress();
                break;

            case 7:
                console.log("\nHistorico");
                pedidoController.listaPedido();
                keyPress();
                break;

            case 8:
                console.log("\nSair\n");
                keyPress()
                break;
        }
    }
}


function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    leia.prompt();
}
export function sobre(): void {
    console.log(colors.fg.greenstrong,"\==================================================================================");
    console.log("Projeto Desenvolvido por: ");
    console.log("Nathalia Cavalcante - nathaliap@genstudents.org");
    console.log("https://github.com/Nath-Cavalcante/Nath-Cavalcante-projeto_final_bloco_01");
    console.log("  ==================================================================================",colors.reset);
}

main();