import {Component, View, bootstrap, provide} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ROUTE_NAMES, ROUTES} from './routes';


import {ROUTER_PROVIDERS} from 'angular2/router';

@Component({
	selector: 'my-app',
	template: `
	<form (submit)="login($event, username.value, password.value)">
	   <label for="username">Username</label>
	   <!-- Using #username, we can identify this input to get the value on the form's submit event -->
	   <input type="text" #username class="form-control" id="username" placeholder="Username">
	   <label for="password">Password</label>
	   <!-- Using #password we can identify this input to get its value -->
	   <input type="password" #password class="form-control" id="password" placeholder="Password">
	   <button type="submit">Submit</button>
	</form>
  `,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig(ROUTES)
export class AppComponent {

	constructor(public http: Http) {

	}
	

	login(event, username, password) {

		console.log("login butonu");

		var creds = "username=" + username + "&password=" + password;

/*
		this.http.post('http://localhost:3001/api/users', creds, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.map(res => res.json())
			.subscribe(
			data => console.log(data.id_token),
			err => this.logError(err),
			() => console.log('Authentication Complete')
			);*/

		// This will be called when the user clicks on the Login button
		/*event.preventDefault();

		// We call our API to log the user in. The username and password are entered by the user
		fetch('http://localhost:3001/sessions/create', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username, password
			})
		})
			.then(status)
			.then(json)
			.then((response) => {
				// Once we get the JWT in the response, we save it into localStorage
				localStorage.setItem('jwt', response.id_token);
				// and then we redirect the user to the home
				this.router.parent.navigate('/home');
			})
			.catch((error) => {
				alert(error.message);
				console.log(error.message);
			});*/
	}

	logError(err) {
		console.error('There was an error: ' + err);
	}
}

bootstrap(AppComponent, [
	ROUTER_PROVIDERS
]);
