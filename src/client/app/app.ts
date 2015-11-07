import {provide, Component, bootstrap} from "angular2/angular2";
import {ROUTER_PROVIDERS,
        Route,
        HashLocationStrategy,
        LocationStrategy, 
        Router, 
        RouterLink, 
        RouteConfig, 
        RouterOutlet} from "angular2/router";

import {Dashboard} from "./components/dashboard/dashboard";

@Component({
  selector: 'my-app',
  templateUrl: "./client/app/home.html",
  directives: [RouterOutlet, RouterLink]
})

@RouteConfig([
  new Route({ path: "/dashboard", component: Dashboard, as: "Dashboard" })
])

export class MyApp {
}

bootstrap(MyApp, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);