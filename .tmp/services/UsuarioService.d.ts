import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
export declare class UsuarioService {
    http: Http;
    private headers;
    constructor(http: Http);
    loginUsuario(usuarioLog: any): any;
    cadastrarUsuario(usuarioCad: any): any;
    editarUsuario(usuarioCad: any): any;
    validaEmail(email: any): any;
    enviarToken(usuario: any): any;
    alteraSenha(usuarioCad: any): any;
    pesquisaUsuario(username: any): any;
    pesquisaUsuarioPorId(id: any): any;
    salvarEvento(evento: any): any;
    pesquisaEventoPorUsuario(id: any): any;
    buscaEventoUsuarioPorUsuarioData(id: any, data: any): any;
    buscaUsuarioEventoPendente(id: any): any;
    cadastrarTokenDevice(usuarioDevice: any): any;
    buscaTodosUsuarioEventoPorIdUsuario(id: any): any;
    cadastrarGrupoEvento(gpEvento: any): any;
    detelaPorToken(token: any): any;
}
