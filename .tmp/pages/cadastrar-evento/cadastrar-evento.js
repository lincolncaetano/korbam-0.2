import { NavController, LoadingController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { LocalNotifications } from 'ionic-native';
import { UsuarioService } from '../../services/UsuarioService';
import { UsuarioEventoPage } from '../usuario-evento/usuario-evento';
import { UserData } from '../../services/user-data';
import moment from 'moment';
export var CadastrarEventoPage = (function () {
    function CadastrarEventoPage(nav, service, navParams, loadingController, toastCtrl, userData) {
        this.nav = nav;
        this.service = service;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.userData = userData;
        this.local = new Storage();
        this.eventoCad = {};
        this.usuario = {};
        this.isGrupoEvento = false;
        this.submitted = false;
        this.idUsuarioLogado = navParams.get("idUsuarioLogado");
        this.eventoSel = navParams.get("eventoSel");
        this.grupo = navParams.get("grupo");
        this.init();
        if (this.eventoSel != null) {
            this.eventoCad = this.eventoSel;
            var selectedDate = moment(this.eventoCad.dtInicio, 'YYYY-MM-DD');
            this.eventoCad.dtInicioString = selectedDate.format('YYYY-MM-DD');
        }
        else {
            this.eventoCad.lembrete1 = 1;
            this.eventoCad.lembrete2 = 7;
            this.eventoCad.dtInicioString = new Date().toISOString();
        }
        if (this.grupo != null) {
            this.isGrupoEvento = true;
        }
    }
    CadastrarEventoPage.prototype.init = function () {
        var _this = this;
        this.service.pesquisaUsuarioPorId(this.idUsuarioLogado)
            .subscribe(function (data) { return _this.retorno = data; }, function (err) { return _this.logError(err); }, function () { return _this.pesquisaComplete(); });
    };
    CadastrarEventoPage.prototype.pesquisaComplete = function () {
        if (this.retorno != false) {
            this.usuario = this.retorno;
        }
    };
    CadastrarEventoPage.prototype.funcaoPraAceitarSubmeterForm = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var loading_1 = this.loadingController.create({
                spinner: 'dots'
            });
            loading_1.present();
            this.eventoCad.usuario = this.usuario;
            setTimeout(function () {
                _this.nav.push(UsuarioEventoPage, { evento: _this.eventoCad });
            }, 500);
            setTimeout(function () {
                loading_1.dismiss();
            }, 1000);
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Mmmm, buttered toast',
                duration: 2000,
                position: 'top'
            });
            toast.present(toast);
        }
    };
    CadastrarEventoPage.prototype.logError = function (err) {
    };
    CadastrarEventoPage.prototype.loginComplete = function () {
    };
    CadastrarEventoPage.prototype.funcaoPraRedirecionarPraOutroLugar = function () {
        this.nav.pop();
    };
    CadastrarEventoPage.prototype.cadastraEventoGrupo = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.eventoCad.usuario = this.usuario;
            var grupoEvento = {
                evento: this.eventoCad,
                grupo: this.grupo
            };
            this.service.cadastrarGrupoEvento(grupoEvento)
                .subscribe(function (data) { return _this.eventoResp = data; }, function (err) { return _this.logEventoError(err); }, function () { return _this.salvarEventoComplete(); });
        }
    };
    CadastrarEventoPage.prototype.logEventoError = function (err) {
        console.log(err);
    };
    CadastrarEventoPage.prototype.salvarEventoComplete = function () {
        var dateAlarme0 = moment(this.eventoCad.dtInicioString + " " + this.eventoCad.hrInicial, 'YYYY-MM-DD HH:mm');
        var dateAlarme1 = this.configuraAlerta(this.eventoCad.lembrete1);
        var dateAlarme2 = this.configuraAlerta(this.eventoCad.lembrete2);
        var msgAlerta1 = this.configuraMsgAlerta(this.eventoCad.lembrete1);
        var msgAlerta2 = this.configuraMsgAlerta(this.eventoCad.lembrete2);
        var id0 = parseInt(this.eventoResp.id + "0");
        var id1 = parseInt(this.eventoResp.id + "1");
        var id2 = parseInt(this.eventoResp.id + "2");
        LocalNotifications.schedule({
            id: id0,
            text: "O evento" + this.eventoCad.titulo + ' acabou de começar',
            at: dateAlarme0.toDate(),
            led: 'FF0000',
            sound: 'file://beep.caf'
        });
        LocalNotifications.schedule({
            id: id1,
            text: msgAlerta1,
            at: dateAlarme1.toDate(),
            led: 'FF0000',
            sound: 'file://beep.caf'
        });
        LocalNotifications.schedule({
            id: id2,
            text: msgAlerta2,
            at: dateAlarme2.toDate(),
            led: 'FF0000',
            sound: 'file://beep.caf'
        });
        this.nav.pop();
    };
    CadastrarEventoPage.prototype.configuraAlerta = function (codLembrete) {
        if (codLembrete == 1) {
            return moment(this.eventoCad.dtInicioString + " " + this.eventoCad.hrInicial, 'YYYY-MM-DD HH:mm').subtract(2, "minutes");
        }
        else if (codLembrete == 2) {
            return moment(this.eventoCad.dtInicioString + " " + this.eventoCad.hrInicial, 'YYYY-MM-DD HH:mm').subtract(1, "hours");
        }
        else if (codLembrete == 3) {
            return moment(this.eventoCad.dtInicioString + " " + this.eventoCad.hrInicial, 'YYYY-MM-DD HH:mm').subtract(2, "hours");
        }
        else if (codLembrete == 4) {
            return moment(this.eventoCad.dtInicioString + " " + this.eventoCad.hrInicial, 'YYYY-MM-DD HH:mm').subtract(4, "hours");
        }
        else if (codLembrete == 5) {
            return moment(this.eventoCad.dtInicioString + " " + this.eventoCad.hrInicial, 'YYYY-MM-DD HH:mm').subtract(8, "hours");
        }
        else if (codLembrete == 6) {
            return moment(this.eventoCad.dtInicioString + " " + this.eventoCad.hrInicial, 'YYYY-MM-DD HH:mm').subtract(12, "hours");
        }
        else if (codLembrete == 7) {
            return moment(this.eventoCad.dtInicioString + " " + this.eventoCad.hrInicial, 'YYYY-MM-DD HH:mm').subtract(1, "days");
        }
        else if (codLembrete == 8) {
            return moment(this.eventoCad.dtInicioString + " " + this.eventoCad.hrInicial, 'YYYY-MM-DD HH:mm').subtract(2, "days");
        }
    };
    CadastrarEventoPage.prototype.configuraMsgAlerta = function (codLembrete) {
        if (codLembrete == 1) {
            return "Faltam 30 minutos para o evento " + this.eventoCad.titulo;
        }
        else if (codLembrete == 2) {
            return "Falta 1 hora para o evento " + this.eventoCad.titulo;
        }
        else if (codLembrete == 3) {
            return "Faltam 2 horas para o evento " + this.eventoCad.titulo;
        }
        else if (codLembrete == 4) {
            return "Faltam 4 horas para o evento " + this.eventoCad.titulo;
        }
        else if (codLembrete == 5) {
            return "Faltam 8 horas para o evento " + this.eventoCad.titulo;
        }
        else if (codLembrete == 6) {
            return "Faltam 12 horas para o evento " + this.eventoCad.titulo;
        }
        else if (codLembrete == 7) {
            return "Falta 1 dia para o evento " + this.eventoCad.titulo;
        }
        else if (codLembrete == 8) {
            return "Faltam 2 dias para o evento " + this.eventoCad.titulo;
        }
    };
    CadastrarEventoPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'cadastrar-evento.html',
                    providers: [UsuarioService, UserData],
                },] },
    ];
    /** @nocollapse */
    CadastrarEventoPage.ctorParameters = [
        { type: NavController, },
        { type: UsuarioService, },
        { type: NavParams, },
        { type: LoadingController, },
        { type: ToastController, },
        { type: UserData, },
    ];
    return CadastrarEventoPage;
}());
