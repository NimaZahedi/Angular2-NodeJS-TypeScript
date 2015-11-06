import {Component, bootstrap} from "angular2/angular2";
import {Http, HTTP_PROVIDERS} from "angular2/http";

@Component({
  selector: 'my-app',
  template: '{{message}}',
  viewProviders: [HTTP_PROVIDERS]
})

export class MyApp {
  public message;
  constructor(http: Http) {
    this.message = '...';
    console.log(1);
    http.get("http://localhost:3000/api/test")
      .subscribe(res => {
        var result = res.json();
        this.message = result.message;
      });
  }
}

bootstrap(MyApp);
