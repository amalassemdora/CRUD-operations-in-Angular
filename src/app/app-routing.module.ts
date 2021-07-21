import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { ErrorComponent } from './Components/error/error.component';
import { UpdateuserComponent } from './Components/updateuser/updateuser.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UsersComponent } from './Components/users/users.component';
import { DeleteuserComponent} from './Components/deleteuser/deleteuser.component';


const routes: Routes = [
  {path:"", redirectTo:"users", pathMatch:"full"},
  {path:"users", component:UsersComponent},
  {path:"users/:id", component:UserDetailsComponent},
  {path:"newuser", component:AddUserComponent},
  {path:"updateuser/:id", component:UpdateuserComponent},
  // {path:"deleteUser/:id",redirectTo:"users", pathMatch:"full"},
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
