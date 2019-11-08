import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class ServerResolver implements Resolve<{id: number, name:string ,status:string}> {
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable{

	}
}