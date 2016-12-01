/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../services/NotificaoService';
import * as import4 from './tabs';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/http/src/http';
import * as import10 from 'ionic-angular/platform/platform';
import * as import11 from 'ionic-angular/navigation/nav-params';
import * as import12 from '../../services/user-data';
import * as import13 from '@angular/core/src/metadata/view';
import * as import14 from '@angular/core/src/linker/component_factory';
import * as import15 from 'ionic-angular/components/tabs/tabs';
import * as import16 from 'ionic-angular/components/tabs/tab';
import * as import17 from '../../node_modules/ionic-angular/components/tabs/tabs.ngfactory';
import * as import18 from 'ionic-angular/navigation/nav-controller';
import * as import19 from 'ionic-angular/navigation/view-controller';
import * as import20 from 'ionic-angular/components/app/app';
import * as import21 from 'ionic-angular/config/config';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from 'ionic-angular/navigation/deep-linker';
import * as import24 from '../../node_modules/ionic-angular/components/tabs/tab.ngfactory';
import * as import25 from 'ionic-angular/util/keyboard';
import * as import26 from '@angular/core/src/zone/ng_zone';
import * as import27 from '@angular/core/src/linker/component_factory_resolver';
import * as import28 from 'ionic-angular/gestures/gesture-controller';
import * as import29 from 'ionic-angular/transitions/transition-controller';
var renderType_TabsPage_Host:import0.RenderComponentType = (null as any);
class _View_TabsPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _NotificaoService_0_4:import3.NotificaoService;
  _TabsPage_0_5:import4.TabsPage;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_TabsPage_Host0,renderType_TabsPage_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_TabsPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._NotificaoService_0_4 = new import3.NotificaoService(this.parentInjector.get(import9.Http));
    this._TabsPage_0_5 = new import4.TabsPage(this.parentInjector.get(import10.Platform),this.parentInjector.get(import11.NavParams),this._NotificaoService_0_4,this.parentInjector.get(import12.UserData));
    this._appEl_0.initComponent(this._TabsPage_0_5,[],compView_0);
    compView_0.create(this._TabsPage_0_5,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.NotificaoService) && (0 === requestNodeIndex))) { return this._NotificaoService_0_4; }
    if (((token === import4.TabsPage) && (0 === requestNodeIndex))) { return this._TabsPage_0_5; }
    return notFoundResult;
  }
}
function viewFactory_TabsPage_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_TabsPage_Host === (null as any))) { (renderType_TabsPage_Host = viewUtils.createRenderComponentType('',0,import13.ViewEncapsulation.None,[],{})); }
  return new _View_TabsPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const TabsPageNgFactory:import14.ComponentFactory<import4.TabsPage> = new import14.ComponentFactory<import4.TabsPage>('ng-component',viewFactory_TabsPage_Host0,import4.TabsPage);
const styles_TabsPage:any[] = [];
var renderType_TabsPage:import0.RenderComponentType = (null as any);
class _View_TabsPage0 extends import1.AppView<import4.TabsPage> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Tabs_0_4:import15.Tabs;
  _el_1:any;
  /*private*/ _appEl_1:import2.AppElement;
  _Tab_1_4:import16.Tab;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Tab_2_4:import16.Tab;
  _el_3:any;
  /*private*/ _appEl_3:import2.AppElement;
  _Tab_3_4:import16.Tab;
  _el_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _Tab_4_4:import16.Tab;
  _el_5:any;
  /*private*/ _appEl_5:import2.AppElement;
  _Tab_5_4:import16.Tab;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  /*private*/ _expr_20:any;
  /*private*/ _expr_21:any;
  /*private*/ _expr_22:any;
  /*private*/ _expr_23:any;
  /*private*/ _expr_24:any;
  /*private*/ _expr_25:any;
  /*private*/ _expr_26:any;
  /*private*/ _expr_27:any;
  /*private*/ _expr_28:any;
  /*private*/ _expr_29:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_TabsPage0,renderType_TabsPage,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-tabs',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','tabs-icon');
    this.renderer.setElementAttribute(this._el_0,'selectedIndex','2');
    this.renderer.setElementAttribute(this._el_0,'tabsPlacement','bottom');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import17.viewFactory_Tabs0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Tabs_0_4 = new import15.Tabs(this.parentInjector.get(import18.NavController,(null as any)),this.parentInjector.get(import19.ViewController,(null as any)),this.parentInjector.get(import20.App),this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_0),this.parentInjector.get(import10.Platform),this.renderer,this.parentInjector.get(import23.DeepLinker));
    this._appEl_0.initComponent(this._Tabs_0_4,[],compView_0);
    this._el_1 = this.renderer.createElement((null as any),'ion-tab',(null as any));
    this.renderer.setElementAttribute(this._el_1,'role','tabpanel');
    this.renderer.setElementAttribute(this._el_1,'tabIcon','search');
    this._appEl_1 = new import2.AppElement(1,0,this,this._el_1);
    var compView_1:any = import24.viewFactory_Tab0(this.viewUtils,this.injector(1),this._appEl_1);
    this._Tab_1_4 = new import16.Tab(this._Tabs_0_4,this.parentInjector.get(import20.App),this.parentInjector.get(import21.Config),this.parentInjector.get(import25.Keyboard),new import22.ElementRef(this._el_1),this.parentInjector.get(import26.NgZone),this.renderer,this.parentInjector.get(import27.ComponentFactoryResolver),compView_1.ref,this.parentInjector.get(import28.GestureController),this.parentInjector.get(import29.TransitionController),this.parentInjector.get(import23.DeepLinker,(null as any)));
    this._appEl_1.initComponent(this._Tab_1_4,[],compView_1);
    compView_1.create(this._Tab_1_4,[],(null as any));
    this._el_2 = this.renderer.createElement((null as any),'ion-tab',(null as any));
    this.renderer.setElementAttribute(this._el_2,'role','tabpanel');
    this.renderer.setElementAttribute(this._el_2,'tabBadgeStyle','danger');
    this.renderer.setElementAttribute(this._el_2,'tabIcon','notifications');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import24.viewFactory_Tab0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Tab_2_4 = new import16.Tab(this._Tabs_0_4,this.parentInjector.get(import20.App),this.parentInjector.get(import21.Config),this.parentInjector.get(import25.Keyboard),new import22.ElementRef(this._el_2),this.parentInjector.get(import26.NgZone),this.renderer,this.parentInjector.get(import27.ComponentFactoryResolver),compView_2.ref,this.parentInjector.get(import28.GestureController),this.parentInjector.get(import29.TransitionController),this.parentInjector.get(import23.DeepLinker,(null as any)));
    this._appEl_2.initComponent(this._Tab_2_4,[],compView_2);
    compView_2.create(this._Tab_2_4,[],(null as any));
    this._el_3 = this.renderer.createElement((null as any),'ion-tab',(null as any));
    this.renderer.setElementAttribute(this._el_3,'role','tabpanel');
    this.renderer.setElementAttribute(this._el_3,'tabIcon','calendar');
    this._appEl_3 = new import2.AppElement(3,0,this,this._el_3);
    var compView_3:any = import24.viewFactory_Tab0(this.viewUtils,this.injector(3),this._appEl_3);
    this._Tab_3_4 = new import16.Tab(this._Tabs_0_4,this.parentInjector.get(import20.App),this.parentInjector.get(import21.Config),this.parentInjector.get(import25.Keyboard),new import22.ElementRef(this._el_3),this.parentInjector.get(import26.NgZone),this.renderer,this.parentInjector.get(import27.ComponentFactoryResolver),compView_3.ref,this.parentInjector.get(import28.GestureController),this.parentInjector.get(import29.TransitionController),this.parentInjector.get(import23.DeepLinker,(null as any)));
    this._appEl_3.initComponent(this._Tab_3_4,[],compView_3);
    compView_3.create(this._Tab_3_4,[],(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-tab',(null as any));
    this.renderer.setElementAttribute(this._el_4,'role','tabpanel');
    this.renderer.setElementAttribute(this._el_4,'tabIcon','people');
    this._appEl_4 = new import2.AppElement(4,0,this,this._el_4);
    var compView_4:any = import24.viewFactory_Tab0(this.viewUtils,this.injector(4),this._appEl_4);
    this._Tab_4_4 = new import16.Tab(this._Tabs_0_4,this.parentInjector.get(import20.App),this.parentInjector.get(import21.Config),this.parentInjector.get(import25.Keyboard),new import22.ElementRef(this._el_4),this.parentInjector.get(import26.NgZone),this.renderer,this.parentInjector.get(import27.ComponentFactoryResolver),compView_4.ref,this.parentInjector.get(import28.GestureController),this.parentInjector.get(import29.TransitionController),this.parentInjector.get(import23.DeepLinker,(null as any)));
    this._appEl_4.initComponent(this._Tab_4_4,[],compView_4);
    compView_4.create(this._Tab_4_4,[],(null as any));
    this._el_5 = this.renderer.createElement((null as any),'ion-tab',(null as any));
    this.renderer.setElementAttribute(this._el_5,'role','tabpanel');
    this.renderer.setElementAttribute(this._el_5,'tabIcon','person');
    this._appEl_5 = new import2.AppElement(5,0,this,this._el_5);
    var compView_5:any = import24.viewFactory_Tab0(this.viewUtils,this.injector(5),this._appEl_5);
    this._Tab_5_4 = new import16.Tab(this._Tabs_0_4,this.parentInjector.get(import20.App),this.parentInjector.get(import21.Config),this.parentInjector.get(import25.Keyboard),new import22.ElementRef(this._el_5),this.parentInjector.get(import26.NgZone),this.renderer,this.parentInjector.get(import27.ComponentFactoryResolver),compView_5.ref,this.parentInjector.get(import28.GestureController),this.parentInjector.get(import29.TransitionController),this.parentInjector.get(import23.DeepLinker,(null as any)));
    this._appEl_5.initComponent(this._Tab_5_4,[],compView_5);
    compView_5.create(this._Tab_5_4,[],(null as any));
      compView_0.create(this._Tabs_0_4,[[].concat([
        this._el_1,
        this._el_2,
        this._el_3,
        this._el_4,
        this._el_5
      ]
    )],(null as any));
    this._expr_0 = import8.UNINITIALIZED;
    this._expr_1 = import8.UNINITIALIZED;
    this._expr_2 = import8.UNINITIALIZED;
    this._expr_3 = import8.UNINITIALIZED;
    this._expr_4 = import8.UNINITIALIZED;
    this._expr_5 = import8.UNINITIALIZED;
    this._expr_6 = import8.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_2,'ionSelect',this.eventHandler(this._handle_ionSelect_2_0.bind(this)));
    this._expr_8 = import8.UNINITIALIZED;
    this._expr_9 = import8.UNINITIALIZED;
    this._expr_10 = import8.UNINITIALIZED;
    this._expr_11 = import8.UNINITIALIZED;
    this._expr_12 = import8.UNINITIALIZED;
    this._expr_13 = import8.UNINITIALIZED;
    this._expr_14 = import8.UNINITIALIZED;
    const subscription_0:any = this._Tab_2_4.ionSelect.subscribe(this.eventHandler(this._handle_ionSelect_2_0.bind(this)));
    this._expr_15 = import8.UNINITIALIZED;
    this._expr_16 = import8.UNINITIALIZED;
    this._expr_17 = import8.UNINITIALIZED;
    this._expr_18 = import8.UNINITIALIZED;
    this._expr_19 = import8.UNINITIALIZED;
    this._expr_20 = import8.UNINITIALIZED;
    this._expr_21 = import8.UNINITIALIZED;
    this._expr_22 = import8.UNINITIALIZED;
    this._expr_23 = import8.UNINITIALIZED;
    this._expr_24 = import8.UNINITIALIZED;
    this._expr_25 = import8.UNINITIALIZED;
    this._expr_26 = import8.UNINITIALIZED;
    this._expr_27 = import8.UNINITIALIZED;
    this._expr_28 = import8.UNINITIALIZED;
    this._expr_29 = import8.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._el_1,
      this._el_2,
      this._el_3,
      this._el_4,
      this._el_5
    ]
    ,[disposable_0],[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.Tab) && (1 === requestNodeIndex))) { return this._Tab_1_4; }
    if (((token === import16.Tab) && (2 === requestNodeIndex))) { return this._Tab_2_4; }
    if (((token === import16.Tab) && (3 === requestNodeIndex))) { return this._Tab_3_4; }
    if (((token === import16.Tab) && (4 === requestNodeIndex))) { return this._Tab_4_4; }
    if (((token === import16.Tab) && (5 === requestNodeIndex))) { return this._Tab_5_4; }
    if (((token === import15.Tabs) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._Tabs_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = '2';
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._Tabs_0_4.selectedIndex = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = 'bottom';
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._Tabs_0_4.tabsPlacement = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context.tabTwo;
    if (import5.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._Tab_1_4.root = currVal_2;
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this.context.idUsuarioLogado;
    if (import5.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._Tab_1_4.rootParams = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = 'search';
    if (import5.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._Tab_1_4.tabIcon = currVal_4;
      this._expr_4 = currVal_4;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Tab_1_4.ngOnInit(); }
    const currVal_8:any = this.context.tabFive;
    if (import5.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._Tab_2_4.root = currVal_8;
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this.context.idUsuarioLogado;
    if (import5.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this._Tab_2_4.rootParams = currVal_9;
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = 'notifications';
    if (import5.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this._Tab_2_4.tabIcon = currVal_10;
      this._expr_10 = currVal_10;
    }
    const currVal_11:any = this.context.nNotif;
    if (import5.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this._Tab_2_4.tabBadge = currVal_11;
      this._expr_11 = currVal_11;
    }
    const currVal_12:any = 'danger';
    if (import5.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this._Tab_2_4.tabBadgeStyle = currVal_12;
      this._expr_12 = currVal_12;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Tab_2_4.ngOnInit(); }
    const currVal_15:any = this.context.tabFour;
    if (import5.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this._Tab_3_4.root = currVal_15;
      this._expr_15 = currVal_15;
    }
    const currVal_16:any = this.context.idUsuarioLogado;
    if (import5.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this._Tab_3_4.rootParams = currVal_16;
      this._expr_16 = currVal_16;
    }
    const currVal_17:any = 'calendar';
    if (import5.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this._Tab_3_4.tabIcon = currVal_17;
      this._expr_17 = currVal_17;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Tab_3_4.ngOnInit(); }
    const currVal_20:any = this.context.tabSix;
    if (import5.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this._Tab_4_4.root = currVal_20;
      this._expr_20 = currVal_20;
    }
    const currVal_21:any = this.context.idUsuarioLogado;
    if (import5.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this._Tab_4_4.rootParams = currVal_21;
      this._expr_21 = currVal_21;
    }
    const currVal_22:any = 'people';
    if (import5.checkBinding(throwOnChange,this._expr_22,currVal_22)) {
      this._Tab_4_4.tabIcon = currVal_22;
      this._expr_22 = currVal_22;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Tab_4_4.ngOnInit(); }
    const currVal_25:any = this.context.tabThree;
    if (import5.checkBinding(throwOnChange,this._expr_25,currVal_25)) {
      this._Tab_5_4.root = currVal_25;
      this._expr_25 = currVal_25;
    }
    const currVal_26:any = this.context.idUsuarioLogado;
    if (import5.checkBinding(throwOnChange,this._expr_26,currVal_26)) {
      this._Tab_5_4.rootParams = currVal_26;
      this._expr_26 = currVal_26;
    }
    const currVal_27:any = 'person';
    if (import5.checkBinding(throwOnChange,this._expr_27,currVal_27)) {
      this._Tab_5_4.tabIcon = currVal_27;
      this._expr_27 = currVal_27;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Tab_5_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_5:any = this._Tab_1_4._tabId;
    if (import5.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementAttribute(this._el_1,'id',((currVal_5 == (null as any))? (null as any): currVal_5.toString()));
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._Tab_1_4._btnId;
    if (import5.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementAttribute(this._el_1,'aria-labelledby',((currVal_6 == (null as any))? (null as any): currVal_6.toString()));
      this._expr_6 = currVal_6;
    }
    const currVal_13:any = this._Tab_2_4._tabId;
    if (import5.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementAttribute(this._el_2,'id',((currVal_13 == (null as any))? (null as any): currVal_13.toString()));
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = this._Tab_2_4._btnId;
    if (import5.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementAttribute(this._el_2,'aria-labelledby',((currVal_14 == (null as any))? (null as any): currVal_14.toString()));
      this._expr_14 = currVal_14;
    }
    const currVal_18:any = this._Tab_3_4._tabId;
    if (import5.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementAttribute(this._el_3,'id',((currVal_18 == (null as any))? (null as any): currVal_18.toString()));
      this._expr_18 = currVal_18;
    }
    const currVal_19:any = this._Tab_3_4._btnId;
    if (import5.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setElementAttribute(this._el_3,'aria-labelledby',((currVal_19 == (null as any))? (null as any): currVal_19.toString()));
      this._expr_19 = currVal_19;
    }
    const currVal_23:any = this._Tab_4_4._tabId;
    if (import5.checkBinding(throwOnChange,this._expr_23,currVal_23)) {
      this.renderer.setElementAttribute(this._el_4,'id',((currVal_23 == (null as any))? (null as any): currVal_23.toString()));
      this._expr_23 = currVal_23;
    }
    const currVal_24:any = this._Tab_4_4._btnId;
    if (import5.checkBinding(throwOnChange,this._expr_24,currVal_24)) {
      this.renderer.setElementAttribute(this._el_4,'aria-labelledby',((currVal_24 == (null as any))? (null as any): currVal_24.toString()));
      this._expr_24 = currVal_24;
    }
    const currVal_28:any = this._Tab_5_4._tabId;
    if (import5.checkBinding(throwOnChange,this._expr_28,currVal_28)) {
      this.renderer.setElementAttribute(this._el_5,'id',((currVal_28 == (null as any))? (null as any): currVal_28.toString()));
      this._expr_28 = currVal_28;
    }
    const currVal_29:any = this._Tab_5_4._btnId;
    if (import5.checkBinding(throwOnChange,this._expr_29,currVal_29)) {
      this.renderer.setElementAttribute(this._el_5,'aria-labelledby',((currVal_29 == (null as any))? (null as any): currVal_29.toString()));
      this._expr_29 = currVal_29;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Tabs_0_4.ngAfterViewInit(); } }
  }
  private _handle_ionSelect_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.chat()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_TabsPage0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<import4.TabsPage> {
  if ((renderType_TabsPage === (null as any))) { (renderType_TabsPage = viewUtils.createRenderComponentType('',0,import13.ViewEncapsulation.None,styles_TabsPage,{})); }
  return new _View_TabsPage0(viewUtils,parentInjector,declarationEl);
}