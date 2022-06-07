import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  dataResponse = {
    email: null,
    name: null
  }


  getData(data: any) {
    this.dataResponse.email = data.email;
    this.dataResponse.name = data.name;
  }
}
