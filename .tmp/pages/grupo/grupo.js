import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import moment from 'moment';
import { CadastrarGrupoPage } from '../cadastrar-grupo/cadastrar-grupo';
import { CadastrarEventoPage } from '../cadastrar-evento/cadastrar-evento';
import { EventoPage } from '../evento/evento';
import { GrupoService } from '../../services/GrupoService';
import { UserData } from '../../services/user-data';
export var GrupoPage = (function () {
    function GrupoPage(nav, navParams, service, userData) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.service = service;
        this.userData = userData;
        this.segGrupo = "eventos";
        this.isAdmin = false;
        this.idGrupo = navParams.data.idGrupo;
        this.service.pesquisaGrupoPorId(this.idGrupo)
            .subscribe(function (data) { return _this.grupoRe = data; }, function (err) { return _this.logError(err); }, function () { return _this.buscaGrupoComplete(); });
    }
    GrupoPage.prototype.buscaGrupoComplete = function () {
        var _this = this;
        if (this.grupoRe != false) {
            this.nome = this.grupoRe.nome;
            this.listaUsuarios = this.grupoRe.listaUsuario;
            this.adminGrupo = this.grupoRe.usuario;
            if (this.grupoRe.listaEvento != null) {
                this.eventosGrupo = this.grupoRe.listaEvento;
                for (var _i = 0, _a = this.eventosGrupo; _i < _a.length; _i++) {
                    var evento = _a[_i];
                    var selectedDate = moment(evento.dtInicio, moment.ISO_8601);
                    evento.momento = selectedDate;
                }
            }
            else {
                this.eventosGrupo = {};
            }
            this.userData.getId().then(function (id) {
                if (_this.adminGrupo.id == id) {
                    _this.isAdmin = true;
                }
            });
        }
    };
    GrupoPage.prototype.logError = function (err) {
        console.log(err);
    };
    GrupoPage.prototype.editarGrupo = function () {
        var _this = this;
        this.userData.getId().then(function (id) {
            _this.nav.push(CadastrarGrupoPage, { idUsuarioLogado: id, grupoEdit: _this.grupoRe });
        });
    };
    GrupoPage.prototype.cadastrarEvento = function () {
        var _this = this;
        this.userData.getId().then(function (id) {
            _this.nav.push(CadastrarEventoPage, { idUsuarioLogado: id, grupo: _this.grupoRe });
        });
    };
    GrupoPage.prototype.abrirEvento = function (item) {
        var _this = this;
        this.userData.getId().then(function (id) {
            _this.idUsuarioLogado = id;
            _this.service.pesquisaUsuarioEvento(_this.idUsuarioLogado, item.id)
                .subscribe(function (data) { return _this.usuarioEventoRe = data; }, function (err) { return _this.logError(err); }, function () { return _this.buscaUsuarioEventoComplete(); });
        });
    };
    GrupoPage.prototype.buscaUsuarioEventoComplete = function () {
        if (this.usuarioEventoRe != false && this.usuarioEventoRe != true) {
            this.nav.push(EventoPage, { idUsuarioLogado: this.idUsuarioLogado, usuarioEvento: this.usuarioEventoRe });
        }
        else if (this.usuarioEventoRe == true) {
        }
    };
    GrupoPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'grupo.html',
                    providers: [GrupoService, UserData]
                },] },
    ];
    /** @nocollapse */
    GrupoPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: GrupoService, },
        { type: UserData, },
    ];
    return GrupoPage;
}());
