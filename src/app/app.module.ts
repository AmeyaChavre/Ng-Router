import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RootGuardsComponent } from './root-guards/root-guards.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MiddleWareComponent } from './middle-ware/middle-ware.component';
import { RouteGuardBlockComponent } from './route-guard-block/route-guard-block.component';
import { InterfaceComponent } from './interface/interface.component';


const appRoutes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'users', component: UsersComponent },
 { path: 'users/:id', component: UserComponent },
 { path: 'servers', component: ServersComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    RootGuardsComponent,
    NotFoundComponent,
    MiddleWareComponent,
    RouteGuardBlockComponent,
    InterfaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
