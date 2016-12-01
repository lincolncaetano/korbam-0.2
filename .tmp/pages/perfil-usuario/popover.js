import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { AmizadeService } from '../../services/AmizadeService';
export var PopoverPage = (function () {
    function PopoverPage(viewCtrl, navParams, amizadeService) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.amizadeService = amizadeService;
        this.view = viewCtrl;
        this.navPar = navParams;
        this.service = amizadeService;
    }
    PopoverPage.prototype.buscaAmizadeComplete = function (amizade) {
        if (amizade != false) {
            if (amizade.id.idUsuario == this.usuarioLogado && amizade.status == 'P') {
                this.cancelarSolicitacao = true;
            }
            else if (amizade.id.idUsuarioSolicitato == this.usuarioLogado && amizade.status == 'P') {
                this.cancelarSolicitacao = true;
                this.aceitarSolicitacao = true;
            }
            else if (amizade.status == 'A') {
                this.cancelarAmizade = true;
            }
        }
    };
    PopoverPage.prototype.ngOnInit = function () {
        var _this = this;
        if (this.navPar.data) {
            this.usuario = this.navPar.data.usuario;
            this.usuarioLogado = this.navPar.data.usuarioLogado;
            this.cancelarSolicitacao = this.navPar.data.cancelarSolicitacao;
        }
        this.service.buscaAmizadeId(this.usuarioLogado, this.usuario.id)
            .subscribe(function (data) { return _this.amzRe = data; }, function (err) { return _this.logError(err); }, function () { return _this.buscaAmizadeComplete(_this.amzRe); });
    };
    PopoverPage.prototype.close = function () {
        this.view.dismiss();
    };
    PopoverPage.prototype.amizade = function () {
        var _this = this;
        var amizade = {
            id: {
                idUsuario: this.usuarioLogado,
                idUsuarioSolicitato: this.usuario.id
            },
            status: 'P'
        };
        this.service.solicitaAmizade(amizade)
            .subscribe(function (data) { return _this.usrRe = data; }, function (err) { return _this.logError(err); }, function () { return _this.amizadeComplete(); });
    };
    PopoverPage.prototype.cancelarsolicitaAmizade = function () {
        var _this = this;
        var amizade;
        if (this.amzRe != false && this.amzRe.id.idUsuarioSolicitato == this.usuarioLogado) {
            amizade = {
                id: {
                    idUsuario: this.usuario.id,
                    idUsuarioSolicitato: this.usuarioLogado
                }
            };
        }
        else {
            amizade = {
                id: {
                    idUsuario: this.usuarioLogado,
                    idUsuarioSolicitato: this.usuario.id
                }
            };
        }
        this.service.cancelarAmizade(amizade)
            .subscribe(function (data) { return _this.usrRe = data; }, function (err) { return _this.logError(err); }, function () { return _this.amizadeComplete(); });
    };
    PopoverPage.prototype.aceitaSolicitaAmizade = function () {
        var _this = this;
        var amizade = {
            id: {
                idUsuario: this.usuario.id,
                idUsuarioSolicitato: this.usuarioLogado
            },
            status: 'A'
        };
        this.service.solicitaAmizade(amizade)
            .subscribe(function (data) { return _this.usrRe = data; }, function (err) { return _this.logError(err); }, function () { return _this.amizadeComplete(); });
    };
    PopoverPage.prototype.cancelarsolicitaAmizadeComplete = function () {
        //this.cancelarSolicitacao = false;
        this.view.dismiss();
    };
    PopoverPage.prototype.logError = function (err) {
        console.log(err);
    };
    PopoverPage.prototype.amizadeComplete = function () {
        //this.cancelarSolicitacao = true;
        this.view.dismiss();
    };
    PopoverPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'popover.html',
                    providers: [AmizadeService]
                },] },
    ];
    /** @nocollapse */
    PopoverPage.ctorParameters = [
        { type: ViewController, },
        { type: NavParams, },
        { type: AmizadeService, },
    ];
    return PopoverPage;
}());
