import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export declare class AmizadeService {
    http: Http;
    private headers;
    constructor(http: Http);
    static readonly parameters: typeof Http[][];
    pesquisaUsuarioPorId(id: any): any;
    solicitaAmizade(amizade: any): any;
    listaAmigos(id: any): any;
    salvarEvento(evento: any): any;
    buscaAmizadeId(idUsuario: any, idUsuarioSolicitado: any): any;
    cancelarAmizade(amizade: any): any;
}
