import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

interface Server {
	id: number,
}

export class ServerResolver implements Resolve<{id: number, name:string ,status:string}> {
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable <> {

	}
}