 import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {
  // id=0;
  constructor(private router:Router,ourActivate:ActivatedRoute,private OurService:DemoService) {
    // this.id = ourActivate.snapshot.params.id;
   }
  ngOnDestroy(): void {
    this.serv.unsubscribe();
  }
serv:any;
users:any;
  ngOnInit(): void {
    this.serv=this.OurService.GetAllUsers().subscribe(
      (res) => {this.users = res;},
      (err) => { console.log(err);});
  }

delete(data: any) {
  let id = data.target.parentNode.parentNode.children[0].textContent;
  let ans=confirm("Are you sure you want to delete "+ data.target.parentNode.parentNode.children[1].textContent+ " ?");
  console.log(id);
  if(ans){
    this.OurService.deleteUser(id).subscribe();
    setTimeout(() => {
      this.router.navigate(['users']);
    }, 200);
  }else{
    setTimeout(() => {
      this.router.navigate(['users']);
    }, 200);
  }
}
}


