// src/app/app.component.ts
import { Component } from '@angular/core';
import { HomeComponent } from './component/HomeComponent/HomeComponent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica Ali';
}
