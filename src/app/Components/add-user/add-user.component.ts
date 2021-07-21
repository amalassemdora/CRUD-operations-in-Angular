import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-add-user',
  templateUrl: 'add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  constructor(private ourSevice: DemoService, private router: Router) {}
  user: any;
  ngOnInit(): void {
  }


  Add(na:string, em:string, ph:string, st:string, ct:string){
     this.user = {name:na, email:em, phone:ph, address:{street:st, city:ct}};
     this.ourSevice.newuser(this.user).subscribe();
     setTimeout(() => {
     this.router.navigate(['users']);
    }, 200);
  }
}
