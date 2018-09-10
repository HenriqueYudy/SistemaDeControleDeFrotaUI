import { Empresa } from "../../empresa/shared/class/empresa";



export class Frota {
    id: number;
    nome: string;
    empresa: Empresa = new Empresa();
}