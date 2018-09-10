import { Modelo } from './../../modelo/shared/class/modelo';


export class Veiculo {
    id: number;
    ano_fabricacao: number;
    cor: string;
    placa: string;
    chassi: string;
    renavam: string;
    modelo: Modelo = new Modelo();
}