import { NavController, LoadingController, NavParams, ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { UsuarioService } from '../../services/UsuarioService';
import { UsuarioGrupoPage } from '../usuario-grupo/usuario-grupo';
export var CadastrarGrupoPage = (function () {
    function CadastrarGrupoPage(nav, service, navParams, loadingController, toastCtrl) {
        this.nav = nav;
        this.service = service;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.grupoCad = {};
        this.submitted = false;
        this.idUsuarioLogado = navParams.get("idUsuarioLogado");
        this.grupoEdit = navParams.get("grupoEdit");
        if (this.grupoEdit != null) {
            this.grupoCad = this.grupoEdit;
        }
    }
    CadastrarGrupoPage.prototype.funcaoPraAceitarSubmeterForm = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var loading_1 = this.loadingController.create({
                spinner: 'dots'
            });
            loading_1.present();
            this.grupoCad.usuario = { id: this.idUsuarioLogado };
            setTimeout(function () {
                _this.nav.push(UsuarioGrupoPage, { grupo: _this.grupoCad });
            }, 500);
            setTimeout(function () {
                loading_1.dismiss();
            }, 1000);
        }
        else {
            console.log(form.titulo);
            var toast = this.toastCtrl.create({
                message: 'Mmmm, buttered toast',
                duration: 2000,
                position: 'top'
            });
            toast.present(toast);
        }
    };
    CadastrarGrupoPage.prototype.logError = function (err) {
    };
    CadastrarGrupoPage.prototype.loginComplete = function () {
    };
    CadastrarGrupoPage.prototype.funcaoPraRedirecionarPraOutroLugar = function () {
        this.nav.pop();
    };
    CadastrarGrupoPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'cadastrar-grupo.html',
                    providers: [UsuarioService],
                },] },
    ];
    /** @nocollapse */
    CadastrarGrupoPage.ctorParameters = [
        { type: NavController, },
        { type: UsuarioService, },
        { type: NavParams, },
        { type: LoadingController, },
        { type: ToastController, },
    ];
    return CadastrarGrupoPage;
}());
