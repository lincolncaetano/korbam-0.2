import { NavController, NavParams } from 'ionic-angular';
import { GrupoService } from '../../services/GrupoService';
export declare class ListaGruposPage {
    nav: NavController;
    navParams: NavParams;
    service: GrupoService;
    private idUsuarioLogado;
    private retorno;
    meusGrupos: any;
    constructor(nav: NavController, navParams: NavParams, service: GrupoService);
    ionViewDidEnter(): void;
    init(): void;
    criarGrupo(): void;
    abreGrupo(item: any): void;
    logError(err: any): void;
    buscaGrupoComplete(): void;
    doRefresh(refresher: any): void;
}
