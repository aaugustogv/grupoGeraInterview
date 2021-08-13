import { FaturaModel } from "./fatura.model";

export class DistribuidoraModel {
    distribuidora: string;
    endereco: any;
    nome: any;
    numero: number;
    id: any;
    fatura: Array<FaturaModel>

    aberto: boolean;
}