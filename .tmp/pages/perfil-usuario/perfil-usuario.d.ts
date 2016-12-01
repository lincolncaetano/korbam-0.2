import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AmizadeService } from '../../services/AmizadeService';
export declare class PerfilUsuarioPage {
    nav: NavController;
    navParams: NavParams;
    service: AmizadeService;
    popOver: PopoverController;
    idUsuario: any;
    idUsuarioLogado: any;
    usuario: any;
    usrRe: any;
    retorno: any;
    amzRe: any;
    username: String;
    local: Storage;
    cancelarSolicitacao: boolean;
    constructor(nav: NavController, navParams: NavParams, service: AmizadeService, popOver: PopoverController);
    loginComplete(): void;
    amizadeComplete(amizade: any): void;
    solicitaAmizade(): void;
    logError(err: any): void;
    AmizadeComplete(): void;
    presentPopover(myEvent: any): void;
    mostrarOpcoes(elemento: any): void;
}
