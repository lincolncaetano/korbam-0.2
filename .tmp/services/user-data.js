import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
export var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
    }
    UserData.prototype.login = function (id) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setId(id);
        this.events.publish('user:login');
    };
    UserData.prototype.signup = function (id) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setId(id);
        this.events.publish('user:signup');
    };
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('idUsuario');
        this.events.publish('user:logout');
    };
    UserData.prototype.setId = function (id) {
        this.storage.set('idUsuario', id);
    };
    UserData.prototype.getId = function () {
        return this.storage.get('idUsuario').then(function (value) {
            if (value == null) {
                return null;
            }
            return value;
        });
    };
    // return a promise
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    UserData.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UserData.ctorParameters = [
        { type: Events, },
        { type: Storage, },
    ];
    return UserData;
}());
