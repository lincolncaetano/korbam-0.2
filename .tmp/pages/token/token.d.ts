import { NavController } from 'ionic-angular';
import { UsuarioService } from '../../services/UsuarioService';
export declare class TokenPage {
    nav: NavController;
    service: UsuarioService;
    name: String;
    submitted: any;
    login: any;
    data1: any;
    usuario: any;
    constructor(nav: NavController, service: UsuarioService);
    doSalvar(form: any): void;
    logError(err: any): void;
}
