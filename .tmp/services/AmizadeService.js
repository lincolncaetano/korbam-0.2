import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServerSettings } from './ServerSettings';
import 'rxjs/add/operator/map';
export var AmizadeService = (function () {
    function AmizadeService(http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    Object.defineProperty(AmizadeService, "parameters", {
        get: function () {
            return [[Http]];
        },
        enumerable: true,
        configurable: true
    });
    AmizadeService.prototype.pesquisaUsuarioPorId = function (id) {
        //var url = 'http://localhost:8080/korbam/pesquisaUsuarioPorId/'+id;
        var url = ServerSettings.URL_SERVER + '/pesquisaUsuarioPorId/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    AmizadeService.prototype.solicitaAmizade = function (amizade) {
        //var url = 'http://localhost:8080/korbam/solicitaAmizade';
        var url = ServerSettings.URL_SERVER + '/solicitaAmizade';
        return this.http.post(url, JSON.stringify({ amz: amizade }), { headers: this.headers }).map(function (res) { return res.json(); });
    };
    AmizadeService.prototype.listaAmigos = function (id) {
        //var url = 'http://localhost:8080/korbam/listaAmigos/'+id;
        var url = ServerSettings.URL_SERVER + '/listaAmigos/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    AmizadeService.prototype.salvarEvento = function (evento) {
        //var url = 'http://localhost:8080/korbam/salvarEvento';
        var url = ServerSettings.URL_SERVER + '/salvarEvento';
        return this.http.post(url, JSON.stringify({ evento: evento }), { headers: this.headers }).map(function (res) { return res.json(); });
    };
    AmizadeService.prototype.buscaAmizadeId = function (idUsuario, idUsuarioSolicitado) {
        var url = ServerSettings.URL_SERVER + '/buscaAmizadeId/' + idUsuario + '/' + idUsuarioSolicitado;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    AmizadeService.prototype.cancelarAmizade = function (amizade) {
        var url = ServerSettings.URL_SERVER + '/cancelarAmizade' + '/' + amizade.id.idUsuario + '/' + amizade.id.idUsuarioSolicitato;
        return this.http.delete(url, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    AmizadeService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AmizadeService.ctorParameters = [
        { type: Http, },
    ];
    return AmizadeService;
}());
