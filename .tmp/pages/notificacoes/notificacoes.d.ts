import { NavController, NavParams } from 'ionic-angular';
import { NotificaoService } from '../../services/NotificaoService';
import { UserData } from '../../services/user-data';
export declare class NotificacoesPage {
    nav: NavController;
    service: NotificaoService;
    navParams: NavParams;
    userData: UserData;
    private idUsuarioLogado;
    private retorno;
    notificacoes: any;
    private notificacoesAtualizar;
    private usuarioEventoRe;
    constructor(nav: NavController, service: NotificaoService, navParams: NavParams, userData: UserData);
    ionViewWillLeave(): void;
    atualizacaoComplete(): void;
    buscaNotifComplete(): void;
    logError(err: any): void;
    goUsuario(idUsuario: any): void;
    doRefresh(refresher: any): void;
    abrirEvento(item: any): void;
    buscaUsuarioEventoComplete(): void;
}
