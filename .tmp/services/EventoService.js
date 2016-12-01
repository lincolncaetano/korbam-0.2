import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ServerSettings } from './ServerSettings';
export var EventoService = (function () {
    function EventoService(http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    Object.defineProperty(EventoService, "parameters", {
        get: function () {
            return [[Http]];
        },
        enumerable: true,
        configurable: true
    });
    EventoService.prototype.buscaListaUsuarioPorEvento = function (idEvento) {
        var url = ServerSettings.URL_SERVER + '/buscaListaUsuarioPorEvento/' + idEvento;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    EventoService.prototype.salvarUsuarioEvento = function (usuarioEvento) {
        var url = ServerSettings.URL_SERVER + '/salvarUsuarioEvento';
        return this.http.post(url, JSON.stringify({ usuarioEvento: usuarioEvento }), { headers: this.headers }).map(function (res) { return res.json(); });
    };
    EventoService.prototype.deteleUsuarioEvento = function (idUsuario, idEvento) {
        var url = ServerSettings.URL_SERVER + '/deteleUsuarioEvento' + '/' + idUsuario + '/' + idEvento;
        return this.http.delete(url, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    EventoService.prototype.detelaEventoEvento = function (idEvento) {
        var url = ServerSettings.URL_SERVER + '/detelaEvento' + '/' + idEvento;
        return this.http.delete(url, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    EventoService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    EventoService.ctorParameters = [
        { type: Http, },
    ];
    return EventoService;
}());
