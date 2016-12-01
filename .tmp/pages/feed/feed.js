import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { UsuarioService } from '../../services/UsuarioService';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';
export var FeedPage = (function () {
    function FeedPage(nav, service, navParams) {
        this.nav = nav;
        this.service = service;
        this.navParams = navParams;
        this.searchQuery = '';
        this.idUsuarioLogado = navParams.data;
    }
    FeedPage.prototype.onKey = function (event) {
        var _this = this;
        var q = event.target.value;
        if (q != '') {
            this.service.pesquisaUsuario(q)
                .subscribe(function (data) { return _this.retorno = data; }, function (err) { return _this.logError(err); }, function () { return _this.pesquisaComplete(); });
        }
        else {
            this.items = [];
        }
    };
    FeedPage.prototype.pesquisaComplete = function () {
        if (this.retorno != null) {
            this.items = this.retorno;
        }
        else {
            this.items = [];
        }
    };
    FeedPage.prototype.logError = function (err) {
        console.log(err);
    };
    FeedPage.prototype.goUsuario = function (idUsuario) {
        this.nav.push(PerfilUsuarioPage, { idUsuario: idUsuario, idUsuarioLogado: this.idUsuarioLogado });
    };
    FeedPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'feed.html',
                    providers: [UsuarioService],
                },] },
    ];
    /** @nocollapse */
    FeedPage.ctorParameters = [
        { type: NavController, },
        { type: UsuarioService, },
        { type: NavParams, },
    ];
    return FeedPage;
}());
