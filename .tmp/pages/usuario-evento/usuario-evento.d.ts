import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AmizadeService } from '../../services/AmizadeService';
import moment from 'moment';
export declare class UsuarioEventoPage {
    nav: NavController;
    navParams: NavParams;
    service: AmizadeService;
    loadingController: LoadingController;
    namePage: any;
    searchQuery: string;
    items: any;
    listaResp: any;
    eventoCad: any;
    eventoResp: any;
    constructor(nav: NavController, navParams: NavParams, service: AmizadeService, loadingController: LoadingController);
    loginComplete(): void;
    logError(err: any): void;
    initializeItems(): void;
    getItems(searchbar: any): boolean;
    change(usuario: any): void;
    salvarEvento(): void;
    logEventoError(err: any): void;
    salvarEventoComplete(): void;
    configuraAlerta(codLembrete: any): moment.Moment;
    configuraMsgAlerta(codLembrete: any): string;
    isDisabled(item: any): boolean;
}
