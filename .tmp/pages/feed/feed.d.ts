import { NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../services/UsuarioService';
export declare class FeedPage {
    nav: NavController;
    service: UsuarioService;
    navParams: NavParams;
    searchQuery: String;
    items: any;
    retorno: any;
    private idUsuarioLogado;
    constructor(nav: NavController, service: UsuarioService, navParams: NavParams);
    onKey(event: any): void;
    pesquisaComplete(): void;
    logError(err: any): void;
    goUsuario(idUsuario: any): void;
}
