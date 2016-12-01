import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { TokenPage } from '../token/token';
import { UsuarioService } from '../../services/UsuarioService';
export var EsqueceuSenhaPage = (function () {
    function EsqueceuSenhaPage(nav, service) {
        this.usuario = {};
        this.submitted = false;
    }
    EsqueceuSenhaPage.prototype.doEnviar = function (form) {
        var _this = this;
        if (form.valid) {
            this.service.validaEmail(this.usuario.email)
                .subscribe(function (data) { return _this.verificadoEmail(data); });
        }
    };
    EsqueceuSenhaPage.prototype.verificadoEmail = function (data) {
        var _this = this;
        if (data) {
            var usuarioCad = {
                email: this.usuario.email
            };
            this.service.enviarToken(usuarioCad)
                .subscribe(function (data) { return _this.data1 = data; }, function (err) { return _this.logError(err); }, function () { return console.log('Authentication Complete'); });
            alert("Token enviado com sucesso!");
        }
        else {
            alert("Este e-mail não está registrado!");
        }
    };
    EsqueceuSenhaPage.prototype.logError = function (err) {
        console.log(err);
    };
    EsqueceuSenhaPage.prototype.token = function () {
        this.nav.push(TokenPage);
    };
    EsqueceuSenhaPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'esqueceu-senha.html',
                    providers: [UsuarioService],
                },] },
    ];
    /** @nocollapse */
    EsqueceuSenhaPage.ctorParameters = [
        { type: NavController, },
        { type: UsuarioService, },
    ];
    return EsqueceuSenhaPage;
}());
