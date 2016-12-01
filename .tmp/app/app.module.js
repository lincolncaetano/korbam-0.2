import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { EsqueceuSenhaPage } from '../pages/esqueceu-senha/esqueceu-senha';
import { TokenPage } from '../pages/token/token';
import { TabsPage } from '../pages/tabs/tabs';
import { FeedPage } from '../pages/feed/feed';
import { PopoverPage } from '../pages/perfil-usuario/popover';
import { PerfilUsuarioPage } from '../pages/perfil-usuario/perfil-usuario';
import { AgendaPage } from '../pages/agenda/agenda';
import { PerfilPage } from '../pages/perfil/perfil';
import { NotificacoesPage } from '../pages/notificacoes/notificacoes';
import { ListaGruposPage } from '../pages/lista-grupos/lista-grupos';
import { CadastrarEventoPage } from '../pages/cadastrar-evento/cadastrar-evento';
import { EventoPage } from '../pages/evento/evento';
import { UsuarioEventoPage } from '../pages/usuario-evento/usuario-evento';
import { CadastrarGrupoPage } from '../pages/cadastrar-grupo/cadastrar-grupo';
import { GrupoPage } from '../pages/grupo/grupo';
import { UsuarioGrupoPage } from '../pages/usuario-grupo/usuario-grupo';
import { EditarPerfilPage } from '../pages/editar-perfil/editar-perfil';
import { UserData } from '../services/user-data';
import { UsuarioService } from '../services/UsuarioService';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MyApp,
                        AboutPage,
                        HomePage,
                        CadastroPage,
                        EsqueceuSenhaPage,
                        TokenPage,
                        TabsPage,
                        FeedPage,
                        AgendaPage,
                        PerfilPage,
                        NotificacoesPage,
                        ListaGruposPage,
                        CadastrarEventoPage,
                        EventoPage,
                        UsuarioEventoPage,
                        CadastrarGrupoPage,
                        GrupoPage,
                        UsuarioGrupoPage,
                        EditarPerfilPage,
                        PopoverPage,
                        PerfilUsuarioPage
                    ],
                    imports: [
                        IonicModule.forRoot(MyApp)
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        MyApp,
                        AboutPage,
                        HomePage,
                        CadastroPage,
                        EsqueceuSenhaPage,
                        TokenPage,
                        TabsPage,
                        FeedPage,
                        AgendaPage,
                        PerfilPage,
                        NotificacoesPage,
                        ListaGruposPage,
                        CadastrarEventoPage,
                        EventoPage,
                        UsuarioEventoPage,
                        CadastrarGrupoPage,
                        GrupoPage,
                        UsuarioGrupoPage,
                        EditarPerfilPage,
                        PopoverPage,
                        PerfilUsuarioPage
                    ],
                    providers: [UsuarioService, UserData, Storage]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
