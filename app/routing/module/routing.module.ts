import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppComponent} from "../component/app.component";
import {HomeComponent} from "../component/home/home.component";
import {UsersComponent} from "../component/users/users.component";
import {ServersComponent} from "../component/servers/servers.component";
import {UserComponent} from "../component/users/user/user.component";
import {EditServerComponent} from "../component/servers/edit-server/edit-server.component";
import {ServerComponent} from "../component/servers/server/server.component";
import {ServersService} from "../component/servers/servers.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
