import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ServerSettings } from './ServerSettings';
import 'rxjs/add/operator/map';
export var UsuarioService = (function () {
    function UsuarioService(http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    UsuarioService.prototype.loginUsuario = function (usuarioLog) {
        var url = ServerSettings.URL_SERVER + '/login';
        return this.http.post(url, JSON.stringify({ usr: usuarioLog }), { headers: this.headers }).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.cadastrarUsuario = function (usuarioCad) {
        //var url = 'http://localhost:8080/korbam/cadastrarUsuario';
        var url = ServerSettings.URL_SERVER + '/cadastrarUsuario';
        return this.http.post(url, JSON.stringify({ usr: usuarioCad }), { headers: this.headers }).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.editarUsuario = function (usuarioCad) {
        var url = ServerSettings.URL_SERVER + '/editarUsuario';
        return this.http.post(url, JSON.stringify({ usr: usuarioCad }), { headers: this.headers }).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.validaEmail = function (email) {
        //var url = 'http://localhost:8080/korbam/validaEmail/'+email;
        var url = ServerSettings.URL_SERVER + '/validaEmail' + email;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.enviarToken = function (usuario) {
        //var url = 'http://localhost:8080/korbam/enviarToken';
        var url = ServerSettings.URL_SERVER + '/enviarToken';
        return this.http.post(url, JSON.stringify({ usr: usuario }), { headers: this.headers }).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.alteraSenha = function (usuarioCad) {
        //var url = 'http://localhost:8080/korbam/alteraSenha';
        var url = ServerSettings.URL_SERVER + '/alteraSenha';
        return this.http.post(url, JSON.stringify({ usr: usuarioCad }), { headers: this.headers }).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.pesquisaUsuario = function (username) {
        //var url = 'http://localhost:8080/korbam/pesquisaUsuario/'+username;
        var url = ServerSettings.URL_SERVER + '/pesquisaUsuario/' + username;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.pesquisaUsuarioPorId = function (id) {
        //var url = 'http://localhost:8080/korbam/pesquisaUsuarioPorId/'+id;
        var url = ServerSettings.URL_SERVER + '/pesquisaUsuarioPorId/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.salvarEvento = function (evento) {
        var url = ServerSettings.URL_SERVER + '/salvarEvento';
        return this.http.post(url, JSON.stringify({ evento: evento }), { headers: this.headers }).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.pesquisaEventoPorUsuario = function (id) {
        var url = ServerSettings.URL_SERVER + '/pesquisaEventoPorUsuario/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.buscaEventoUsuarioPorUsuarioData = function (id, data) {
        var url = ServerSettings.URL_SERVER + '/buscaEventoUsuarioPorUsuarioData/' + id + "/" + data;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.buscaUsuarioEventoPendente = function (id) {
        var url = ServerSettings.URL_SERVER + '/buscaUsuarioEventoPendente/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.cadastrarTokenDevice = function (usuarioDevice) {
        var url = ServerSettings.URL_SERVER + '/cadastrarTokenDevice';
        return this.http.post(url, JSON.stringify({ userDevice: usuarioDevice }), { headers: this.headers }).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.buscaTodosUsuarioEventoPorIdUsuario = function (id) {
        var url = ServerSettings.URL_SERVER + '/buscaTodosUsuarioEventoPorIdUsuario/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.cadastrarGrupoEvento = function (gpEvento) {
        var url = ServerSettings.URL_SERVER + '/salvarGrupoEvento';
        return this.http.post(url, JSON.stringify({ grupoEvento: gpEvento }), { headers: this.headers }).map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.detelaPorToken = function (token) {
        var url = ServerSettings.URL_SERVER + '/detelaPorToken' + '/' + token;
        return this.http.delete(url, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    UsuarioService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UsuarioService.ctorParameters = [
        { type: Http, },
    ];
    return UsuarioService;
}());
