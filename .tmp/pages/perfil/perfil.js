import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import moment from 'moment';
import { UsuarioService } from '../../services/UsuarioService';
import { EditarPerfilPage } from '../editar-perfil/editar-perfil';
import { UserData } from '../../services/user-data';
export var PerfilPage = (function () {
    function PerfilPage(nav, service, navParams, userData) {
        this.nav = nav;
        this.service = service;
        this.navParams = navParams;
        this.userData = userData;
        this.usuario = {};
        this.init();
    }
    PerfilPage.prototype.init = function () {
        var _this = this;
        this.userData.getId().then(function (data) {
            _this.idUsuarioLogado = data;
            _this.service.pesquisaUsuarioPorId(_this.idUsuarioLogado)
                .subscribe(function (data) { return _this.retorno = data; }, function (err) { return _this.logError(err); }, function () { return _this.pesquisaComplete(); });
        });
    };
    PerfilPage.prototype.ionViewDidEnter = function () {
        if (this.nav.last().instance.atualizarPerfil) {
            this.usuario = {};
            this.init();
        }
    };
    PerfilPage.prototype.logError = function (err) {
        console.log(err);
    };
    PerfilPage.prototype.pesquisaComplete = function () {
        if (this.retorno != false) {
            this.usuario = this.retorno;
            if (this.usuario.dataNascimento != null) {
                var selectedDate = moment(this.usuario.dataNascimento, 'YYYY-MM-DD');
                this.usuario.dataNascimentoString = selectedDate.format('YYYY-MM-DD');
                this.usuario.idade = moment().diff(selectedDate, 'years');
            }
        }
    };
    PerfilPage.prototype.logout = function () {
        //this.local.clear();
        this.nav.pop();
    };
    PerfilPage.prototype.editar = function () {
        this.nav.push(EditarPerfilPage, { idUsuarioLogado: this.usuario.id });
    };
    PerfilPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'perfil.html'
                },] },
    ];
    /** @nocollapse */
    PerfilPage.ctorParameters = [
        { type: NavController, },
        { type: UsuarioService, },
        { type: NavParams, },
        { type: UserData, },
    ];
    return PerfilPage;
}());
