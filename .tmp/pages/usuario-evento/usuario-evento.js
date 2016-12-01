import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';
import { Component } from '@angular/core';
import { AmizadeService } from '../../services/AmizadeService';
import moment from 'moment';
export var UsuarioEventoPage = (function () {
    function UsuarioEventoPage(nav, navParams, service, loadingController) {
        this.nav = nav;
        this.navParams = navParams;
        this.service = service;
        this.loadingController = loadingController;
        this.namePage = "UsuarioEventoPage";
        this.searchQuery = '';
        this.eventoCad = navParams.get('evento');
        this.initializeItems();
    }
    UsuarioEventoPage.prototype.loginComplete = function () {
        if (this.listaResp != false) {
            for (var _i = 0, _a = this.listaResp; _i < _a.length; _i++) {
                var user = _a[_i];
                user.checked = false;
            }
            this.items = this.listaResp;
        }
        if (this.eventoCad.listaUsuario != null) {
            for (var _b = 0, _c = this.eventoCad.listaUsuario; _b < _c.length; _b++) {
                var user = _c[_b];
                for (var _d = 0, _e = this.listaResp; _d < _e.length; _d++) {
                    var userAux = _e[_d];
                    if (user.id == userAux.id) {
                        userAux.checked = true;
                    }
                }
            }
        }
    };
    UsuarioEventoPage.prototype.logError = function (err) {
    };
    UsuarioEventoPage.prototype.initializeItems = function () {
        var _this = this;
        this.service.listaAmigos(this.eventoCad.usuario.id)
            .subscribe(function (data) { return _this.listaResp = data; }, function (err) { return _this.logError(err); }, function () { return _this.loginComplete(); });
    };
    UsuarioEventoPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        //this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.value;
        // if the value is an empty string don't filter the items
        if (q.trim() == '') {
            this.items = this.listaResp;
            return false;
        }
        this.items = this.listaResp.filter(function (v) {
            if (v.username.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            return false;
        });
    };
    UsuarioEventoPage.prototype.change = function (usuario) {
        for (var _i = 0, _a = this.listaResp; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.id == usuario.id) {
                if (user.checked == true) {
                    user.checked = false;
                }
                else {
                    user.checked = true;
                }
            }
        }
    };
    UsuarioEventoPage.prototype.salvarEvento = function () {
        var _this = this;
        var lista = [];
        var cont = 0;
        var adicionado = false;
        var eventoUsuario;
        for (var _i = 0, _a = this.listaResp; _i < _a.length; _i++) {
            var user = _a[_i];
            eventoUsuario = {};
            adicionado = false;
            if (user.checked) {
                if (this.eventoCad.listaUsuario != null) {
                    for (var _b = 0, _c = this.eventoCad.listaUsuario; _b < _c.length; _b++) {
                        var eventoUser = _c[_b];
                        if (eventoUser.id.idUsuario == user.id) {
                            adicionado = true;
                            eventoUsuario = eventoUser;
                            break;
                        }
                    }
                }
                if (!adicionado) {
                    eventoUsuario = {
                        usuario: user,
                        status: 'P'
                    };
                    lista[cont] = eventoUsuario;
                }
                cont++;
            }
        }
        this.eventoCad.listaUsuario = lista;
        this.service.salvarEvento(this.eventoCad)
            .subscribe(function (data) { return _this.eventoResp = data; }, function (err) { return _this.logEventoError(err); }, function () { return _this.salvarEventoComplete(); });
        this.salvarEventoComplete();
    };
    UsuarioEventoPage.prototype.logEventoError = function (err) {
        console.log(err);
    };
    UsuarioEventoPage.prototype.salvarEventoComplete = function () {
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
            badge: 1,
            at: dateAlarme0.toDate(),
            sound: 'file://beep.caf'
        });
        LocalNotifications.schedule({
            id: id1,
            text: msgAlerta1,
            badge: 1,
            at: dateAlarme1.toDate(),
            sound: 'file://beep.caf'
        });
        LocalNotifications.schedule({
            id: id2,
            text: msgAlerta2,
            badge: 1,
            at: dateAlarme2.toDate(),
            sound: 'file://beep.caf'
        });
        this.nav.popToRoot();
    };
    UsuarioEventoPage.prototype.configuraAlerta = function (codLembrete) {
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
    UsuarioEventoPage.prototype.configuraMsgAlerta = function (codLembrete) {
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
    UsuarioEventoPage.prototype.isDisabled = function (item) {
        if (this.eventoCad.listaUsuario != null) {
            for (var _i = 0, _a = this.eventoCad.listaUsuario; _i < _a.length; _i++) {
                var user = _a[_i];
                if (item.id == user.id) {
                    return true;
                }
            }
        }
    };
    UsuarioEventoPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'usuario-evento.html',
                    providers: [AmizadeService],
                },] },
    ];
    /** @nocollapse */
    UsuarioEventoPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: AmizadeService, },
        { type: LoadingController, },
    ];
    return UsuarioEventoPage;
}());
