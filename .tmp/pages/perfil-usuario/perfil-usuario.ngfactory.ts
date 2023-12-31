/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../services/AmizadeService';
import * as import4 from './perfil-usuario';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/http/src/http';
import * as import10 from 'ionic-angular/navigation/nav-controller';
import * as import11 from 'ionic-angular/navigation/nav-params';
import * as import12 from 'ionic-angular/components/popover/popover';
import * as import13 from '@angular/core/src/metadata/view';
import * as import14 from '@angular/core/src/linker/component_factory';
import * as import15 from 'ionic-angular/components/toolbar/toolbar';
import * as import16 from 'ionic-angular/components/navbar/navbar';
import * as import17 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import18 from 'ionic-angular/components/content/content';
import * as import19 from '@angular/common/src/directives/ng_if';
import * as import20 from 'ionic-angular/components/icon/icon';
import * as import21 from 'ionic-angular/config/config';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from 'ionic-angular/navigation/view-controller';
import * as import24 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import25 from 'ionic-angular/components/app/app';
import * as import26 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import27 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import28 from 'ionic-angular/util/keyboard';
import * as import29 from '@angular/core/src/zone/ng_zone';
import * as import30 from 'ionic-angular/components/tabs/tabs';
import * as import31 from '@angular/core/src/linker/template_ref';
import * as import32 from '@angular/core/src/security';
var renderType_PerfilUsuarioPage_Host:import0.RenderComponentType = (null as any);
class _View_PerfilUsuarioPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _AmizadeService_0_4:import3.AmizadeService;
  _PerfilUsuarioPage_0_5:import4.PerfilUsuarioPage;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_PerfilUsuarioPage_Host0,renderType_PerfilUsuarioPage_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_PerfilUsuarioPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AmizadeService_0_4 = new import3.AmizadeService(this.parentInjector.get(import9.Http));
    this._PerfilUsuarioPage_0_5 = new import4.PerfilUsuarioPage(this.parentInjector.get(import10.NavController),this.parentInjector.get(import11.NavParams),this._AmizadeService_0_4,this.parentInjector.get(import12.PopoverController));
    this._appEl_0.initComponent(this._PerfilUsuarioPage_0_5,[],compView_0);
    compView_0.create(this._PerfilUsuarioPage_0_5,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.AmizadeService) && (0 === requestNodeIndex))) { return this._AmizadeService_0_4; }
    if (((token === import4.PerfilUsuarioPage) && (0 === requestNodeIndex))) { return this._PerfilUsuarioPage_0_5; }
    return notFoundResult;
  }
}
function viewFactory_PerfilUsuarioPage_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_PerfilUsuarioPage_Host === (null as any))) { (renderType_PerfilUsuarioPage_Host = viewUtils.createRenderComponentType('',0,import13.ViewEncapsulation.None,[],{})); }
  return new _View_PerfilUsuarioPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const PerfilUsuarioPageNgFactory:import14.ComponentFactory<import4.PerfilUsuarioPage> = new import14.ComponentFactory<import4.PerfilUsuarioPage>('ng-component',viewFactory_PerfilUsuarioPage_Host0,import4.PerfilUsuarioPage);
const styles_PerfilUsuarioPage:any[] = [];
var renderType_PerfilUsuarioPage:import0.RenderComponentType = (null as any);
class _View_PerfilUsuarioPage0 extends import1.AppView<import4.PerfilUsuarioPage> {
  _el_0:any;
  _Header_0_3:import15.Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Navbar_2_4:import16.Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _ToolbarTitle_4_4:import17.ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _Content_9_4:import18.Content;
  _text_10:any;
  _el_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _anchor_16:any;
  /*private*/ _appEl_16:import2.AppElement;
  _TemplateRef_16_5:any;
  _NgIf_16_6:import19.NgIf;
  _text_17:any;
  _anchor_18:any;
  /*private*/ _appEl_18:import2.AppElement;
  _TemplateRef_18_5:any;
  _NgIf_18_6:import19.NgIf;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _el_22:any;
  _Icon_22_3:import20.Icon;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _el_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _text_33:any;
  _text_34:any;
  _el_35:any;
  _text_36:any;
  _el_37:any;
  _text_38:any;
  _el_39:any;
  _text_40:any;
  _el_41:any;
  _text_42:any;
  _text_43:any;
  _text_44:any;
  _el_45:any;
  _text_46:any;
  _el_47:any;
  _text_48:any;
  _text_49:any;
  _text_50:any;
  _anchor_51:any;
  /*private*/ _appEl_51:import2.AppElement;
  _TemplateRef_51_5:any;
  _NgIf_51_6:import19.NgIf;
  _text_52:any;
  _el_53:any;
  _text_54:any;
  _el_55:any;
  _text_56:any;
  _text_57:any;
  _text_58:any;
  _el_59:any;
  _text_60:any;
  _el_61:any;
  _text_62:any;
  _text_63:any;
  _el_64:any;
  _text_65:any;
  _text_66:any;
  _text_67:any;
  _anchor_68:any;
  /*private*/ _appEl_68:import2.AppElement;
  _TemplateRef_68_5:any;
  _NgIf_68_6:import19.NgIf;
  _text_69:any;
  _text_70:any;
  _text_71:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
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
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_PerfilUsuarioPage0,renderType_PerfilUsuarioPage,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import15.Header(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import23.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this.renderer.setElementAttribute(this._el_2,'dark','');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import24.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import16.Navbar(this.parentInjector.get(import25.App),this.parentInjector.get(import23.ViewController,(null as any)),this.parentInjector.get(import10.NavController,(null as any)),this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4,[],compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import2.AppElement(4,2,this,this._el_4);
    var compView_4:any = import26.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import17.ToolbarTitle(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import15.Toolbar,(null as any)),this._Navbar_2_4);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4,[],compView_4);
    this._text_5 = this.renderer.createText((null as any),'',(null as any));
    compView_4.create(this._ToolbarTitle_4_4,[[].concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4,[
      [],
      [],
      [],
      [].concat([
        this._text_3,
        this._el_4,
        this._text_6
      ]
      )
    ]
    ,(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','perfil');
    this._appEl_9 = new import2.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import27.viewFactory_Content0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Content_9_4 = new import18.Content(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import25.App),this.parentInjector.get(import28.Keyboard),this.parentInjector.get(import29.NgZone),this.parentInjector.get(import23.ViewController,(null as any)),this.parentInjector.get(import30.Tabs,(null as any)));
    this._appEl_9.initComponent(this._Content_9_4,[],compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n\n    ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_11,'id','capa');
    this._el_12 = this.renderer.createElement(this._el_11,'img',(null as any));
    this.renderer.setElementAttribute(this._el_12,'src','assets/img/capa.jpg');
    this._text_13 = this.renderer.createText((null as any),'\n\n    ',(null as any));
    this._el_14 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_14,'class','botaoOverlay');
    this._text_15 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._anchor_16 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_16 = new import2.AppElement(16,9,this,this._anchor_16);
    this._TemplateRef_16_5 = new import31.TemplateRef_(this._appEl_16,viewFactory_PerfilUsuarioPage1);
    this._NgIf_16_6 = new import19.NgIf(this._appEl_16.vcRef,this._TemplateRef_16_5);
    this._text_17 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._anchor_18 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_18 = new import2.AppElement(18,9,this,this._anchor_18);
    this._TemplateRef_18_5 = new import31.TemplateRef_(this._appEl_18,viewFactory_PerfilUsuarioPage2);
    this._NgIf_18_6 = new import19.NgIf(this._appEl_18.vcRef,this._TemplateRef_18_5);
    this._text_19 = this.renderer.createText((null as any),'\n\n\n    ',(null as any));
    this._el_20 = this.renderer.createElement((null as any),'a',(null as any));
    this.renderer.setElementAttribute(this._el_20,'href','#');
    this._text_21 = this.renderer.createText(this._el_20,'\n        ',(null as any));
    this._el_22 = this.renderer.createElement(this._el_20,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_22,'class','botao botaoAdd');
    this.renderer.setElementAttribute(this._el_22,'name','add-circle');
    this.renderer.setElementAttribute(this._el_22,'role','img');
    this._Icon_22_3 = new import20.Icon(this.parentInjector.get(import21.Config),new import22.ElementRef(this._el_22),this.renderer);
    this._text_23 = this.renderer.createText(this._el_20,'\n    ',(null as any));
    this._text_24 = this.renderer.createText((null as any),'\n\n    ',(null as any));
    this._el_25 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_25,'class','perfilInfo');
    this._text_26 = this.renderer.createText(this._el_25,'\n\n        ',(null as any));
    this._el_27 = this.renderer.createElement(this._el_25,'hr',(null as any));
    this.renderer.setElementAttribute(this._el_27,'class','linhaSeparadoraPerfil');
    this._text_28 = this.renderer.createText(this._el_25,'\n\n        ',(null as any));
    this._el_29 = this.renderer.createElement(this._el_25,'div',(null as any));
    this.renderer.setElementAttribute(this._el_29,'id','nomePerfil');
    this._text_30 = this.renderer.createText(this._el_29,'\n            ',(null as any));
    this._el_31 = this.renderer.createElement(this._el_29,'h1',(null as any));
    this._text_32 = this.renderer.createText(this._el_31,'',(null as any));
    this._text_33 = this.renderer.createText(this._el_29,'\n        ',(null as any));
    this._text_34 = this.renderer.createText(this._el_25,'\n\n        ',(null as any));
    this._el_35 = this.renderer.createElement(this._el_25,'hr',(null as any));
    this.renderer.setElementAttribute(this._el_35,'class','linhaSeparadoraPerfil');
    this._text_36 = this.renderer.createText(this._el_25,'\n\n        ',(null as any));
    this._el_37 = this.renderer.createElement(this._el_25,'br',(null as any));
    this._text_38 = this.renderer.createText(this._el_25,'\n\n        ',(null as any));
    this._el_39 = this.renderer.createElement(this._el_25,'div',(null as any));
    this.renderer.setElementAttribute(this._el_39,'id','nomeperfil');
    this._text_40 = this.renderer.createText(this._el_39,'\n            ',(null as any));
    this._el_41 = this.renderer.createElement(this._el_39,'h2',(null as any));
    this._text_42 = this.renderer.createText(this._el_41,'',(null as any));
    this._text_43 = this.renderer.createText(this._el_39,'\n        ',(null as any));
    this._text_44 = this.renderer.createText(this._el_25,'\n\n        ',(null as any));
    this._el_45 = this.renderer.createElement(this._el_25,'div',(null as any));
    this.renderer.setElementAttribute(this._el_45,'id','sexoperfil');
    this._text_46 = this.renderer.createText(this._el_45,'\n            ',(null as any));
    this._el_47 = this.renderer.createElement(this._el_45,'h2',(null as any));
    this._text_48 = this.renderer.createText(this._el_47,'',(null as any));
    this._text_49 = this.renderer.createText(this._el_45,'\n        ',(null as any));
    this._text_50 = this.renderer.createText(this._el_25,'\n\n        ',(null as any));
    this._anchor_51 = this.renderer.createTemplateAnchor(this._el_25,(null as any));
    this._appEl_51 = new import2.AppElement(51,25,this,this._anchor_51);
    this._TemplateRef_51_5 = new import31.TemplateRef_(this._appEl_51,viewFactory_PerfilUsuarioPage3);
    this._NgIf_51_6 = new import19.NgIf(this._appEl_51.vcRef,this._TemplateRef_51_5);
    this._text_52 = this.renderer.createText(this._el_25,'\n\n        ',(null as any));
    this._el_53 = this.renderer.createElement(this._el_25,'div',(null as any));
    this.renderer.setElementAttribute(this._el_53,'id','estadoCivil');
    this._text_54 = this.renderer.createText(this._el_53,'\n            ',(null as any));
    this._el_55 = this.renderer.createElement(this._el_53,'h2',(null as any));
    this._text_56 = this.renderer.createText(this._el_55,'',(null as any));
    this._text_57 = this.renderer.createText(this._el_53,'\n        ',(null as any));
    this._text_58 = this.renderer.createText(this._el_25,'\n\n        ',(null as any));
    this._el_59 = this.renderer.createElement(this._el_25,'div',(null as any));
    this.renderer.setElementAttribute(this._el_59,'id','contato');
    this._text_60 = this.renderer.createText(this._el_59,'\n            ',(null as any));
    this._el_61 = this.renderer.createElement(this._el_59,'h2',(null as any));
    this._text_62 = this.renderer.createText(this._el_61,'',(null as any));
    this._text_63 = this.renderer.createText(this._el_59,'\n            ',(null as any));
    this._el_64 = this.renderer.createElement(this._el_59,'h2',(null as any));
    this._text_65 = this.renderer.createText(this._el_64,'',(null as any));
    this._text_66 = this.renderer.createText(this._el_59,'\n        ',(null as any));
    this._text_67 = this.renderer.createText(this._el_25,'\n\n        ',(null as any));
    this._anchor_68 = this.renderer.createTemplateAnchor(this._el_25,(null as any));
    this._appEl_68 = new import2.AppElement(68,25,this,this._anchor_68);
    this._TemplateRef_68_5 = new import31.TemplateRef_(this._appEl_68,viewFactory_PerfilUsuarioPage4);
    this._NgIf_68_6 = new import19.NgIf(this._appEl_68.vcRef,this._TemplateRef_68_5);
    this._text_69 = this.renderer.createText(this._el_25,'\n\n    ',(null as any));
    this._text_70 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_9.create(this._Content_9_4,[
      [],
      [].concat([
        this._text_10,
        this._el_11,
        this._text_13,
        this._el_14,
        this._text_15,
        this._appEl_16,
        this._text_17,
        this._appEl_18,
        this._text_19,
        this._el_20,
        this._text_24,
        this._el_25,
        this._text_70
      ]
      ),
      []
    ]
    ,(null as any));
    this._text_71 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import8.UNINITIALIZED;
    this._expr_1 = import8.UNINITIALIZED;
    this._expr_2 = import8.UNINITIALIZED;
    this._expr_3 = import8.UNINITIALIZED;
    this._expr_4 = import8.UNINITIALIZED;
    this._expr_5 = import8.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_20,'click',this.eventHandler(this._handle_click_20_0.bind(this)));
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
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._anchor_16,
      this._text_17,
      this._anchor_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._el_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._text_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._el_39,
      this._text_40,
      this._el_41,
      this._text_42,
      this._text_43,
      this._text_44,
      this._el_45,
      this._text_46,
      this._el_47,
      this._text_48,
      this._text_49,
      this._text_50,
      this._anchor_51,
      this._text_52,
      this._el_53,
      this._text_54,
      this._el_55,
      this._text_56,
      this._text_57,
      this._text_58,
      this._el_59,
      this._text_60,
      this._el_61,
      this._text_62,
      this._text_63,
      this._el_64,
      this._text_65,
      this._text_66,
      this._text_67,
      this._anchor_68,
      this._text_69,
      this._text_70,
      this._text_71
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4; }
    if (((token === import16.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4; }
    if (((token === import15.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3; }
    if (((token === import31.TemplateRef) && (16 === requestNodeIndex))) { return this._TemplateRef_16_5; }
    if (((token === import19.NgIf) && (16 === requestNodeIndex))) { return this._NgIf_16_6; }
    if (((token === import31.TemplateRef) && (18 === requestNodeIndex))) { return this._TemplateRef_18_5; }
    if (((token === import19.NgIf) && (18 === requestNodeIndex))) { return this._NgIf_18_6; }
    if (((token === import20.Icon) && (22 === requestNodeIndex))) { return this._Icon_22_3; }
    if (((token === import31.TemplateRef) && (51 === requestNodeIndex))) { return this._TemplateRef_51_5; }
    if (((token === import19.NgIf) && (51 === requestNodeIndex))) { return this._NgIf_51_6; }
    if (((token === import31.TemplateRef) && (68 === requestNodeIndex))) { return this._TemplateRef_68_5; }
    if (((token === import19.NgIf) && (68 === requestNodeIndex))) { return this._NgIf_68_6; }
    if (((token === import18.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 70)))) { return this._Content_9_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_9_4.ngOnInit(); }
    const currVal_4:any = (this.context.usuario.fotoProfile != (null as any));
    if (import5.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_16_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = (this.context.usuario.fotoProfile == (null as any));
    if (import5.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this._NgIf_18_6.ngIf = currVal_5;
      this._expr_5 = currVal_5;
    }
    const currVal_7:any = 'add-circle';
    if (import5.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._Icon_22_3.name = currVal_7;
      this._expr_7 = currVal_7;
    }
    const currVal_12:any = (this.context.usuario.idade != (null as any));
    if (import5.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this._NgIf_51_6.ngIf = currVal_12;
      this._expr_12 = currVal_12;
    }
    const currVal_16:any = (this.context.usuario.cidade != (null as any));
    if (import5.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this._NgIf_68_6.ngIf = currVal_16;
      this._expr_16 = currVal_16;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._Navbar_2_4._hidden;
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_2_4._sbPadding;
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import5.interpolate(1,'',this.context.usuario.username,'');
    if (import5.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_5,currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this._Content_9_4._sbPadding;
    if (import5.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_9,'statusbar-padding',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_8:any = this._Icon_22_3._hidden;
    if (import5.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_22,'hide',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = import5.interpolate(1,'',this.context.usuario.username,'');
    if (import5.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setText(this._text_32,currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = import5.interpolate(2,'',this.context.usuario.nome,' ',this.context.usuario.ultimoNome,'');
    if (import5.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setText(this._text_42,currVal_10);
      this._expr_10 = currVal_10;
    }
    const currVal_11:any = import5.interpolate(1,'',this.context.usuario.sexo,'');
    if (import5.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setText(this._text_48,currVal_11);
      this._expr_11 = currVal_11;
    }
    const currVal_13:any = import5.interpolate(1,'',this.context.usuario.estadoCivil,'');
    if (import5.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setText(this._text_56,currVal_13);
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = import5.interpolate(1,'',this.context.usuario.email,'');
    if (import5.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setText(this._text_62,currVal_14);
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = import5.interpolate(1,'',this.context.usuario.celular,'');
    if (import5.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setText(this._text_65,currVal_15);
      this._expr_15 = currVal_15;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Icon_22_3.ngOnDestroy();
    this._Content_9_4.ngOnDestroy();
  }
  private _handle_click_20_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.presentPopover($event)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_PerfilUsuarioPage0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<import4.PerfilUsuarioPage> {
  if ((renderType_PerfilUsuarioPage === (null as any))) { (renderType_PerfilUsuarioPage = viewUtils.createRenderComponentType('',0,import13.ViewEncapsulation.None,styles_PerfilUsuarioPage,{})); }
  return new _View_PerfilUsuarioPage0(viewUtils,parentInjector,declarationEl);
}
class _View_PerfilUsuarioPage1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_PerfilUsuarioPage1,renderType_PerfilUsuarioPage,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'img',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','imagemPerfil');
    this._expr_0 = import8.UNINITIALIZED;
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import5.interpolate(1,'',this.parent.context.usuario.fotoProfile,'');
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_0,'src',this.viewUtils.sanitizer.sanitize(import32.SecurityContext.URL,currVal_0));
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_PerfilUsuarioPage1(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PerfilUsuarioPage1(viewUtils,parentInjector,declarationEl);
}
class _View_PerfilUsuarioPage2 extends import1.AppView<any> {
  _el_0:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_PerfilUsuarioPage2,renderType_PerfilUsuarioPage,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'img',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','imagemPerfil');
    this.renderer.setElementAttribute(this._el_0,'src','http://www.iconsfind.com/wp-content/uploads/2015/11/20151112_5643f331cf8c4.png');
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return (null as any);
  }
}
function viewFactory_PerfilUsuarioPage2(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PerfilUsuarioPage2(viewUtils,parentInjector,declarationEl);
}
class _View_PerfilUsuarioPage3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_PerfilUsuarioPage3,renderType_PerfilUsuarioPage,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'id','idade');
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'h2',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._expr_0 = import8.UNINITIALIZED;
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
    const currVal_0:any = import5.interpolate(1,'',this.parent.context.usuario.idade,' anos');
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_PerfilUsuarioPage3(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PerfilUsuarioPage3(viewUtils,parentInjector,declarationEl);
}
class _View_PerfilUsuarioPage4 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_PerfilUsuarioPage4,renderType_PerfilUsuarioPage,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'id','contato');
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'h2',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._expr_0 = import8.UNINITIALIZED;
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
    const currVal_0:any = import5.interpolate(3,'',this.parent.context.usuario.cidade,', ',this.parent.context.usuario.estado,', ',this.parent.context.usuario.pais,'');
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_PerfilUsuarioPage4(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PerfilUsuarioPage4(viewUtils,parentInjector,declarationEl);
}