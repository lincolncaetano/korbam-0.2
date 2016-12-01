/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './perfil';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '../../services/UsuarioService';
import * as import10 from 'ionic-angular/navigation/nav-params';
import * as import11 from '../../services/user-data';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from 'ionic-angular/components/toolbar/toolbar';
import * as import15 from 'ionic-angular/components/navbar/navbar';
import * as import16 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import17 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from 'ionic-angular/components/button/button';
import * as import20 from 'ionic-angular/components/icon/icon';
import * as import21 from 'ionic-angular/components/content/content';
import * as import22 from '@angular/common/src/directives/ng_if';
import * as import23 from 'ionic-angular/config/config';
import * as import24 from '@angular/core/src/linker/element_ref';
import * as import25 from 'ionic-angular/navigation/view-controller';
import * as import26 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import27 from 'ionic-angular/components/app/app';
import * as import28 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import29 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import30 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import31 from 'ionic-angular/util/keyboard';
import * as import32 from '@angular/core/src/zone/ng_zone';
import * as import33 from 'ionic-angular/components/tabs/tabs';
import * as import34 from '@angular/core/src/linker/template_ref';
import * as import35 from '@angular/core/src/security';
var renderType_PerfilPage_Host:import0.RenderComponentType = (null as any);
class _View_PerfilPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _PerfilPage_0_4:import3.PerfilPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PerfilPage_Host0,renderType_PerfilPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_PerfilPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._PerfilPage_0_4 = new import3.PerfilPage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.UsuarioService),this.parentInjector.get(import10.NavParams),this.parentInjector.get(import11.UserData));
    this._appEl_0.initComponent(this._PerfilPage_0_4,[],compView_0);
    compView_0.create(this._PerfilPage_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.PerfilPage) && (0 === requestNodeIndex))) { return this._PerfilPage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_PerfilPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_PerfilPage_Host === (null as any))) { (renderType_PerfilPage_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,[],{})); }
  return new _View_PerfilPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const PerfilPageNgFactory:import13.ComponentFactory<import3.PerfilPage> = new import13.ComponentFactory<import3.PerfilPage>('ng-component',viewFactory_PerfilPage_Host0,import3.PerfilPage);
const styles_PerfilPage:any[] = [];
var renderType_PerfilPage:import0.RenderComponentType = (null as any);
class _View_PerfilPage0 extends import1.AppView<import3.PerfilPage> {
  _el_0:any;
  _Header_0_3:import14.Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Navbar_2_4:import15.Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _ToolbarTitle_4_4:import16.ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _ToolbarItem_7_3:import17.ToolbarItem;
  _query_Button_7_0:import18.QueryList<any>;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _Button_9_4:import19.Button;
  _text_10:any;
  _el_11:any;
  _Icon_11_3:import20.Icon;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  /*private*/ _appEl_17:import2.AppElement;
  _Content_17_4:import21.Content;
  _text_18:any;
  _el_19:any;
  _el_20:any;
  _text_21:any;
  _anchor_22:any;
  /*private*/ _appEl_22:import2.AppElement;
  _TemplateRef_22_5:any;
  _NgIf_22_6:import22.NgIf;
  _text_23:any;
  _anchor_24:any;
  /*private*/ _appEl_24:import2.AppElement;
  _TemplateRef_24_5:any;
  _NgIf_24_6:import22.NgIf;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _el_30:any;
  _text_31:any;
  _el_32:any;
  _text_33:any;
  _text_34:any;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _el_38:any;
  _text_39:any;
  _el_40:any;
  _text_41:any;
  _el_42:any;
  _text_43:any;
  _text_44:any;
  _text_45:any;
  _el_46:any;
  _text_47:any;
  _el_48:any;
  _text_49:any;
  _text_50:any;
  _text_51:any;
  _anchor_52:any;
  /*private*/ _appEl_52:import2.AppElement;
  _TemplateRef_52_5:any;
  _NgIf_52_6:import22.NgIf;
  _text_53:any;
  _el_54:any;
  _text_55:any;
  _el_56:any;
  _text_57:any;
  _text_58:any;
  _text_59:any;
  _el_60:any;
  _text_61:any;
  _el_62:any;
  _text_63:any;
  _text_64:any;
  _el_65:any;
  _text_66:any;
  _text_67:any;
  _text_68:any;
  _anchor_69:any;
  /*private*/ _appEl_69:import2.AppElement;
  _TemplateRef_69_5:any;
  _NgIf_69_6:import22.NgIf;
  _text_70:any;
  _text_71:any;
  _text_72:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  /*private*/ _expr_16:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PerfilPage0,renderType_PerfilPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import14.Header(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import25.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this.renderer.setElementAttribute(this._el_2,'dark','');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import26.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import15.Navbar(this.parentInjector.get(import27.App),this.parentInjector.get(import25.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4,[],compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import2.AppElement(4,2,this,this._el_4);
    var compView_4:any = import28.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import16.ToolbarTitle(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import14.Toolbar,(null as any)),this._Navbar_2_4);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4,[],compView_4);
    this._text_5 = this.renderer.createText((null as any),'',(null as any));
    compView_4.create(this._ToolbarTitle_4_4,[[].concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_7 = this.renderer.createElement((null as any),'ion-buttons',(null as any));
    this.renderer.setElementAttribute(this._el_7,'end','');
    this._ToolbarItem_7_3 = new import17.ToolbarItem(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_7),this.renderer,this.parentInjector.get(import14.Toolbar,(null as any)),this._Navbar_2_4);
    this._query_Button_7_0 = new import18.QueryList<any>();
    this._text_8 = this.renderer.createText(this._el_7,'\n      ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_7,'button',(null as any));
    this.renderer.setElementAttribute(this._el_9,'ion-button','');
    this._appEl_9 = new import2.AppElement(9,7,this,this._el_9);
    var compView_9:any = import29.viewFactory_Button0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Button_9_4 = new import19.Button((null as any),'',this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_9),this.renderer);
    this._appEl_9.initComponent(this._Button_9_4,[],compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_11,'name','settings');
    this.renderer.setElementAttribute(this._el_11,'role','img');
    this._Icon_11_3 = new import20.Icon(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_11),this.renderer);
    this._text_12 = this.renderer.createText((null as any),'\n      ',(null as any));
      compView_9.create(this._Button_9_4,[[].concat([
        this._text_10,
        this._el_11,
        this._text_12
      ]
    )],(null as any));
    this._text_13 = this.renderer.createText(this._el_7,'\n    ',(null as any));
    this._text_14 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4,[
      [],
      [],
      [].concat([this._el_7]),
      [].concat([
        this._text_3,
        this._el_4,
        this._text_6,
        this._text_14
      ]
      )
    ]
    ,(null as any));
    this._text_15 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_16 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_17 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_17,'class','perfil');
    this._appEl_17 = new import2.AppElement(17,(null as any),this,this._el_17);
    var compView_17:any = import30.viewFactory_Content0(this.viewUtils,this.injector(17),this._appEl_17);
    this._Content_17_4 = new import21.Content(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_17),this.renderer,this.parentInjector.get(import27.App),this.parentInjector.get(import31.Keyboard),this.parentInjector.get(import32.NgZone),this.parentInjector.get(import25.ViewController,(null as any)),this.parentInjector.get(import33.Tabs,(null as any)));
    this._appEl_17.initComponent(this._Content_17_4,[],compView_17);
    this._text_18 = this.renderer.createText((null as any),'\n\n    ',(null as any));
    this._el_19 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_19,'id','capa');
    this._el_20 = this.renderer.createElement(this._el_19,'img',(null as any));
    this.renderer.setElementAttribute(this._el_20,'src','assets/img/capa.jpg');
    this._text_21 = this.renderer.createText((null as any),'\n\n    ',(null as any));
    this._anchor_22 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_22 = new import2.AppElement(22,17,this,this._anchor_22);
    this._TemplateRef_22_5 = new import34.TemplateRef_(this._appEl_22,viewFactory_PerfilPage1);
    this._NgIf_22_6 = new import22.NgIf(this._appEl_22.vcRef,this._TemplateRef_22_5);
    this._text_23 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._anchor_24 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_24 = new import2.AppElement(24,17,this,this._anchor_24);
    this._TemplateRef_24_5 = new import34.TemplateRef_(this._appEl_24,viewFactory_PerfilPage2);
    this._NgIf_24_6 = new import22.NgIf(this._appEl_24.vcRef,this._TemplateRef_24_5);
    this._text_25 = this.renderer.createText((null as any),'\n\n    ',(null as any));
    this._el_26 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_26,'class','perfilInfo');
    this._text_27 = this.renderer.createText(this._el_26,'\n\n        ',(null as any));
    this._el_28 = this.renderer.createElement(this._el_26,'hr',(null as any));
    this.renderer.setElementAttribute(this._el_28,'class','linhaSeparadoraPerfil');
    this._text_29 = this.renderer.createText(this._el_26,'\n\n        ',(null as any));
    this._el_30 = this.renderer.createElement(this._el_26,'div',(null as any));
    this.renderer.setElementAttribute(this._el_30,'id','nomePerfil');
    this._text_31 = this.renderer.createText(this._el_30,'\n            ',(null as any));
    this._el_32 = this.renderer.createElement(this._el_30,'h1',(null as any));
    this._text_33 = this.renderer.createText(this._el_32,'',(null as any));
    this._text_34 = this.renderer.createText(this._el_30,'\n        ',(null as any));
    this._text_35 = this.renderer.createText(this._el_26,'\n\n        ',(null as any));
    this._el_36 = this.renderer.createElement(this._el_26,'hr',(null as any));
    this.renderer.setElementAttribute(this._el_36,'class','linhaSeparadoraPerfil');
    this._text_37 = this.renderer.createText(this._el_26,'\n\n        ',(null as any));
    this._el_38 = this.renderer.createElement(this._el_26,'br',(null as any));
    this._text_39 = this.renderer.createText(this._el_26,'\n\n        ',(null as any));
    this._el_40 = this.renderer.createElement(this._el_26,'div',(null as any));
    this.renderer.setElementAttribute(this._el_40,'id','nomeperfil');
    this._text_41 = this.renderer.createText(this._el_40,'\n            ',(null as any));
    this._el_42 = this.renderer.createElement(this._el_40,'h2',(null as any));
    this._text_43 = this.renderer.createText(this._el_42,'',(null as any));
    this._text_44 = this.renderer.createText(this._el_40,'\n        ',(null as any));
    this._text_45 = this.renderer.createText(this._el_26,'\n\n        ',(null as any));
    this._el_46 = this.renderer.createElement(this._el_26,'div',(null as any));
    this.renderer.setElementAttribute(this._el_46,'id','sexoperfil');
    this._text_47 = this.renderer.createText(this._el_46,'\n            ',(null as any));
    this._el_48 = this.renderer.createElement(this._el_46,'h2',(null as any));
    this._text_49 = this.renderer.createText(this._el_48,'',(null as any));
    this._text_50 = this.renderer.createText(this._el_46,'\n        ',(null as any));
    this._text_51 = this.renderer.createText(this._el_26,'\n\n        ',(null as any));
    this._anchor_52 = this.renderer.createTemplateAnchor(this._el_26,(null as any));
    this._appEl_52 = new import2.AppElement(52,26,this,this._anchor_52);
    this._TemplateRef_52_5 = new import34.TemplateRef_(this._appEl_52,viewFactory_PerfilPage3);
    this._NgIf_52_6 = new import22.NgIf(this._appEl_52.vcRef,this._TemplateRef_52_5);
    this._text_53 = this.renderer.createText(this._el_26,'\n\n        ',(null as any));
    this._el_54 = this.renderer.createElement(this._el_26,'div',(null as any));
    this.renderer.setElementAttribute(this._el_54,'id','estadoCivil');
    this._text_55 = this.renderer.createText(this._el_54,'\n            ',(null as any));
    this._el_56 = this.renderer.createElement(this._el_54,'h2',(null as any));
    this._text_57 = this.renderer.createText(this._el_56,'',(null as any));
    this._text_58 = this.renderer.createText(this._el_54,'\n        ',(null as any));
    this._text_59 = this.renderer.createText(this._el_26,'\n\n        ',(null as any));
    this._el_60 = this.renderer.createElement(this._el_26,'div',(null as any));
    this.renderer.setElementAttribute(this._el_60,'id','contato');
    this._text_61 = this.renderer.createText(this._el_60,'\n            ',(null as any));
    this._el_62 = this.renderer.createElement(this._el_60,'h2',(null as any));
    this._text_63 = this.renderer.createText(this._el_62,'',(null as any));
    this._text_64 = this.renderer.createText(this._el_60,'\n            ',(null as any));
    this._el_65 = this.renderer.createElement(this._el_60,'h2',(null as any));
    this._text_66 = this.renderer.createText(this._el_65,'',(null as any));
    this._text_67 = this.renderer.createText(this._el_60,'\n        ',(null as any));
    this._text_68 = this.renderer.createText(this._el_26,'\n\n        ',(null as any));
    this._anchor_69 = this.renderer.createTemplateAnchor(this._el_26,(null as any));
    this._appEl_69 = new import2.AppElement(69,26,this,this._anchor_69);
    this._TemplateRef_69_5 = new import34.TemplateRef_(this._appEl_69,viewFactory_PerfilPage4);
    this._NgIf_69_6 = new import22.NgIf(this._appEl_69.vcRef,this._TemplateRef_69_5);
    this._text_70 = this.renderer.createText(this._el_26,'\n\n    ',(null as any));
    this._text_71 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_17.create(this._Content_17_4,[
      [],
      [].concat([
        this._text_18,
        this._el_19,
        this._text_21,
        this._appEl_22,
        this._text_23,
        this._appEl_24,
        this._text_25,
        this._el_26,
        this._text_71
      ]
      ),
      []
    ]
    ,(null as any));
    this._text_72 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_9,'click',this.eventHandler(this._handle_click_9_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this._expr_11 = import7.UNINITIALIZED;
    this._expr_12 = import7.UNINITIALIZED;
    this._expr_13 = import7.UNINITIALIZED;
    this._expr_14 = import7.UNINITIALIZED;
    this._expr_15 = import7.UNINITIALIZED;
    this._expr_16 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._el_20,
      this._text_21,
      this._anchor_22,
      this._text_23,
      this._anchor_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._el_32,
      this._text_33,
      this._text_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._el_38,
      this._text_39,
      this._el_40,
      this._text_41,
      this._el_42,
      this._text_43,
      this._text_44,
      this._text_45,
      this._el_46,
      this._text_47,
      this._el_48,
      this._text_49,
      this._text_50,
      this._text_51,
      this._anchor_52,
      this._text_53,
      this._el_54,
      this._text_55,
      this._el_56,
      this._text_57,
      this._text_58,
      this._text_59,
      this._el_60,
      this._text_61,
      this._el_62,
      this._text_63,
      this._text_64,
      this._el_65,
      this._text_66,
      this._text_67,
      this._text_68,
      this._anchor_69,
      this._text_70,
      this._text_71,
      this._text_72
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4; }
    if (((token === import20.Icon) && (11 === requestNodeIndex))) { return this._Icon_11_3; }
    if (((token === import19.Button) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._Button_9_4; }
    if (((token === import17.ToolbarItem) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._ToolbarItem_7_3; }
    if (((token === import15.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._Navbar_2_4; }
    if (((token === import14.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._Header_0_3; }
    if (((token === import34.TemplateRef) && (22 === requestNodeIndex))) { return this._TemplateRef_22_5; }
    if (((token === import22.NgIf) && (22 === requestNodeIndex))) { return this._NgIf_22_6; }
    if (((token === import34.TemplateRef) && (24 === requestNodeIndex))) { return this._TemplateRef_24_5; }
    if (((token === import22.NgIf) && (24 === requestNodeIndex))) { return this._NgIf_24_6; }
    if (((token === import34.TemplateRef) && (52 === requestNodeIndex))) { return this._TemplateRef_52_5; }
    if (((token === import22.NgIf) && (52 === requestNodeIndex))) { return this._NgIf_52_6; }
    if (((token === import34.TemplateRef) && (69 === requestNodeIndex))) { return this._TemplateRef_69_5; }
    if (((token === import22.NgIf) && (69 === requestNodeIndex))) { return this._NgIf_69_6; }
    if (((token === import21.Content) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 71)))) { return this._Content_17_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4:any = 'settings';
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._Icon_11_3.name = currVal_4;
      this._expr_4 = currVal_4;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_17_4.ngOnInit(); }
    const currVal_7:any = (this.context.usuario.fotoProfile != (null as any));
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._NgIf_22_6.ngIf = currVal_7;
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = (this.context.usuario.fotoProfile == (null as any));
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._NgIf_24_6.ngIf = currVal_8;
      this._expr_8 = currVal_8;
    }
    const currVal_12:any = (this.context.usuario.idade != (null as any));
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this._NgIf_52_6.ngIf = currVal_12;
      this._expr_12 = currVal_12;
    }
    const currVal_16:any = (this.context.usuario.cidade != (null as any));
    if (import4.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this._NgIf_69_6.ngIf = currVal_16;
      this._expr_16 = currVal_16;
    }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_7_0.dirty) {
        this._query_Button_7_0.reset([this._Button_9_4]);
        this._ToolbarItem_7_3._buttons = this._query_Button_7_0;
        this._query_Button_7_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Button_9_4.ngAfterContentInit(); }
    }
    const currVal_0:any = this._Navbar_2_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_2_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import4.interpolate(1,'',this.context.usuario.username,'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_5,currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_5:any = this._Icon_11_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_11,'hide',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._Content_17_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_17,'statusbar-padding',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_9:any = import4.interpolate(1,'',this.context.usuario.username,'');
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setText(this._text_33,currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = import4.interpolate(2,'',this.context.usuario.nome,' ',this.context.usuario.ultimoNome,'');
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setText(this._text_43,currVal_10);
      this._expr_10 = currVal_10;
    }
    const currVal_11:any = import4.interpolate(1,'',this.context.usuario.sexo,'');
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setText(this._text_49,currVal_11);
      this._expr_11 = currVal_11;
    }
    const currVal_13:any = import4.interpolate(1,'',this.context.usuario.estadoCivil,'');
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setText(this._text_57,currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = import4.interpolate(1,'',this.context.usuario.email,'');
    if (import4.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setText(this._text_63,currVal_14);
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = import4.interpolate(1,'',this.context.usuario.celular,'');
    if (import4.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setText(this._text_66,currVal_15);
      this._expr_15 = currVal_15;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Icon_11_3.ngOnDestroy();
    this._Content_17_4.ngOnDestroy();
  }
  private _handle_click_9_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.editar()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_PerfilPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.PerfilPage> {
  if ((renderType_PerfilPage === (null as any))) { (renderType_PerfilPage = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,styles_PerfilPage,{})); }
  return new _View_PerfilPage0(viewUtils,parentInjector,declarationEl);
}
class _View_PerfilPage1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PerfilPage1,renderType_PerfilPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'img',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','imagemPerfil');
    this._expr_0 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.parent.context.usuario.fotoProfile,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_0,'src',this.viewUtils.sanitizer.sanitize(import35.SecurityContext.URL,currVal_0));
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_PerfilPage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PerfilPage1(viewUtils,parentInjector,declarationEl);
}
class _View_PerfilPage2 extends import1.AppView<any> {
  _el_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PerfilPage2,renderType_PerfilPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'img',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','imagemPerfil');
    this.renderer.setElementAttribute(this._el_0,'src','http://www.iconsfind.com/wp-content/uploads/2015/11/20151112_5643f331cf8c4.png');
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return (null as any);
  }
}
function viewFactory_PerfilPage2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PerfilPage2(viewUtils,parentInjector,declarationEl);
}
class _View_PerfilPage3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PerfilPage3,renderType_PerfilPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'id','idade');
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'h2',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.parent.context.usuario.idade,' anos');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_PerfilPage3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PerfilPage3(viewUtils,parentInjector,declarationEl);
}
class _View_PerfilPage4 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PerfilPage4,renderType_PerfilPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'id','contato');
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'h2',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(3,'',this.parent.context.usuario.cidade,', ',this.parent.context.usuario.estado,', ',this.parent.context.usuario.pais,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_PerfilPage4(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PerfilPage4(viewUtils,parentInjector,declarationEl);
}