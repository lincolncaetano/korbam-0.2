import { NavController, NavParams } from 'ionic-angular';
import { GrupoService } from '../../services/GrupoService';
import { UserData } from '../../services/user-data';
export declare class GrupoPage {
    nav: NavController;
    navParams: NavParams;
    service: GrupoService;
    userData: UserData;
    grupoRe: any;
    nome: any;
    segGrupo: any;
    idUsuarioLogado: any;
    idGrupo: any;
    adminGrupo: any;
    listaUsuarios: any;
    isAdmin: any;
    eventosGrupo: any;
    usuarioEventoRe: any;
    constructor(nav: NavController, navParams: NavParams, service: GrupoService, userData: UserData);
    buscaGrupoComplete(): void;
    logError(err: any): void;
    editarGrupo(): void;
    cadastrarEvento(): void;
    abrirEvento(item: any): void;
    buscaUsuarioEventoComplete(): void;
}
