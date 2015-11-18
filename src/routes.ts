import {Route, RouteDefinition} from 'angular2/router';
import {AppComponent} from './app.component';

export const ROUTE_NAMES = {
	dashboard: 'Dashboard',
}

export const ROUTES: RouteDefinition[] = [
	{ path: '/',  component: AppComponent, as: 'login'}
];
