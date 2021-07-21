import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoService } from './Services/demo.service';
import { UsersComponent } from './Components/users/users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { AboutComponent } from './Components/about/about.component';
import { ErrorComponent } from './Components/error/error.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { UpdateuserComponent } from './Components/updateuser/updateuser.component';
import { DeleteuserComponent } from './Components/deleteuser/deleteuser.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    AboutComponent,
    ErrorComponent,
    AddUserComponent,
    UpdateuserComponent,
    DeleteuserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    /**5-Services */
    DemoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
