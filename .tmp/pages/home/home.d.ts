import { NavController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UsuarioService } from '../../services/UsuarioService';
import { UserData } from '../../services/user-data';
export declare class HomePage {
    nav: NavController;
    service: UsuarioService;
    platform: Platform;
    userData: UserData;
    name: String;
    submitted: any;
    login: any;
    usrRe: any;
    user: any;
    local: Storage;
    constructor(nav: NavController, service: UsuarioService, platform: Platform, userData: UserData);
    onSubmit(form: any): void;
    loginSucess(data: any): void;
    logError(err: any): void;
    loginComplete(): void;
    cadUserDevSucess(data: any): void;
    cadUserDevComplete(): void;
    doSignup(): void;
    forgotPwd(): void;
}
