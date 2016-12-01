import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';
import { EventoPage } from '../evento/evento';
import { NotificaoService } from '../../services/NotificaoService';
import { UserData } from '../../services/user-data';
import moment from 'moment';
export var NotificacoesPage = (function () {
    function NotificacoesPage(nav, service, navParams, userData) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.navParams = navParams;
        this.userData = userData;
        this.notificacoesAtualizar = [];
        console.log("------------" + navParams.data);
        this.idUsuarioLogado = navParams.data;
        this.notificacoes = [];
        this.service.buscaNotificacoes(this.idUsuarioLogado)
            .subscribe(function (data) { return _this.retorno = data; }, function (err) { return _this.logError(err); }, function () { return _this.buscaNotifComplete(); });
    }
    NotificacoesPage.prototype.ionViewWillLeave = function () {
        var _this = this;
        for (var _i = 0, _a = this.notificacoes; _i < _a.length; _i++) {
            var notificacao = _a[_i];
            if (notificacao.status == "P") {
                this.notificacoesAtualizar.push(notificacao);
            }
        }
        if (this.notificacoesAtualizar.length > 0) {
            this.service.atualizaNotificacao(this.notificacoesAtualizar)
                .subscribe(function (data) { return _this.retorno = data; }, function (err) { return _this.logError(err); }, function () { return _this.atualizacaoComplete(); });
        }
    };
    NotificacoesPage.prototype.atualizacaoComplete = function () {
    };
    NotificacoesPage.prototype.buscaNotifComplete = function () {
        if (this.retorno != false) {
            this.notificacoes = this.retorno;
            for (var _i = 0, _a = this.retorno; _i < _a.length; _i++) {
                var notif = _a[_i];
                if (notif.evento != null) {
                    var selectedDate = moment(notif.evento.dtInicio, moment.ISO_8601);
                    notif.evento.momento = selectedDate;
                }
            }
        }
    };
    NotificacoesPage.prototype.logError = function (err) {
        console.log(err);
    };
    NotificacoesPage.prototype.goUsuario = function (idUsuario) {
        this.nav.push(PerfilUsuarioPage, { idUsuario: idUsuario, idUsuarioLogado: this.idUsuarioLogado });
    };
    NotificacoesPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.service.buscaNotificacoes(this.idUsuarioLogado)
            .subscribe(function (data) { return _this.retorno = data; }, function (err) { return _this.logError(err); }, function () { return _this.buscaNotifComplete(); });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    NotificacoesPage.prototype.abrirEvento = function (item) {
        var _this = this;
        this.service.pesquisaUsuarioEvento(this.idUsuarioLogado, item.evento.id)
            .subscribe(function (data) { return _this.usuarioEventoRe = data; }, function (err) { return _this.logError(err); }, function () { return _this.buscaUsuarioEventoComplete(); });
    };
    NotificacoesPage.prototype.buscaUsuarioEventoComplete = function () {
        if (this.usuarioEventoRe != false && this.usuarioEventoRe != true) {
            this.nav.push(EventoPage, { idUsuarioLogado: this.idUsuarioLogado, usuarioEvento: this.usuarioEventoRe });
        }
        else if (this.usuarioEventoRe == true) {
        }
    };
    NotificacoesPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'notificacoes.html',
                    providers: [NotificaoService]
                },] },
    ];
    /** @nocollapse */
    NotificacoesPage.ctorParameters = [
        { type: NavController, },
        { type: NotificaoService, },
        { type: NavParams, },
        { type: UserData, },
    ];
    return NotificacoesPage;
}());
