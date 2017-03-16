import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	template: `
				<div class="container-fluid">
					<div class="row">
						<div class="col-xs-12">
							<h1>{{title}}</h1>
							<nav>
								<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
								<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
							</nav>
							<router-outlet></router-outlet>
						</div>
					</div>
				</div>
	`,
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Tour of Heroes';
}