import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";import { MainComponent } from "./main/main.component";
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';

// import { AuthGuard } from "./guards/auth.guard";


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registry', component: RegisterComponent },

//   { path: 'smart', loadChildren: './pages/pages.module#PagesModule', canLoad: [AuthGuard] }
  //,
 // { path: '**', redirectTo: '/PageNotFoundComponent ' }

];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);