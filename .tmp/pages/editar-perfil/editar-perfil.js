import { NavController, ActionSheetController } from 'ionic-angular';
import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Camera } from 'ionic-native';
import { LocalNotifications } from 'ionic-native';
import moment from 'moment';
import { UsuarioService } from '../../services/UsuarioService';
import { UserData } from '../../services/user-data';
export var EditarPerfilPage = (function () {
    function EditarPerfilPage(nav, actionSheetCtrl, service, app, userData) {
        var _this = this;
        this.nav = nav;
        this.actionSheetCtrl = actionSheetCtrl;
        this.service = service;
        this.app = app;
        this.userData = userData;
        this.local = new Storage();
        this.namePage = "EditarPerfilPage";
        this.atualizarPerfil = false;
        this.usuarioCad = {};
        this.userData.getId().then(function (data) {
            _this.idUsuarioLogado = data;
            _this.service.pesquisaUsuarioPorId(_this.idUsuarioLogado)
                .subscribe(function (data) { return _this.retorno = data; }, function (err) { return _this.logError(err); }, function () { return _this.pesquisaComplete(); });
        });
        this.local.get('tokenDevice').then(function (token) {
            _this.token = token;
        }).catch(function (error) {
            console.log(error);
        });
    }
    EditarPerfilPage.prototype.logError = function (err) {
        console.log(err);
    };
    EditarPerfilPage.prototype.pesquisaComplete = function () {
        if (this.retorno != false) {
            this.usuarioCad = this.retorno;
            if (this.usuarioCad.dataNascimento != null) {
                var selectedDate = moment(this.usuarioCad.dataNascimento, 'YYYY-MM-DD');
                this.usuarioCad.dataNascimentoString = selectedDate.format('YYYY-MM-DD');
            }
        }
    };
    EditarPerfilPage.prototype.salvarUsuario = function () {
        var _this = this;
        this.service.editarUsuario(this.usuarioCad)
            .subscribe(function (data) { return _this.usuario = data; }, function (err) { return _this.logError(err); }, function () { return _this.completeCad(); });
    };
    EditarPerfilPage.prototype.completeCad = function () {
        this.atualizarPerfil = true;
        this.nav.pop();
    };
    EditarPerfilPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Tirar Foto',
                    handler: function () {
                        _this.openCamera();
                    }
                },
                {
                    text: 'Escolher Foto',
                    handler: function () {
                        _this.selectFromGallery();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    EditarPerfilPage.prototype.selectFromGallery = function () {
        var _this = this;
        var options = {
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: Camera.DestinationType.DATA_URL,
            encodingType: Camera.EncodingType.PNG,
            allowEdit: true,
            targetWidth: 560,
            targetHeight: 560,
            correctOrientation: false
        };
        Camera.getPicture(options).then(function (imageData) {
            //this.usuarioCad.fotoProfileBase64 = 'data:image/jpeg;base64,' + imageData;
            _this.usuarioCad.fotoProfileBase64 = imageData;
            //this.photoSelected = true;
            //this.photoTaken = false;
        }, function (err) {
            // Handle error
        });
    };
    EditarPerfilPage.prototype.openCamera = function () {
        var _this = this;
        var options = {
            sourceType: Camera.PictureSourceType.CAMERA,
            destinationType: Camera.DestinationType.DATA_URL,
            encodingType: Camera.EncodingType.PNG,
            allowEdit: true,
            targetWidth: 560,
            targetHeight: 560,
            correctOrientation: false
        };
        Camera.getPicture(options).then(function (imageData) {
            //this.usuarioCad.fotoProfileBase64 = 'data:image/jpeg;base64,' + imageData;
            _this.usuarioCad.fotoProfileBase64 = imageData;
            //this.photoTaken = true;
            //this.photoSelected = false;
        }, function (err) {
            // Handle error
        });
    };
    EditarPerfilPage.prototype.logout = function () {
        var _this = this;
        this.service.detelaPorToken(this.token)
            .subscribe(function (data) { return _this.retorno = data; }, function (err) { return _this.logError(err); }, function () { return _this.logoutComplete(); });
    };
    EditarPerfilPage.prototype.logoutComplete = function () {
        this.local.clear();
        var root = this.app.getRootNav();
        root.popToRoot();
        LocalNotifications.cancelAll();
    };
    EditarPerfilPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'editar-perfil.html'
                },] },
    ];
    /** @nocollapse */
    EditarPerfilPage.ctorParameters = [
        { type: NavController, },
        { type: ActionSheetController, },
        { type: UsuarioService, },
        { type: App, },
        { type: UserData, },
    ];
    return EditarPerfilPage;
}());
