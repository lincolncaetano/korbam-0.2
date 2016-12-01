import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import moment from 'moment';
import { LocalNotifications } from 'ionic-native';
import { CadastrarEventoPage } from '../cadastrar-evento/cadastrar-evento';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';
import { UsuarioEventoPage } from '../usuario-evento/usuario-evento';
import { EventoService } from '../../services/EventoService';
export var EventoPage = (function () {
    function EventoPage(nav, navParams, service, actionSheetCtrl, alertCtrl) {
        this.nav = nav;
        this.navParams = navParams;
        this.service = service;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.local = new Storage();
        this.atualizarAgenda = false;
        this.segEvento = "descricao";
        this.idUsuarioLogado = navParams.get("idUsuarioLogado");
        this.usuarioEvento = navParams.get("usuarioEvento");
        this.init();
    }
    EventoPage.prototype.init = function () {
        var _this = this;
        if (this.usuarioEvento != null) {
            if (this.usuarioEvento.evento.usuario.id == this.idUsuarioLogado) {
                this.isAdmin = true;
            }
            this.service.buscaListaUsuarioPorEvento(this.usuarioEvento.evento.id)
                .subscribe(function (data) { return _this.usuEvenResp = data; }, function (err) { return _this.logError(err); }, function () { return _this.buscaUsuarioEventoComplete(); });
        }
        var selectedDate = moment(this.usuarioEvento.evento.dtInicio, 'YYYY-MM-DD');
        this.usuarioEvento.evento.dtInicioString = selectedDate.format('YYYY-MM-DD');
        var selectedDate2 = moment(this.usuarioEvento.evento.dtInicio, moment.ISO_8601);
        this.usuarioEvento.evento.momento = selectedDate2;
    };
    EventoPage.prototype.logError = function (err) {
        console.log(err);
    };
    EventoPage.prototype.buscaUsuarioEventoComplete = function () {
        if (this.usuEvenResp != false) {
            this.listaUsuarios = this.usuEvenResp;
            this.usuarioEvento.evento.listaUsuario = this.listaUsuarios;
        }
    };
    EventoPage.prototype.respostaConvite = function (resposta) {
        var _this = this;
        this.usuarioEvento.id = {
            idUsuario: this.usuarioEvento.usuario.id,
            idEvento: this.usuarioEvento.evento.id
        };
        this.usuarioEvento.status = resposta;
        var usuario = {
            id: {
                idUsuario: this.usuarioEvento.usuario.id,
                idEvento: this.usuarioEvento.evento.id
            },
            evento: {
                id: this.usuarioEvento.evento.id,
                usuario: { id: this.usuarioEvento.evento.usuario.id },
                titulo: this.usuarioEvento.evento.titulo
            },
            usuario: {
                id: this.usuarioEvento.usuario.id,
                username: this.usuarioEvento.usuario.username
            },
            status: resposta
        };
        this.service.salvarUsuarioEvento(usuario)
            .subscribe(function (data) { return _this.retonorSalvarUsuarioEvento = data; }, function (err) { return _this.logError(err); }, function () { return _this.salvarUsuarioEventoComplete(); });
    };
    EventoPage.prototype.salvarUsuarioEventoComplete = function () {
        if (this.retonorSalvarUsuarioEvento != null && this.retonorSalvarUsuarioEvento != false) {
            if (this.usuarioEvento.status == 'A') {
                this.salvarLembrete();
            }
        }
    };
    EventoPage.prototype.salvarLembrete = function () {
        var dateAlarme0 = moment(this.usuarioEvento.evento.dtInicioString + " " + this.usuarioEvento.evento.hrInicial, 'YYYY-MM-DD HH:mm');
        var dateAlarme1 = this.configuraAlerta(this.usuarioEvento.evento.lembrete1);
        var dateAlarme2 = this.configuraAlerta(this.usuarioEvento.evento.lembrete2);
        var msgAlerta1 = this.configuraMsgAlerta(this.usuarioEvento.evento.lembrete1);
        var msgAlerta2 = this.configuraMsgAlerta(this.usuarioEvento.evento.lembrete2);
        var id0 = parseInt(this.usuarioEvento.evento.id + "0");
        var id1 = parseInt(this.usuarioEvento.evento.id + "1");
        var id2 = parseInt(this.usuarioEvento.evento.id + "2");
        LocalNotifications.schedule({
            id: id0,
            text: "O evento" + this.usuarioEvento.evento.titulo + ' acabou de começar',
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
        this.nav.popToRoot();
    };
    EventoPage.prototype.configuraAlerta = function (codLembrete) {
        if (codLembrete == 1) {
            return moment(this.usuarioEvento.evento.dtInicioString + " " + this.usuarioEvento.evento.hrInicial, 'YYYY-MM-DD HH:mm').subtract(2, "minutes");
        }
        else if (codLembrete == 2) {
            return moment(this.usuarioEvento.evento.dtInicioString + " " + this.usuarioEvento.evento.hrInicial, 'YYYY-MM-DD HH:mm').subtract(1, "hours");
        }
        else if (codLembrete == 3) {
            return moment(this.usuarioEvento.evento.dtInicioString + " " + this.usuarioEvento.evento.hrInicial, 'YYYY-MM-DD HH:mm').subtract(2, "hours");
        }
        else if (codLembrete == 4) {
            return moment(this.usuarioEvento.evento.dtInicioString + " " + this.usuarioEvento.evento.hrInicial, 'YYYY-MM-DD HH:mm').subtract(4, "hours");
        }
        else if (codLembrete == 5) {
            return moment(this.usuarioEvento.evento.dtInicioString + " " + this.usuarioEvento.evento.hrInicial, 'YYYY-MM-DD HH:mm').subtract(8, "hours");
        }
        else if (codLembrete == 6) {
            return moment(this.usuarioEvento.evento.dtInicioString + " " + this.usuarioEvento.evento.hrInicial, 'YYYY-MM-DD HH:mm').subtract(12, "hours");
        }
        else if (codLembrete == 7) {
            return moment(this.usuarioEvento.evento.dtInicioString + " " + this.usuarioEvento.evento.hrInicial, 'YYYY-MM-DD HH:mm').subtract(1, "days");
        }
        else if (codLembrete == 8) {
            return moment(this.usuarioEvento.evento.dtInicioString + " " + this.usuarioEvento.evento.hrInicial, 'YYYY-MM-DD HH:mm').subtract(2, "days");
        }
    };
    EventoPage.prototype.configuraMsgAlerta = function (codLembrete) {
        if (codLembrete == 1) {
            return "Faltam 30 minutos para o evento " + this.usuarioEvento.evento.titulo;
        }
        else if (codLembrete == 2) {
            return "Falta 1 hora para o evento " + this.usuarioEvento.evento.titulo;
        }
        else if (codLembrete == 3) {
            return "Faltam 2 horas para o evento " + this.usuarioEvento.evento.titulo;
        }
        else if (codLembrete == 4) {
            return "Faltam 4 horas para o evento " + this.usuarioEvento.evento.titulo;
        }
        else if (codLembrete == 5) {
            return "Faltam 8 horas para o evento " + this.usuarioEvento.evento.titulo;
        }
        else if (codLembrete == 6) {
            return "Faltam 12 horas para o evento " + this.usuarioEvento.evento.titulo;
        }
        else if (codLembrete == 7) {
            return "Falta 1 dia para o evento " + this.usuarioEvento.evento.titulo;
        }
        else if (codLembrete == 8) {
            return "Faltam 2 dias para o evento " + this.usuarioEvento.evento.titulo;
        }
    };
    EventoPage.prototype.presentActionSheet = function (item) {
        var _this = this;
        if (item.id == this.usuarioEvento.usuario.id) {
            return;
        }
        if (this.isAdmin) {
            var actionSheet = this.actionSheetCtrl.create({
                buttons: [
                    {
                        text: 'Dados',
                        handler: function () {
                            _this.nav.push(PerfilUsuarioPage, { idUsuario: item.id, idUsuarioLogado: _this.idUsuarioLogado });
                        }
                    },
                    {
                        text: 'Remover ' + item.username,
                        role: 'destructive',
                        handler: function () {
                            _this.deteleUsuarioEvento(item.id);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            var actionSheet = this.actionSheetCtrl.create({
                buttons: [
                    {
                        text: 'Dados',
                        handler: function () {
                            _this.nav.push(PerfilUsuarioPage, { idUsuario: item.id, idUsuarioLogado: _this.idUsuarioLogado });
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        }
    };
    EventoPage.prototype.adicionarUsuario = function () {
        this.nav.push(UsuarioEventoPage, { evento: this.usuarioEvento.evento });
    };
    EventoPage.prototype.configurarEvento = function () {
        this.nav.push(CadastrarEventoPage, { idUsuarioLogado: this.idUsuarioLogado, eventoSel: this.usuarioEvento.evento });
    };
    EventoPage.prototype.deteleUsuarioEvento = function (idUsuario) {
        var _this = this;
        this.service.deteleUsuarioEvento(idUsuario, this.usuarioEvento.evento.id)
            .subscribe(function (data) { return _this.usuEvenResp = data; }, function (err) { return _this.logError(err); }, function () { return _this.deleteUsuarioComplete(); });
    };
    EventoPage.prototype.deleteUsuarioComplete = function () {
        this.init();
    };
    EventoPage.prototype.confirmaExclusao = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Deseja realmente excluir o evento?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.detelaEvento();
                    }
                }
            ]
        });
        alert.present();
    };
    EventoPage.prototype.detelaEvento = function () {
        var _this = this;
        this.service.detelaEventoEvento(this.usuarioEvento.evento.id)
            .subscribe(function (data) { return _this.usuEvenResp = data; }, function (err) { return _this.logError(err); }, function () { return _this.deletaEventoComplete(); });
    };
    EventoPage.prototype.deletaEventoComplete = function () {
        this.atualizarAgenda = true;
        this.nav.pop();
    };
    EventoPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'evento.html',
                    providers: [EventoService]
                },] },
    ];
    /** @nocollapse */
    EventoPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: EventoService, },
        { type: ActionSheetController, },
        { type: AlertController, },
    ];
    return EventoPage;
}());
