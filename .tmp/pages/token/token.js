import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { UsuarioService } from '../../services/UsuarioService';
export var TokenPage = (function () {
    function TokenPage(nav, service) {
        this.nav = nav;
        this.service = service;
        this.usuario = {};
        this.submitted = false;
    }
    TokenPage.prototype.doSalvar = function (form) {
        var _this = this;
        if (form.valid) {
            var usuarioCad = {
                email: this.usuario.email,
                token: this.usuario.token,
                password: this.usuario.password
            };
            this.service.alteraSenha(usuarioCad)
                .subscribe(function (data) { return _this.data1 = data; }, function (err) { return _this.logError(err); }, function () { return console.log('Authentication Complete'); });
        }
    };
    TokenPage.prototype.logError = function (err) {
        console.log(err);
    };
    TokenPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'token.html',
                    providers: [UsuarioService],
                },] },
    ];
    /** @nocollapse */
    TokenPage.ctorParameters = [
        { type: NavController, },
        { type: UsuarioService, },
    ];
    return TokenPage;
}());
