import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { CadastrarGrupoPage } from '../cadastrar-grupo/cadastrar-grupo';
import { GrupoPage } from '../grupo/grupo';
import { GrupoService } from '../../services/GrupoService';
export var ListaGruposPage = (function () {
    function ListaGruposPage(nav, navParams, service) {
        this.nav = nav;
        this.navParams = navParams;
        this.service = service;
        this.idUsuarioLogado = navParams.data;
        this.init();
    }
    ListaGruposPage.prototype.ionViewDidEnter = function () {
        if (this.nav.last().instance.namePage == "UsuarioGrupoPage") {
            this.init();
        }
    };
    ListaGruposPage.prototype.init = function () {
        var _this = this;
        this.service.buscaGruposIdUsuario(this.idUsuarioLogado)
            .subscribe(function (data) { return _this.retorno = data; }, function (err) { return _this.logError(err); }, function () { return _this.buscaGrupoComplete(); });
    };
    ListaGruposPage.prototype.criarGrupo = function () {
        this.nav.push(CadastrarGrupoPage, { idUsuarioLogado: this.idUsuarioLogado });
    };
    ListaGruposPage.prototype.abreGrupo = function (item) {
        this.nav.push(GrupoPage, { idGrupo: item.id });
    };
    ListaGruposPage.prototype.logError = function (err) {
        console.log(err);
    };
    ListaGruposPage.prototype.buscaGrupoComplete = function () {
        if (this.retorno != false) {
            this.meusGrupos = this.retorno;
        }
        else {
            this.meusGrupos = [];
        }
    };
    ListaGruposPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.service.buscaGruposIdUsuario(this.idUsuarioLogado)
            .subscribe(function (data) { return _this.retorno = data; }, function (err) { return _this.logError(err); }, function () { return _this.buscaGrupoComplete(); });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ListaGruposPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'lista-grupos.html',
                    providers: [GrupoService]
                },] },
    ];
    /** @nocollapse */
    ListaGruposPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: GrupoService, },
    ];
    return ListaGruposPage;
}());
