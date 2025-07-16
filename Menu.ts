import leia = require("readline-sync");
import { colors } from './src/util/Colors';
import { ProdutoDoce } from './src/model/ProdutoDoce';
import { Pedido} from './src/model/Pedido';
import { ProdutoDoceRepository } from './src/repository/ProdutoDoceRepository';

export function main(){
    let opcao: number;

    while (true) {
        console.log(colors.bg.magenta, colors.fg.cyanstrong,"=====================================================                                                     ");
        console.log("                                                     ");
        console.log("             Pk.do Brigadeiros Gourmet               ");
        console.log("                                                     ");
        console.log("  =====================================================");
        console.log("                                                     ");
//      console.log("Escolha seu doce: ");
        console.log("\nSelecione um numero: \n");
        console.log("\n1- Faça seu pedido\n");
        console.log("\n2- Revise seu pedido feito\n");
    /*  console.log("1- Caixa com 4 brigadeiros");
        console.log("2- Brownie Gourmet");
        console.log("3- Tortinha");
        console.log("4- Cone Recheado");
        console.log("5- Palha italiana");*/
        console.log("\n3- Confirmar pedido\n");
        console.log("\n4- Cancelar pedido\n");
        console.log("\n5- Sair");
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

                keyPress()
                break;

            case 2:
                console.log("\nRevise seu pedido feito\n");

                keyPress()
                break;

            case 3:
                console.log("\nConfirmar pedido\n");

                keyPress()
                break;

            case 4:
                console.log("\nCancelar pedido\n");

                keyPress()
                break;

            case 5:
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