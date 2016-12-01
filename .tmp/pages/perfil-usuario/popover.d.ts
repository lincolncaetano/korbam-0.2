import { ViewController, NavParams } from 'ionic-angular';
import { AmizadeService } from '../../services/AmizadeService';
export declare class PopoverPage {
    private viewCtrl;
    private navParams;
    private amizadeService;
    view: ViewController;
    navPar: NavParams;
    usuario: any;
    usuarioLogado: any;
    usrRe: any;
    amzRe: any;
    service: AmizadeService;
    cancelarSolicitacao: boolean;
    aceitarSolicitacao: boolean;
    cancelarAmizade: boolean;
    constructor(viewCtrl: ViewController, navParams: NavParams, amizadeService: AmizadeService);
    buscaAmizadeComplete(amizade: any): void;
    ngOnInit(): void;
    close(): void;
    amizade(): void;
    cancelarsolicitaAmizade(): void;
    aceitaSolicitaAmizade(): void;
    cancelarsolicitaAmizadeComplete(): void;
    logError(err: any): void;
    amizadeComplete(): void;
}
