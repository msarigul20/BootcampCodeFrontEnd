import { Component } from '@angular/core';
//Html'in datasının yönetildiği yer component'dir.
//Java script'te ssl parantez obje demektir.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Mustafa Sarıgül';
}
