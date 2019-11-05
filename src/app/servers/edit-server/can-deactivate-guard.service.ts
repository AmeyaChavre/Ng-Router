import { Observable } from 'rxjs/observable';

export interface CanComponenentDeactivate {
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}