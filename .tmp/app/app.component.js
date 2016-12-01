import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UserData } from '../services/user-data';
export var MyApp = (function () {
    function MyApp(platform, userData) {
        var _this = this;
        this.userData = userData;
        this.userData.getId().then(function (username) {
            if (username == null) {
                _this.rootPage = HomePage;
            }
            else {
                _this.rootPage = TabsPage;
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }
    MyApp.decorators = [
        { type: Component, args: [{
                    template: "<ion-nav [root]=\"rootPage\"></ion-nav>"
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
        { type: UserData, },
    ];
    return MyApp;
}());
