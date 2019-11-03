export class AuthService{
	loggedIn = false;

	isAuthenticated(){
		
	}

	login(){
		this.loggedIn = true;
	}

	logout(){
		this.loggedIn = false;
	}
}