import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Root component
import { AppComponent } from './app.component';

// My libraries
import {routing} from './app.routing';

// My share components
import {HeaderComponent} from './layout-components/header/header.component';
import {AsideComponent} from './layout-components/aside/aside.component';
import {FooterComponent} from './layout-components/footer/footer.component';
import {PageHeaderComponent} from './layout-components/page-header/page-header.component';
import {UserMenuComponent} from './layout-components/user-menu/user-menu.component';
import {LoginComponent} from './layout-components/login/login.component';
import {DashboardComponent} from './layout-components/dashboard/dashboard.component';

// My components
import {ProducerComponent} from './components/producer/producer.component';

// My dynamic components

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    AsideComponent,
    FooterComponent,
    PageHeaderComponent,
    UserMenuComponent,
    LoginComponent,
    DashboardComponent,
    ProducerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
