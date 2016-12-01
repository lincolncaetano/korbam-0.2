import { NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { AgendaPage } from '../agenda/agenda';
import { PerfilPage } from '../perfil/perfil';
import { NotificacoesPage } from '../notificacoes/notificacoes';
import { ListaGruposPage } from '../lista-grupos/lista-grupos';
import { NotificaoService } from '../../services/NotificaoService';
import { UserData } from '../../services/user-data';
export declare class TabsPage {
    service: NotificaoService;
    userData: UserData;
    tabTwo: typeof FeedPage;
    tabThree: typeof PerfilPage;
    tabFour: typeof AgendaPage;
    tabFive: typeof NotificacoesPage;
    tabSix: typeof ListaGruposPage;
    isAndroid: boolean;
    idUsuarioLogado: any;
    retorno: any;
    nNotif: number;
    constructor(platform: Platform, navParams: NavParams, service: NotificaoService, userData: UserData);
    logError(err: any): void;
    buscaNotifComplete(): void;
    chat(): void;
    onPageWillLeave(): void;
}
