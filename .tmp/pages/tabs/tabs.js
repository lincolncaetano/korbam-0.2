import { NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { FeedPage } from '../feed/feed';
import { AgendaPage } from '../agenda/agenda';
import { PerfilPage } from '../perfil/perfil';
import { NotificacoesPage } from '../notificacoes/notificacoes';
import { ListaGruposPage } from '../lista-grupos/lista-grupos';
import { NotificaoService } from '../../services/NotificaoService';
import { UserData } from '../../services/user-data';
var TabIconPage = (function () {
    function TabIconPage(platform, service) {
        this.service = service;
        this.isAndroid = false;
        this.isAndroid = platform.is('android');
    }
    TabIconPage.prototype.onPageWillEnter = function () {
        document.getElementById('md-tabs-icon').style.display = "block";
        document.getElementById('md-only').style.display = "none";
    };
    TabIconPage.decorators = [
        { type: Component, args: [{
                    template: '<ion-content>' +
                        '</ion-content>',
                },] },
    ];
    /** @nocollapse */
    TabIconPage.ctorParameters = [
        { type: Platform, },
        { type: NotificaoService, },
    ];
    return TabIconPage;
}());
export var TabsPage = (function () {
    function TabsPage(platform, navParams, service, userData) {
        var _this = this;
        this.service = service;
        this.userData = userData;
        this.tabTwo = FeedPage;
        this.tabThree = PerfilPage;
        this.tabFour = AgendaPage;
        this.tabFive = NotificacoesPage;
        this.tabSix = ListaGruposPage;
        this.isAndroid = false;
        this.nNotif = 0;
        this.isAndroid = platform.is('android');
        //this.idUsuarioLogado = navParams.get("idUsuarioLogado");
        this.userData.getId().then(function (id) {
            _this.idUsuarioLogado = id;
            _this.service.buscaNotificacoes(_this.idUsuarioLogado)
                .subscribe(function (data) { return _this.retorno = data; }, function (err) { return _this.logError(err); }, function () { return _this.buscaNotifComplete(); });
        });
    }
    TabsPage.prototype.logError = function (err) {
        console.log(err);
    };
    TabsPage.prototype.buscaNotifComplete = function () {
        if (this.retorno != false) {
            for (var _i = 0, _a = this.retorno; _i < _a.length; _i++) {
                var notificacao = _a[_i];
                if (notificacao.status == "P") {
                    this.nNotif = this.nNotif + 1;
                }
            }
        }
    };
    TabsPage.prototype.chat = function () {
        this.nNotif = 0;
    };
    TabsPage.prototype.onPageWillLeave = function () {
        document.getElementById('md-tabs-icon').style.display = "none";
        document.getElementById('md-only').style.display = "block";
    };
    TabsPage.decorators = [
        { type: Component, args: [{
                    template: '<ion-tabs tabsPlacement="bottom" class="tabs-icon" selectedIndex="2">' +
                        //  '<ion-tab tabIcon="home" [root]="tabOne" [rootParams]="idUsuarioLogado"></ion-tab>' +
                        '<ion-tab tabIcon="search" [root]="tabTwo" [rootParams]="idUsuarioLogado" ></ion-tab>' +
                        '<ion-tab tabIcon="notifications" (ionSelect)="chat()" [tabBadge]="nNotif" tabBadgeStyle="danger" [root]="tabFive" [rootParams]="idUsuarioLogado"></ion-tab>' +
                        '<ion-tab tabIcon="calendar" [root]="tabFour" [rootParams]="idUsuarioLogado"></ion-tab>' +
                        '<ion-tab tabIcon="people" [root]="tabSix" [rootParams]="idUsuarioLogado"></ion-tab>' +
                        '<ion-tab tabIcon="person" [root]="tabThree" [rootParams]="idUsuarioLogado"></ion-tab>' +
                        '</ion-tabs>',
                    providers: [NotificaoService]
                },] },
    ];
    /** @nocollapse */
    TabsPage.ctorParameters = [
        { type: Platform, },
        { type: NavParams, },
        { type: NotificaoService, },
        { type: UserData, },
    ];
    return TabsPage;
}());
