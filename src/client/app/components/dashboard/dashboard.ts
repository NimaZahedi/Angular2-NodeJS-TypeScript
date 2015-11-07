import {Component} from "angular2/angular2";

@Component({
	selector: "dashboard",
	template: "dashboard.html"
})

export class Dashboard {
	public message;
	
	constructor() {
		this.message = "this is the dashboard!";	
	}
}
