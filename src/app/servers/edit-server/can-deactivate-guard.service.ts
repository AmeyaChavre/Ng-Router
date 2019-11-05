export interface CanComponenentDeactivate {
	canDeactivate() => Observable<boolean> | Promise<boolean> | boolean;
}