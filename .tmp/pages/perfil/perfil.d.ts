import { NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../services/UsuarioService';
import { UserData } from '../../services/user-data';
export declare class PerfilPage {
    nav: NavController;
    service: UsuarioService;
    navParams: NavParams;
    userData: UserData;
    idUsuarioLogado: any;
    idUsuario: number;
    usuario: any;
    private retorno;
    constructor(nav: NavController, service: UsuarioService, navParams: NavParams, userData: UserData);
    init(): void;
    ionViewDidEnter(): void;
    logError(err: any): void;
    pesquisaComplete(): void;
    logout(): void;
    editar(): void;
}
