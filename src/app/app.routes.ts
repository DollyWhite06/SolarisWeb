import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SolarisComponent } from './solaris/solaris.component';
import { GranosSolarisComponent } from './granos-solaris/granos-solaris.component';

export const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'contacto', component: ContactoComponent},
{path: 'Solaris', component: SolarisComponent},
{path: 'GranosSolaris', component: GranosSolarisComponent}


];
