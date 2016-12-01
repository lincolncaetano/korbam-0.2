import { NavController, LoadingController, NavParams, ToastController } from 'ionic-angular';
import { UsuarioService } from '../../services/UsuarioService';
export declare class CadastrarGrupoPage {
    nav: NavController;
    service: UsuarioService;
    navParams: NavParams;
    loadingController: LoadingController;
    toastCtrl: ToastController;
    grupoCad: any;
    grupoResp: any;
    grupoEdit: any;
    private submitted;
    private idUsuarioLogado;
    constructor(nav: NavController, service: UsuarioService, navParams: NavParams, loadingController: LoadingController, toastCtrl: ToastController);
    funcaoPraAceitarSubmeterForm(form: any): void;
    logError(err: any): void;
    loginComplete(): void;
    funcaoPraRedirecionarPraOutroLugar(): void;
}
