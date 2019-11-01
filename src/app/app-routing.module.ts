import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';

const appRoutes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'users', component: UsersComponent , children: [
                                              { path: ':id/:name', component: UserComponent }
 ]},
 { path: 'servers', component: ServersComponent , children: [
                                                  { path: ':id', component: ServerComponent },
                                                  { path: ':id/edit', component: EditServerComponent }
 ]},

 { path: 'not-found', component: PageNotFoundComponent }, // not-found route should be 
 { path: '**', redirectTo: '/not-found'} // mentioned in the end as routes get parsed from top to bottom

];

@NgModule({

})

export class AppRoutingModule{

}