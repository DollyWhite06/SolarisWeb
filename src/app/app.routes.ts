import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SolarisComponent } from './solaris/solaris.component';
import { ProductosComponent } from './productos/productos.component';
export const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'contacto', component: ContactoComponent},
{path: 'solaris', component: SolarisComponent},
{path: 'productos', component: ProductosComponent}


];
