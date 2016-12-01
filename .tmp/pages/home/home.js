import { NavController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Push } from 'ionic-native';
import { Component } from '@angular/core';
import { UsuarioService } from '../../services/UsuarioService';
import { CadastroPage } from '../cadastro/cadastro';
import { EsqueceuSenhaPage } from '../esqueceu-senha/esqueceu-senha';
import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../services/user-data';
export var HomePage = (function () {
    function HomePage(nav, service, platform, userData) {
        this.nav = nav;
        this.service = service;
        this.platform = platform;
        this.userData = userData;
        this.local = new Storage();
        this.name = "Nome";
        this.login = {};
        this.submitted = false;
    }
    HomePage.prototype.onSubmit = function (form) {
        //this.nav.push(TabsPage);
        var _this = this;
        if (form.valid) {
            var usuarioLog = {
                username: form.controls.username.value,
                password: form.controls.password.value
            };
            this.service.loginUsuario(usuarioLog)
                .subscribe(function (data) { return _this.loginSucess(data); }, function (err) { return _this.logError(err); }, function () { return _this.loginComplete(); });
        }
    };
    HomePage.prototype.loginSucess = function (data) {
        this.usrRe = data;
        this.local.set('idUsuario', data.id);
    };
    HomePage.prototype.logError = function (err) {
        console.log(err);
    };
    HomePage.prototype.loginComplete = function () {
        var _this = this;
        if (this.usrRe != false && this.usrRe != null) {
            var push = Push.init({
                android: {
                    senderID: "325117634477",
                    icon: "icon",
                },
                ios: {
                    alert: "true",
                    badge: true,
                    sound: 'true'
                },
                windows: {}
            });
            push.on('registration', function (data) {
                var platf;
                if (_this.platform.is('ios')) {
                    platf = "I";
                }
                else {
                    platf = "A";
                }
                var usuarioDevice = {
                    usuario: {
                        id: _this.usrRe.id
                    },
                    tokenDevice: data.registrationId,
                    tipoDevice: platf
                };
                _this.service.cadastrarTokenDevice(usuarioDevice)
                    .subscribe(function (data) { return _this.cadUserDevSucess(data); }, function (err) { return _this.logError(err); }, function () { return _this.cadUserDevComplete(); });
            });
            push.on('notification', function (data) {
                console.log(data.message);
                console.log(data.title);
                console.log(data.count);
                console.log(data.sound);
                console.log(data.image);
                console.log(data.additionalData);
            });
            push.on('error', function (e) {
                console.log(e.message);
            });
            this.nav.push(TabsPage, { idUsuarioLogado: this.usrRe.id });
        }
        else {
            alert("USUARIO OU SENHA INVALIDO");
        }
        console.log('Authentication Complete');
    };
    HomePage.prototype.cadUserDevSucess = function (data) {
        this.local.set('tokenDevice', data.tokenDevice);
    };
    HomePage.prototype.cadUserDevComplete = function () {
    };
    HomePage.prototype.doSignup = function () {
        this.nav.push(CadastroPage);
    };
    HomePage.prototype.forgotPwd = function () {
        this.nav.push(EsqueceuSenhaPage);
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'home.html',
                    providers: [UsuarioService]
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
        { type: UsuarioService, },
        { type: Platform, },
        { type: UserData, },
    ];
    return HomePage;
}());
