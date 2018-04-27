import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { NgJsonEditorModule } from 'ang-jsoneditor' 

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageService } from './services/page.service';
import { PagesComponent } from './components/pages/pages.component';
import { Title } from '@angular/platform-browser';
import { UserService } from './services/user.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminPagesComponent } from './components/admin-pages/admin-pages.component';
import { AdminEditPageComponent } from './components/admin-edit-page/admin-edit-page.component';
 
const appRoutes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'admin/pages', component: AdminPagesComponent},
  {path: 'admin/edit-page/:id', component: AdminEditPageComponent},
  {path: ':page', component: PagesComponent},
  {path: '', component: PagesComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagesComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AdminPagesComponent,
    AdminEditPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgJsonEditorModule
  ],
  providers: [
    PageService,
    Title,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
