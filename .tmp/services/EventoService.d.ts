import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export declare class EventoService {
    http: Http;
    private headers;
    constructor(http: Http);
    static readonly parameters: typeof Http[][];
    buscaListaUsuarioPorEvento(idEvento: any): any;
    salvarUsuarioEvento(usuarioEvento: any): any;
    deteleUsuarioEvento(idUsuario: any, idEvento: any): any;
    detelaEventoEvento(idEvento: any): any;
}
