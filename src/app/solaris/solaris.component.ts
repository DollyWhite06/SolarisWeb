import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solaris',
  imports: [],
  templateUrl: './solaris.component.html',
  styleUrl: './solaris.component.css'
})
export class SolarisComponent {
  constructor(private router: Router) { }

  home() {
    this.router.navigate(['/home']);
  }

  GranosSolaris() {
    this.router.navigate(['/GranosSolaris']);
  }

  contacto() {
    this.router.navigate(['/contacto']);
  }

  Solaris() {
    this.router.navigate(['/Solaris']);
  }
}
