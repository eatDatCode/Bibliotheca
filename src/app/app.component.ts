import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Bibliotheca';

	// Navbar Toggler
	navbarOpen = false;

	toggleNavbar(){
		this.navbarOpen = !this.navbarOpen;
	}
}
