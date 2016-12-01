import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { UsuarioService } from '../../services/UsuarioService';
export var CadastroPage = (function () {
    function CadastroPage(nav, service) {
        this.nav = nav;
        this.service = service;
        this.signup = {};
        this.submitted = false;
    }
    CadastroPage.prototype.doSignup = function (form) {
        var _this = this;
        if (form.valid) {
            this.service.cadastrarUsuario(this.signup)
                .subscribe(function (data) { return _this.usuario = data; }, function (err) { return _this.logError(err); }, function () { return _this.completeCad(); });
        }
    };
    CadastroPage.prototype.completeCad = function () {
        this.nav.pop();
    };
    CadastroPage.prototype.logError = function (err) {
        console.log(err);
    };
    CadastroPage.prototype.verificaEmail = function () {
        var _this = this;
        var email = this.signupForm.controls.email.value;
        if (email == "") {
            this.showValEmail = false;
            this.showEmailError = false;
            this.showEmailOk = false;
        }
        else {
            this.showValEmail = true;
            this.service.validaEmail(email)
                .subscribe(function (data) { return _this.verificadoEmail(data); });
        }
    };
    CadastroPage.prototype.verificadoEmail = function (data) {
        if (this.showValEmail && data) {
            this.showEmailOk = false;
            this.showEmailError = true;
        }
        else if (this.showValEmail && !data) {
            this.showEmailError = false;
            this.showEmailOk = true;
        }
        else {
            this.showEmailError = false;
            this.showEmailOk = false;
        }
    };
    CadastroPage.prototype.verificaUsername = function () {
        var username = this.signupForm.controls.username.value;
        if (username == "") {
            this.showValUsername = false;
            this.showUsernameError = false;
            this.showUsernameOk = false;
        }
        else {
            this.showValUsername = true;
        }
    };
    CadastroPage.prototype.verificadoUsername = function (data) {
        if (this.showValUsername && !data) {
            this.showUsernameOk = true;
            this.showUsernameError = false;
        }
        else if (this.showValUsername && data) {
            this.showUsernameError = true;
            this.showUsernameOk = false;
        }
        else {
            this.showUsernameError = false;
            this.showUsernameOk = false;
        }
    };
    CadastroPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'cadastro.html',
                    providers: [UsuarioService],
                },] },
    ];
    /** @nocollapse */
    CadastroPage.ctorParameters = [
        { type: NavController, },
        { type: UsuarioService, },
    ];
    return CadastroPage;
}());
