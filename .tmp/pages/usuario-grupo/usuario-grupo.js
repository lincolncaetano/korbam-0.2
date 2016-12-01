import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
import { GrupoService } from '../../services/GrupoService';
export var UsuarioGrupoPage = (function () {
    function UsuarioGrupoPage(nav, navParams, service, loadingController) {
        this.nav = nav;
        this.navParams = navParams;
        this.service = service;
        this.loadingController = loadingController;
        this.namePage = "UsuarioGrupoPage";
        this.searchQuery = '';
        this.grupoCad = navParams.get('grupo');
        this.initializeItems();
    }
    UsuarioGrupoPage.prototype.loginComplete = function () {
        if (this.listaResp != false) {
            for (var _i = 0, _a = this.listaResp; _i < _a.length; _i++) {
                var user = _a[_i];
                user.checked = false;
            }
            this.items = this.listaResp;
        }
        if (this.grupoCad.listaUsuario != null) {
            for (var _b = 0, _c = this.grupoCad.listaUsuario; _b < _c.length; _b++) {
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
    UsuarioGrupoPage.prototype.logError = function (err) {
    };
    UsuarioGrupoPage.prototype.initializeItems = function () {
        var _this = this;
        this.service.listaAmigos(this.grupoCad.usuario.id)
            .subscribe(function (data) { return _this.listaResp = data; }, function (err) { return _this.logError(err); }, function () { return _this.loginComplete(); });
    };
    UsuarioGrupoPage.prototype.getItems = function (searchbar) {
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
    UsuarioGrupoPage.prototype.change = function (usuario) {
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
        //for (var user of this.listaResp) {
        //  console.log(user);
        //}
    };
    UsuarioGrupoPage.prototype.salvargrupo = function () {
        var _this = this;
        var lista = [];
        var cont = 0;
        for (var _i = 0, _a = this.listaResp; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.checked) {
                lista[cont] = user;
                cont++;
            }
        }
        this.grupoCad.listaUsuario = lista;
        this.service.salvarGrupo(this.grupoCad)
            .subscribe(function (data) { return _this.grupoResp = data; }, function (err) { return _this.logGrupoError(err); }, function () { return _this.salvarGrupoComplete(); });
    };
    UsuarioGrupoPage.prototype.logGrupoError = function (err) {
        console.log(err);
    };
    UsuarioGrupoPage.prototype.salvarGrupoComplete = function () {
        //if(this.eventoResp != null){
        this.nav.popToRoot();
        //  }
    };
    UsuarioGrupoPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'usuario-grupo.html',
                    providers: [GrupoService],
                },] },
    ];
    /** @nocollapse */
    UsuarioGrupoPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: GrupoService, },
        { type: LoadingController, },
    ];
    return UsuarioGrupoPage;
}());
