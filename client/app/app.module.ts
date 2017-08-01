import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {NavBarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {LoginFormComponent} from './login/login-form/login-form.component';
import {Routing, AppRoutingProviders} from './app.route';
import {SignupComponent} from './signup/signup.component';
import {MainComponent} from './main/main.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        LoginComponent,
        LoginFormComponent,
        SignupComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        Routing,
        FormsModule
    ],
    providers: [AppRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}
