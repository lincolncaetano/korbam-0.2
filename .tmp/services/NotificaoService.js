import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ServerSettings } from './ServerSettings';
export var NotificaoService = (function () {
    function NotificaoService(http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    Object.defineProperty(NotificaoService, "parameters", {
        get: function () {
            return [[Http]];
        },
        enumerable: true,
        configurable: true
    });
    NotificaoService.prototype.buscaNotificacoes = function (idUsuario) {
        var url = ServerSettings.URL_SERVER + '/buscaNotificacoes/' + idUsuario;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    NotificaoService.prototype.atualizaNotificacao = function (listaNotificacao) {
        var url = ServerSettings.URL_SERVER + '/atualizaNotificacao';
        return this.http.post(url, JSON.stringify({ listaNotif: listaNotificacao }), { headers: this.headers }).map(function (res) { return res.json(); });
    };
    NotificaoService.prototype.pesquisaUsuarioEvento = function (idUsuario, idEvento) {
        var url = ServerSettings.URL_SERVER + '/pesquisaUsuarioEventoPorId/' + idUsuario + '/' + idEvento;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    NotificaoService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NotificaoService.ctorParameters = [
        { type: Http, },
    ];
    return NotificaoService;
}());
