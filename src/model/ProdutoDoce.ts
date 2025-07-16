export class ProdutoDoce {
    private _codigo: number;
    private _nome: string;
    private _descricao: string;
    private _preco: number;

    constructor(codigo: number, nome: string, descricao: string, preco: number){
        this._codigo = codigo;
        this._nome = nome;
        this._descricao = descricao;
        this._preco = preco;
    }

    public get codigo(): number{
        return this._codigo;
    }

    public set codigo(value: number){
    this._codigo = value;
    }

    public get nome(): string{
        return this._nome;
    }

    public set nome(value: string){
    this._nome = value;
    }

    public get descricao(): string{
    return this._descricao;
    }

    public set descricao(value: string){
    this._descricao = value;
    }

    public get preco(): number{
    return this._preco;
    }

    public set preco(value: number){
    this._preco = value;
    }

    public visualizar(): void {
        console.log("Código: " + this._codigo);
        console.log("Nome: " + this._nome);
        console.log("Descrição: " + this._descricao);
        console.log("Preço: " + this._preco.toFixed(2));

    }

}