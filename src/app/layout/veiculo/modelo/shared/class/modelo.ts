import { Marca } from './../../../marca/shared/class/marca';


export class Modelo{
    id: number;
    nome: string;
    ano: number;
    marca: Marca = new Marca();
}