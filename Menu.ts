import leia = require("readline-sync");
import { colors } from './src/util/Colors';

export function main(){
    let opcao: number;

    while (true) {
        console.log(colors.bg.magenta, colors.fg.cyanstrong,"=====================================================                                                     8");
        console.log("                                                     ");
        console.log("             Pk.do Brigadeiros Gourmet               ");
        console.log("                                                     ");
        console.log("  =====================================================");
        console.log("                                                     ");
        console.log("Escolha seu doce: ");
        console.log("                                                     ");
        console.log("1- Caixa com 4 brigadeiros");
        console.log("2- Brownie Gourmet");
        console.log("3- Tortinha");
        console.log("4- Cone Recheado");
        console.log("5- Palha italiana");
        console.log("\n6- Confirmar pedido\n");
        console.log("\n7- Cancelar pedido\n");
        console.log("\n8- Sair");
        console.log("=====================================================");
        console.log("                                                     ",colors.reset);

        console.log(colors.fg.cyanstrong,"Escolha sua opçao: ",colors.reset);
        opcao = leia.questionInt("");

        if(opcao == 8){
            console.log(colors.fg.redstrong,"\nO Pk.do agradece sua visita",colors.reset);
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\nCaixa com 4 brigadeiros\n");

                break;

            case 2:
                console.log("\nBrownie Gourmet\n");

                break;

            case 3:
                console.log("\nTortinha\n");

                break;

            case 4:
                console.log("\nCone Recheado\n");

                break;

            case 5:
                console.log("\nPalha italiana\n");

                break;

            case 6:
                console.log("\nConfirmar pedido\n");

                break;

            case 7:
                console.log("\nCancelar pedido\n");

                break;
            
            case 8:
                console.log("\nSair\n");

                break;
        }
    }
}

export function sobre(): void {
    console.log(colors.fg.greenstrong,"\==================================================================================");
    console.log("Projeto Desenvolvido por: ");
    console.log("Nathalia Cavalcante - nathaliap@genstudents.org");
    console.log("https://github.com/Nath-Cavalcante/Nath-Cavalcante-projeto_final_bloco_01");
    console.log("==================================================================================",colors.reset);
}

main();