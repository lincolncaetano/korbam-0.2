import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UsuarioService } from '../../services/UsuarioService';
import { UserData } from '../../services/user-data';
export declare class AgendaPage {
    nav: NavController;
    service: UsuarioService;
    navParams: NavParams;
    userData: UserData;
    local: Storage;
    dateValue: String;
    viewValue: String;
    days: Array<Object>;
    weeks: Array<Array<Object>>;
    dayNames: Array<string>;
    private date;
    private cannonical;
    dataSelect: string;
    private listaEventos;
    private meusEventos;
    private convitesEvento;
    private listaTodosEventos;
    private retorno;
    private idUsuario;
    private idUsuarioLogado;
    modelFormat: string;
    viewFormat: string;
    private firstWeekDaySunday;
    calendario: any;
    constructor(nav: NavController, service: UsuarioService, navParams: NavParams, userData: UserData);
    ionViewDidLoad(): void;
    ionViewDidEnter(): void;
    consultaEvento(data: any): void;
    prevYear(): void;
    prevMonth(): void;
    nextYear(): void;
    nextMonth(): void;
    selectDate(e: any, date: any): void;
    logError(err: any): void;
    loginComplete(): void;
    private generateCalendar(date);
    isSelected(date: any): boolean;
    isOcupado(date: any): boolean;
    private generateDayNames();
    private setValue(value);
    private init(idUsuario);
    buscaComplete(): void;
    buscaTodosUsuarioEventoSucess(data: any): void;
    cadastrarEvento(): void;
    abrirEvento(item: any): void;
    doRefresh(refresher: any): void;
}
