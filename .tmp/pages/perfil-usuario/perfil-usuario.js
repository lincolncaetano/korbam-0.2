import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import moment from 'moment';
import { AmizadeService } from '../../services/AmizadeService';
import { PopoverPage } from './popover';
export var PerfilUsuarioPage = (function () {
    function PerfilUsuarioPage(nav, navParams, service, popOver) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.service = service;
        this.popOver = popOver;
        this.local = new Storage();
        this.usuario = {};
        this.idUsuario = navParams.get('idUsuario');
        this.idUsuarioLogado = navParams.get('idUsuarioLogado');
        this.service.pesquisaUsuarioPorId(this.idUsuario)
            .subscribe(function (data) { return _this.retorno = data; }, function (err) { return _this.logError(err); }, function () { return _this.loginComplete(); });
    }
    PerfilUsuarioPage.prototype.loginComplete = function () {
        if (this.retorno != false) {
            this.usuario = this.retorno;
            if (this.usuario.dataNascimento != null) {
                var selectedDate = moment(this.usuario.dataNascimento, 'YYYY-MM-DD');
                this.usuario.dataNascimentoString = selectedDate.format('YYYY-MM-DD');
                this.usuario.idade = moment().diff(selectedDate, 'years');
            }
        }
    };
    PerfilUsuarioPage.prototype.amizadeComplete = function (amizade) {
        if (amizade != false) {
            if (amizade.id.idUsuario == this.idUsuarioLogado && amizade.status == 'P') {
                this.cancelarSolicitacao = true;
            }
        }
    };
    PerfilUsuarioPage.prototype.solicitaAmizade = function () {
        var _this = this;
        var amizade = {
            id: {
                idUsuario: this.idUsuarioLogado,
                idUsuarioSolicitato: this.idUsuario
            },
            status: 'P'
        };
        this.service.solicitaAmizade(amizade)
            .subscribe(function (data) { return _this.usrRe = data; }, function (err) { return _this.logError(err); }, function () { return _this.AmizadeComplete(); });
    };
    PerfilUsuarioPage.prototype.logError = function (err) {
        console.log(err);
    };
    PerfilUsuarioPage.prototype.AmizadeComplete = function () {
    };
    PerfilUsuarioPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popOver.create(PopoverPage, {
            usuario: this.usuario,
            usuarioLogado: this.idUsuarioLogado,
            cancelarSolicitacao: this.cancelarSolicitacao
        });
        popover.present({
            ev: myEvent
        });
    };
    PerfilUsuarioPage.prototype.mostrarOpcoes = function (elemento) {
        var e = document.getElementById(elemento);
        if (e.style.display == 'block')
            e.style.display = 'none';
        else
            e.style.display = 'block';
    };
    PerfilUsuarioPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'perfil-usuario.html',
                    providers: [AmizadeService]
                },] },
    ];
    /** @nocollapse */
    PerfilUsuarioPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: AmizadeService, },
        { type: PopoverController, },
    ];
    return PerfilUsuarioPage;
}());
