/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../services/UsuarioService';
import * as import4 from './feed';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/http/src/http';
import * as import10 from 'ionic-angular/navigation/nav-controller';
import * as import11 from 'ionic-angular/navigation/nav-params';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from 'ionic-angular/components/toolbar/toolbar';
import * as import15 from 'ionic-angular/components/navbar/navbar';
import * as import16 from '@angular/forms/src/directives/ng_model';
import * as import17 from '@angular/forms/src/directives/ng_control_status';
import * as import18 from 'ionic-angular/components/searchbar/searchbar';
import * as import19 from 'ionic-angular/components/content/content';
import * as import20 from 'ionic-angular/components/card/card';
import * as import21 from '@angular/common/src/directives/ng_for';
import * as import22 from 'ionic-angular/config/config';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from 'ionic-angular/navigation/view-controller';
import * as import25 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import26 from 'ionic-angular/components/app/app';
import * as import27 from '../../node_modules/ionic-angular/components/searchbar/searchbar.ngfactory';
import * as import28 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import29 from 'ionic-angular/util/keyboard';
import * as import30 from '@angular/core/src/zone/ng_zone';
import * as import31 from 'ionic-angular/components/tabs/tabs';
import * as import32 from '@angular/core/src/linker/template_ref';
import * as import33 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import34 from '@angular/forms/src/directives/ng_control';
import * as import35 from 'ionic-angular/components/item/item';
import * as import36 from '@angular/core/src/linker/query_list';
import * as import37 from 'ionic-angular/components/avatar/avatar';
import * as import38 from '@angular/common/src/directives/ng_if';
import * as import39 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import40 from 'ionic-angular/util/form';
import * as import41 from '@angular/core/src/security';
var renderType_FeedPage_Host = null;
var _View_FeedPage_Host0 = (function (_super) {
    __extends(_View_FeedPage_Host0, _super);
    function _View_FeedPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_FeedPage_Host0, renderType_FeedPage_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_FeedPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_FeedPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._UsuarioService_0_4 = new import3.UsuarioService(this.parentInjector.get(import9.Http));
        this._FeedPage_0_5 = new import4.FeedPage(this.parentInjector.get(import10.NavController), this._UsuarioService_0_4, this.parentInjector.get(import11.NavParams));
        this._appEl_0.initComponent(this._FeedPage_0_5, [], compView_0);
        compView_0.create(this._FeedPage_0_5, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_FeedPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.UsuarioService) && (0 === requestNodeIndex))) {
            return this._UsuarioService_0_4;
        }
        if (((token === import4.FeedPage) && (0 === requestNodeIndex))) {
            return this._FeedPage_0_5;
        }
        return notFoundResult;
    };
    return _View_FeedPage_Host0;
}(import1.AppView));
function viewFactory_FeedPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_FeedPage_Host === null)) {
        (renderType_FeedPage_Host = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, [], {}));
    }
    return new _View_FeedPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var FeedPageNgFactory = new import13.ComponentFactory('ng-component', viewFactory_FeedPage_Host0, import4.FeedPage);
var styles_FeedPage = [];
var renderType_FeedPage = null;
var _View_FeedPage0 = (function (_super) {
    __extends(_View_FeedPage0, _super);
    function _View_FeedPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_FeedPage0, renderType_FeedPage, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_FeedPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import14.Header(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import24.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import25.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import15.Navbar(this.parentInjector.get(import26.App), this.parentInjector.get(import24.ViewController, null), this.parentInjector.get(import10.NavController, null), this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-searchbar', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import27.viewFactory_Searchbar0(this.viewUtils, this.injector(4), this._appEl_4);
        this._NgModel_4_4 = new import16.NgModel(null, null, null, null);
        this._NgControl_4_5 = this._NgModel_4_4;
        this._NgControlStatus_4_6 = new import17.NgControlStatus(this._NgControl_4_5);
        this._Searchbar_4_7 = new import18.Searchbar(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_4), this.renderer, this._NgControl_4_5);
        this._appEl_4.initComponent(this._Searchbar_4_7, [], compView_4);
        compView_4.create(this._Searchbar_4_7, [], null);
        this._text_5 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_5
            ])
        ], null);
        this._text_6 = this.renderer.createText(this._el_0, '\n', null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_8 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_8, 'class', 'bg-branco');
        this._appEl_8 = new import2.AppElement(8, null, this, this._el_8);
        var compView_8 = import28.viewFactory_Content0(this.viewUtils, this.injector(8), this._appEl_8);
        this._Content_8_4 = new import19.Content(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_8), this.renderer, this.parentInjector.get(import26.App), this.parentInjector.get(import29.Keyboard), this.parentInjector.get(import30.NgZone), this.parentInjector.get(import24.ViewController, null), this.parentInjector.get(import31.Tabs, null));
        this._appEl_8.initComponent(this._Content_8_4, [], compView_8);
        this._text_9 = this.renderer.createText(null, '\n\n', null);
        this._el_10 = this.renderer.createElement(null, 'ion-card', null);
        this.renderer.setElementAttribute(this._el_10, 'class', 'cardFeed');
        this._Card_10_3 = new import20.Card(this.parentInjector.get(import22.Config), new import23.ElementRef(this._el_10), this.renderer);
        this._text_11 = this.renderer.createText(this._el_10, '\n\n  ', null);
        this._anchor_12 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._appEl_12 = new import2.AppElement(12, 10, this, this._anchor_12);
        this._TemplateRef_12_5 = new import32.TemplateRef_(this._appEl_12, viewFactory_FeedPage1);
        this._NgFor_12_6 = new import21.NgFor(this._appEl_12.vcRef, this._TemplateRef_12_5, this.parentInjector.get(import33.IterableDiffers), this.ref);
        this._text_13 = this.renderer.createText(this._el_10, '\n', null);
        this._text_14 = this.renderer.createText(null, '\n\n\n', null);
        this._text_15 = this.renderer.createText(null, '\n\n', null);
        this._text_16 = this.renderer.createText(null, '\n\n', null);
        this._text_17 = this.renderer.createText(null, '\n\n', null);
        this._text_18 = this.renderer.createText(null, '\n\n', null);
        this._text_19 = this.renderer.createText(null, '\n\n', null);
        this._text_20 = this.renderer.createText(null, '\n\n', null);
        compView_8.create(this._Content_8_4, [
            [],
            [].concat([
                this._text_9,
                this._el_10,
                this._text_14,
                this._text_15,
                this._text_16,
                this._text_17,
                this._text_18,
                this._text_19,
                this._text_20
            ]),
            []
        ], null);
        this._text_21 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._text_22 = this.renderer.createText(parentRenderNode, '\n', null);
        this._text_23 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import8.UNINITIALIZED;
        this._expr_1 = import8.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_4, 'ngModelChange', this.eventHandler(this._handle_ngModelChange_4_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_4, 'keyup', this.eventHandler(this._handle_keyup_4_1.bind(this)));
        this._expr_4 = import8.UNINITIALIZED;
        var subscription_0 = this._NgModel_4_4.update.subscribe(this.eventHandler(this._handle_ngModelChange_4_0.bind(this)));
        this._expr_5 = import8.UNINITIALIZED;
        this._expr_6 = import8.UNINITIALIZED;
        this._expr_7 = import8.UNINITIALIZED;
        this._expr_8 = import8.UNINITIALIZED;
        this._expr_9 = import8.UNINITIALIZED;
        this._expr_10 = import8.UNINITIALIZED;
        this._expr_11 = import8.UNINITIALIZED;
        this._expr_12 = import8.UNINITIALIZED;
        this._expr_13 = import8.UNINITIALIZED;
        this._expr_14 = import8.UNINITIALIZED;
        this._expr_15 = import8.UNINITIALIZED;
        this._expr_16 = import8.UNINITIALIZED;
        this._expr_17 = import8.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._anchor_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._text_23
        ], [
            disposable_0,
            disposable_1
        ], [subscription_0]);
        return null;
    };
    _View_FeedPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.NgModel) && (4 === requestNodeIndex))) {
            return this._NgModel_4_4;
        }
        if (((token === import34.NgControl) && (4 === requestNodeIndex))) {
            return this._NgControl_4_5;
        }
        if (((token === import17.NgControlStatus) && (4 === requestNodeIndex))) {
            return this._NgControlStatus_4_6;
        }
        if (((token === import18.Searchbar) && (4 === requestNodeIndex))) {
            return this._Searchbar_4_7;
        }
        if (((token === import15.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._Navbar_2_4;
        }
        if (((token === import14.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Header_0_3;
        }
        if (((token === import32.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import21.NgFor) && (12 === requestNodeIndex))) {
            return this._NgFor_12_6;
        }
        if (((token === import20.Card) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._Card_10_3;
        }
        if (((token === import19.Content) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._Content_8_4;
        }
        return notFoundResult;
    };
    _View_FeedPage0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_4 = this.context.searchQuery;
        if (import5.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._NgModel_4_4.model = currVal_4;
            if ((changes === null)) {
                (changes = {});
            }
            changes['model'] = new import8.SimpleChange(this._expr_4, currVal_4);
            this._expr_4 = currVal_4;
        }
        if ((changes !== null)) {
            this._NgModel_4_4.ngOnChanges(changes);
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Searchbar_4_7.ngOnInit();
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_8_4.ngOnInit();
        }
        changes = null;
        var currVal_17 = this.context.items;
        if (import5.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this._NgFor_12_6.ngForOf = currVal_17;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import8.SimpleChange(this._expr_17, currVal_17);
            this._expr_17 = currVal_17;
        }
        if ((changes !== null)) {
            this._NgFor_12_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_12_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = this._Navbar_2_4._hidden;
        if (import5.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4._sbPadding;
        if (import5.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_5 = this._NgControlStatus_4_6.ngClassUntouched;
        if (import5.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_4, 'ng-untouched', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._NgControlStatus_4_6.ngClassTouched;
        if (import5.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_4, 'ng-touched', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatus_4_6.ngClassPristine;
        if (import5.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_4, 'ng-pristine', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatus_4_6.ngClassDirty;
        if (import5.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_4, 'ng-dirty', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatus_4_6.ngClassValid;
        if (import5.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_4, 'ng-valid', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._NgControlStatus_4_6.ngClassInvalid;
        if (import5.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_4, 'ng-invalid', currVal_10);
            this._expr_10 = currVal_10;
        }
        var currVal_11 = this._Searchbar_4_7._value;
        if (import5.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setElementClass(this._el_4, 'searchbar-has-value', currVal_11);
            this._expr_11 = currVal_11;
        }
        var currVal_12 = this._Searchbar_4_7._isActive;
        if (import5.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementClass(this._el_4, 'searchbar-active', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = this._Searchbar_4_7.showCancelButton;
        if (import5.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_4, 'searchbar-show-cancel', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this._Searchbar_4_7.shouldAlignLeft();
        if (import5.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementClass(this._el_4, 'searchbar-left-aligned', currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_15 = this._Searchbar_4_7._sbHasFocus;
        if (import5.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_4, 'searchbar-has-focus', currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_16 = this._Content_8_4._sbPadding;
        if (import5.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_8, 'statusbar-padding', currVal_16);
            this._expr_16 = currVal_16;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            this._Searchbar_4_7.ngAfterViewChecked();
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    };
    _View_FeedPage0.prototype.destroyInternal = function () {
        this._NgModel_4_4.ngOnDestroy();
        this._Content_8_4.ngOnDestroy();
    };
    _View_FeedPage0.prototype._handle_ngModelChange_4_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.context.searchQuery = $event) !== false);
        return (true && pd_0);
    };
    _View_FeedPage0.prototype._handle_keyup_4_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.onKey($event) !== false);
        return (true && pd_0);
    };
    return _View_FeedPage0;
}(import1.AppView));
export function viewFactory_FeedPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_FeedPage === null)) {
        (renderType_FeedPage = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, styles_FeedPage, {}));
    }
    return new _View_FeedPage0(viewUtils, parentInjector, declarationEl);
}
var _View_FeedPage1 = (function (_super) {
    __extends(_View_FeedPage1, _super);
    function _View_FeedPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_FeedPage1, renderType_FeedPage, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_FeedPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import39.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import35.Item(this.parent.parentInjector.get(import40.Form), this.parent.parentInjector.get(import22.Config), new import23.ElementRef(this._el_0), this.renderer);
        this._ItemContent_0_5 = new import35.ItemContent();
        this._query_Label_0_0 = new import36.QueryList();
        this._query_Button_0_1 = new import36.QueryList();
        this._query_Icon_0_2 = new import36.QueryList();
        this._appEl_0.initComponent(this._Item_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n      ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-avatar', null);
        this.renderer.setElementAttribute(this._el_2, 'item-left', '');
        this._Avatar_2_3 = new import37.Avatar();
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._anchor_4);
        this._TemplateRef_4_5 = new import32.TemplateRef_(this._appEl_4, viewFactory_FeedPage2);
        this._NgIf_4_6 = new import38.NgIf(this._appEl_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(this._el_2, '\n        ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._appEl_6 = new import2.AppElement(6, 2, this, this._anchor_6);
        this._TemplateRef_6_5 = new import32.TemplateRef_(this._appEl_6, viewFactory_FeedPage3);
        this._NgIf_6_6 = new import38.NgIf(this._appEl_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_2, '\n      ', null);
        this._text_8 = this.renderer.createText(null, '\n      ', null);
        this._el_9 = this.renderer.createElement(null, 'h2', null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(null, '\n  ', null);
        this._query_Label_0_0.reset([]);
        this._Item_0_4.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4, [
            [].concat([this._el_2]),
            [],
            [].concat([
                this._text_1,
                this._text_8,
                this._el_9,
                this._text_11
            ]),
            [],
            []
        ], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_1 = import8.UNINITIALIZED;
        this._expr_2 = import8.UNINITIALIZED;
        this._expr_3 = import8.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11
        ], [disposable_0], []);
        return null;
    };
    _View_FeedPage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import32.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import38.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6;
        }
        if (((token === import32.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import38.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6;
        }
        if (((token === import37.Avatar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Avatar_2_3;
        }
        if (((token === import35.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._Item_0_4;
        }
        if (((token === import35.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._ItemContent_0_5;
        }
        return notFoundResult;
    };
    _View_FeedPage1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = (this.context.$implicit.fotoProfile != null);
        if (import5.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgIf_4_6.ngIf = currVal_1;
            this._expr_1 = currVal_1;
        }
        var currVal_2 = (this.context.$implicit.fotoProfile == null);
        if (import5.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._NgIf_6_6.ngIf = currVal_2;
            this._expr_2 = currVal_2;
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_0_1.dirty) {
                this._query_Button_0_1.reset([]);
                this._Item_0_4._buttons = this._query_Button_0_1;
                this._query_Button_0_1.notifyOnChanges();
            }
            if (this._query_Icon_0_2.dirty) {
                this._query_Icon_0_2.reset([]);
                this._Item_0_4._icons = this._query_Icon_0_2;
                this._query_Icon_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_0_4.ngAfterContentInit();
            }
        }
        var currVal_3 = import5.interpolate(1, '', this.context.$implicit.username, '');
        if (import5.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_10, currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_FeedPage1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.goUsuario(this.context.$implicit.id) !== false);
        return (true && pd_0);
    };
    return _View_FeedPage1;
}(import1.AppView));
function viewFactory_FeedPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_FeedPage1(viewUtils, parentInjector, declarationEl);
}
var _View_FeedPage2 = (function (_super) {
    __extends(_View_FeedPage2, _super);
    function _View_FeedPage2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_FeedPage2, renderType_FeedPage, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_FeedPage2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'img', null);
        this._expr_0 = import8.UNINITIALIZED;
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return null;
    };
    _View_FeedPage2.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import5.interpolate(1, '', this.parent.context.$implicit.fotoProfile, '');
        if (import5.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_0, 'src', this.viewUtils.sanitizer.sanitize(import41.SecurityContext.URL, currVal_0));
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_FeedPage2;
}(import1.AppView));
function viewFactory_FeedPage2(viewUtils, parentInjector, declarationEl) {
    return new _View_FeedPage2(viewUtils, parentInjector, declarationEl);
}
var _View_FeedPage3 = (function (_super) {
    __extends(_View_FeedPage3, _super);
    function _View_FeedPage3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_FeedPage3, renderType_FeedPage, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    _View_FeedPage3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'img', null);
        this.renderer.setElementAttribute(this._el_0, 'src', 'http://www.iconsfind.com/wp-content/uploads/2015/11/20151112_5643f331cf8c4.png');
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return null;
    };
    return _View_FeedPage3;
}(import1.AppView));
function viewFactory_FeedPage3(viewUtils, parentInjector, declarationEl) {
    return new _View_FeedPage3(viewUtils, parentInjector, declarationEl);
}