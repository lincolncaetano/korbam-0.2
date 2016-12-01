import { NavController } from 'ionic-angular';
import { UsuarioService } from '../../services/UsuarioService';
export declare class EsqueceuSenhaPage {
    private nav;
    private service;
    signup: any;
    signupForm: any;
    submitted: any;
    usuario: any;
    data1: any;
    constructor(nav: NavController, service: UsuarioService);
    doEnviar(form: any): void;
    verificadoEmail(data: any): void;
    logError(err: any): void;
    token(): void;
}
