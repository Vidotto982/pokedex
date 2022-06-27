import { NgModule } from '@angular/core';
import { RouterModule, Routes, ParamMap } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { CreatePokemonComponent } from "./create-pokemon/create-pokemon.component";
import { AuthGuardService } from "./interceptors/interceptor.service";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LayoutComponent,  canActivate: [AuthGuardService],
    children:[
        { path: 'home', component: HomeComponent },
        { path: 'add', component: CreatePokemonComponent },
        { path: 'edit', component: CreatePokemonComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
