import { NavController } from 'ionic-angular';
import { UsuarioService } from '../../services/UsuarioService';
export declare class CadastroPage {
    nav: NavController;
    service: UsuarioService;
    signup: any;
    signupForm: any;
    submitted: any;
    usuario: any;
    showValUsername: Boolean;
    showUsernameError: Boolean;
    showUsernameOk: Boolean;
    showValEmail: Boolean;
    showEmailError: Boolean;
    showEmailOk: Boolean;
    constructor(nav: NavController, service: UsuarioService);
    doSignup(form: any): void;
    completeCad(): void;
    logError(err: any): void;
    verificaEmail(): void;
    verificadoEmail(data: any): void;
    verificaUsername(): void;
    verificadoUsername(data: any): void;
}
