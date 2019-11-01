import { NgModule } from '@angular/core';

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