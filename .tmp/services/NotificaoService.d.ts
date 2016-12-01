import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export declare class NotificaoService {
    http: Http;
    private headers;
    constructor(http: Http);
    static readonly parameters: typeof Http[][];
    buscaNotificacoes(idUsuario: any): any;
    atualizaNotificacao(listaNotificacao: any): any;
    pesquisaUsuarioEvento(idUsuario: any, idEvento: any): any;
}
