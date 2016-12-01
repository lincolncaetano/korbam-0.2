import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { GrupoService } from '../../services/GrupoService';
export declare class UsuarioGrupoPage {
    nav: NavController;
    navParams: NavParams;
    service: GrupoService;
    loadingController: LoadingController;
    namePage: any;
    searchQuery: string;
    items: any;
    listaResp: any;
    grupoCad: any;
    grupoResp: any;
    constructor(nav: NavController, navParams: NavParams, service: GrupoService, loadingController: LoadingController);
    loginComplete(): void;
    logError(err: any): void;
    initializeItems(): void;
    getItems(searchbar: any): boolean;
    change(usuario: any): void;
    salvargrupo(): void;
    logGrupoError(err: any): void;
    salvarGrupoComplete(): void;
}
