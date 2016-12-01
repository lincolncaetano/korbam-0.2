import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {ServerSettings} from './ServerSettings';

@Injectable()
export class EventoService {

  private headers: Headers;


  constructor(public http:Http) {

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  static get parameters(){
     return [[Http]];
  }

  buscaListaUsuarioPorEvento(idEvento): any{
    var url = ServerSettings.URL_SERVER+'/buscaListaUsuarioPorEvento/'+idEvento;
    return this.http.get(url).map(res => res.json());
  }

  salvarUsuarioEvento(usuarioEvento): any {
      var url = ServerSettings.URL_SERVER+'/salvarUsuarioEvento';
      return this.http.post(url, JSON.stringify({usuarioEvento : usuarioEvento}), {headers: this.headers}).map(res => res.json());
  }

  deteleUsuarioEvento(idUsuario, idEvento): any {
      var url = ServerSettings.URL_SERVER+'/deteleUsuarioEvento'+'/'+idUsuario+'/'+idEvento;
      return this.http.delete(url,{headers: this.headers}).map(res => res.json());
  }

  detelaEventoEvento(idEvento): any {
      var url = ServerSettings.URL_SERVER+'/detelaEvento'+'/'+idEvento;
      return this.http.delete(url,{headers: this.headers}).map(res => res.json());
  }

}
