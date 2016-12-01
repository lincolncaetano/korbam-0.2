import { NavController, NavParams } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import moment from 'moment';
import { CadastrarEventoPage } from '../cadastrar-evento/cadastrar-evento';
import { EventoPage } from '../evento/evento';
import { UsuarioService } from '../../services/UsuarioService';
import { UserData } from '../../services/user-data';
export var AgendaPage = (function () {
    //private userData: UserData;
    function AgendaPage(nav, service, navParams, userData) {
        this.nav = nav;
        this.service = service;
        this.navParams = navParams;
        this.userData = userData;
        this.local = new Storage();
        //private service: UsuarioService;
        this.listaEventos = [];
        this.meusEventos = [];
        this.convitesEvento = [];
        this.listaTodosEventos = [];
        this.calendario = "agenda";
    }
    AgendaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userData.getId().then(function (data) { return _this.init(data); });
    };
    AgendaPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (this.nav.last().instance.namePage == "UsuarioEventoPage") {
            this.userData.getId().then(function (data) { return _this.init(data); });
        }
        if (this.nav.last().instance.atualizarAgenda) {
            this.userData.getId().then(function (data) { return _this.init(data); });
        }
    };
    AgendaPage.prototype.consultaEvento = function (data) {
        //console.log(data);
    };
    AgendaPage.prototype.prevYear = function () {
        this.date.subtract(1, 'Y');
        this.generateCalendar(this.date);
    };
    AgendaPage.prototype.prevMonth = function () {
        this.date.subtract(1, 'M');
        this.generateCalendar(this.date);
    };
    AgendaPage.prototype.nextYear = function () {
        this.date.add(1, 'Y');
        this.generateCalendar(this.date);
    };
    AgendaPage.prototype.nextMonth = function () {
        this.date.add(1, 'M');
        this.generateCalendar(this.date);
    };
    AgendaPage.prototype.selectDate = function (e, date) {
        e.preventDefault();
        if (this.isSelected(date))
            return;
        //var dataEnv = date.day + '-' + date.month + '-' + date.year;
        var selectedDate = moment(date.year + '-' + date.month + '-' + date.day, 'YYYY-MM-DD');
        this.setValue(selectedDate);
        if (this.listaTodosEventos != []) {
            this.listaEventos = [];
            for (var _i = 0, _a = this.listaTodosEventos; _i < _a.length; _i++) {
                var usuarioEvento = _a[_i];
                var dataEvento = moment(usuarioEvento.evento.dtInicio, moment.ISO_8601);
                if (usuarioEvento.status == "A" && moment(selectedDate.format(this.modelFormat || 'YYYY-MM-DD')).isSame(dataEvento.format(this.modelFormat || 'YYYY-MM-DD'))) {
                    this.listaEventos.push(usuarioEvento);
                }
            }
        }
    };
    AgendaPage.prototype.logError = function (err) {
    };
    AgendaPage.prototype.loginComplete = function () {
        if (this.retorno != false) {
            this.listaEventos = this.retorno;
        }
        else {
            this.listaEventos = [];
        }
    };
    AgendaPage.prototype.generateCalendar = function (date) {
        var lastDayOfMonth = date.endOf('month').date();
        var month = date.month();
        var year = date.year();
        var n = 1;
        var firstWeekDay = null;
        this.dateValue = date.format('MMMM YYYY');
        this.days = [];
        this.weeks = [];
        if (this.firstWeekDaySunday == true) {
            firstWeekDay = date.set('date', 2).day();
        }
        else {
            firstWeekDay = date.set('date', 1).day();
        }
        if (firstWeekDay !== 1) {
            n -= firstWeekDay - 1;
        }
        if (firstWeekDay === 0) {
            n = -5;
        }
        for (var i = n; i <= lastDayOfMonth; i += 1) {
            if (i <= 0) {
                this.days.push({ day: null, month: null, year: null, enabled: false });
            }
            if (i > 0) {
                this.days.push({ day: i, month: month + 1, year: year, enabled: true });
            }
        }
        var week = [];
        for (var i = 0; i <= this.days.length; i += 1) {
            if (i % 7 == 0 && i != 0) {
                this.weeks.push(week);
                week = [];
            }
            if (i == this.days.length) {
                this.weeks.push(week);
            }
            else {
                week.push(this.days[i]);
            }
        }
    };
    AgendaPage.prototype.isSelected = function (date) {
        var selectedDate = moment(date.day + '.' + date.month + '.' + date.year, 'DD.MM.YYYY');
        return selectedDate.toDate().getTime() === this.cannonical;
    };
    AgendaPage.prototype.isOcupado = function (date) {
        for (var _i = 0, _a = this.listaTodosEventos; _i < _a.length; _i++) {
            var usuarioEvento = _a[_i];
            var selectedDate = moment(usuarioEvento.evento.dtInicio, 'YYYY-MM-DD');
            var selectedDate2 = moment(date.year + '-' + date.month + '-' + date.day, 'YYYY-MM-DD');
            var marcar = moment(selectedDate).isSame(selectedDate2);
            if (usuarioEvento.status == "A" && marcar) {
                if (!this.isSelected(date)) {
                    return true;
                }
            }
        }
    };
    AgendaPage.prototype.generateDayNames = function () {
        this.dayNames = [];
        var date = this.firstWeekDaySunday === true ? moment('2015-06-07') : moment('2015-06-01');
        for (var i = 0; i < 7; i += 1) {
            this.dayNames.push(date.format('dd'));
            date.add('1', 'd');
        }
    };
    AgendaPage.prototype.setValue = function (value) {
        var val = moment(value, this.modelFormat || 'YYYY-MM-DD');
        this.viewValue = val.format(this.viewFormat || 'YYYY-MM-DD');
        this.cannonical = val.toDate().getTime();
    };
    AgendaPage.prototype.init = function (idUsuario) {
        var _this = this;
        this.idUsuario = idUsuario;
        this.idUsuarioLogado = idUsuario;
        this.listaEventos = [];
        this.meusEventos = [];
        this.convitesEvento = [];
        this.viewValue = moment().format(this.modelFormat || 'YYYY-MM-DD');
        this.setValue(this.viewValue);
        this.service.buscaTodosUsuarioEventoPorIdUsuario(idUsuario)
            .subscribe(function (data) { return _this.buscaTodosUsuarioEventoSucess(data); }, function (err) { return _this.logError(err); }, function () { return _this.buscaComplete(); });
        this.date = moment();
        this.firstWeekDaySunday = true;
        this.generateDayNames();
        this.generateCalendar(this.date);
    };
    AgendaPage.prototype.buscaComplete = function () {
    };
    AgendaPage.prototype.buscaTodosUsuarioEventoSucess = function (data) {
        if (data != false) {
            this.listaTodosEventos = data;
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var usuarioEvento = data_1[_i];
                var selectedDate = moment(usuarioEvento.evento.dtInicio, moment.ISO_8601);
                usuarioEvento.evento.momento = selectedDate;
                if (usuarioEvento.status == "A" && moment(selectedDate.format(this.modelFormat || 'YYYY-MM-DD')).isSame(this.viewValue + "")) {
                    this.listaEventos.push(usuarioEvento);
                }
                if (usuarioEvento.evento.usuario.id == this.idUsuario) {
                    this.meusEventos.push(usuarioEvento);
                }
                if (usuarioEvento.status == "P") {
                    this.convitesEvento.push(usuarioEvento);
                }
            }
        }
        else {
            this.listaEventos = [];
            this.meusEventos = [];
            this.convitesEvento = [];
        }
    };
    AgendaPage.prototype.cadastrarEvento = function () {
        this.nav.push(CadastrarEventoPage, { idUsuarioLogado: this.idUsuario });
    };
    AgendaPage.prototype.abrirEvento = function (item) {
        this.nav.push(EventoPage, { idUsuarioLogado: this.idUsuario, usuarioEvento: item });
    };
    AgendaPage.prototype.doRefresh = function (refresher) {
        //var dataEnv = moment().format(this.modelFormat || 'DD-MM-YYYY');
        var _this = this;
        this.userData.getId().then(function (data) { return _this.init(data); });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    AgendaPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'agenda.html',
                    providers: [UsuarioService, UserData]
                },] },
    ];
    /** @nocollapse */
    AgendaPage.ctorParameters = [
        { type: NavController, },
        { type: UsuarioService, },
        { type: NavParams, },
        { type: UserData, },
    ];
    AgendaPage.propDecorators = {
        'modelFormat': [{ type: Input, args: ['model-format',] },],
        'viewFormat': [{ type: Input, args: ['view-format',] },],
    };
    return AgendaPage;
}());
