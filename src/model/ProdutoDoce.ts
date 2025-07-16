export class ProdutoDoce {
    private _codigo: number;
    private _nome: string;
    private _descricao: string;
    public _preco: number;

    constructor(codigo: number, nome: string, descricao: string, preco: number){
        this._codigo = codigo;
        this._nome = nome;
        this._descricao = descricao;
        this._preco = preco;
    }

    public get codigo(): number{
        return this._codigo;
    }

    public get nome(): string{
        return this._nome;
    }

    public get descricao(): string{
    return this._descricao;
    }

    public get preco(): number{
    return this._preco;
    }

    public visualizar(): void {
        console.log("Código: " + this._codigo);
        console.log("Nome: " + this._nome);
        console.log("Descrição " + this._descricao);
        console.log("Preço: " + this._preco.toFixed(2));

    }

}