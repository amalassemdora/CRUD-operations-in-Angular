import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {
  id=0;
  user:any;
  constructor(ourActivate:ActivatedRoute, private ourService:DemoService) {
    this.id = ourActivate.snapshot.params.id;
   }

  ngOnInit(): void {
    this.ourService.GetUserById(this.id).subscribe(
      (res)=>{this.user = res;},
      (err)=>{console.log(err);}
    );
  }

}
