import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export declare class GrupoService {
    http: Http;
    private headers;
    constructor(http: Http);
    static readonly parameters: typeof Http[][];
    buscaGruposIdUsuario(idUsuario: any): any;
    salvarGrupo(grupo: any): any;
    listaAmigos(id: any): any;
    pesquisaGrupoPorId(idGrupo: any): any;
    pesquisaUsuarioEvento(idUsuario: any, idEvento: any): any;
}
