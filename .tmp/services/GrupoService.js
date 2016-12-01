import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ServerSettings } from './ServerSettings';
export var GrupoService = (function () {
    function GrupoService(http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    Object.defineProperty(GrupoService, "parameters", {
        get: function () {
            return [[Http]];
        },
        enumerable: true,
        configurable: true
    });
    GrupoService.prototype.buscaGruposIdUsuario = function (idUsuario) {
        var url = ServerSettings.URL_SERVER + '/pesquisaGrupoPorUsuario/' + idUsuario;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    GrupoService.prototype.salvarGrupo = function (grupo) {
        var url = ServerSettings.URL_SERVER + '/salvarGrupo';
        return this.http.post(url, JSON.stringify({ grupo: grupo }), { headers: this.headers }).map(function (res) { return res.json(); });
    };
    GrupoService.prototype.listaAmigos = function (id) {
        //var url = 'http://localhost:8080/korbam/listaAmigos/'+id;
        var url = ServerSettings.URL_SERVER + '/listaAmigos/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    GrupoService.prototype.pesquisaGrupoPorId = function (idGrupo) {
        var url = ServerSettings.URL_SERVER + '/pesquisaGrupoPorId/' + idGrupo;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    GrupoService.prototype.pesquisaUsuarioEvento = function (idUsuario, idEvento) {
        var url = ServerSettings.URL_SERVER + '/pesquisaUsuarioEventoPorId/' + idUsuario + '/' + idEvento;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    GrupoService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GrupoService.ctorParameters = [
        { type: Http, },
    ];
    return GrupoService;
}());
