import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-granos-solaris',
  imports: [],
  templateUrl: './granos-solaris.component.html',
  styleUrl: './granos-solaris.component.css'
})
export class GranosSolarisComponent {
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
