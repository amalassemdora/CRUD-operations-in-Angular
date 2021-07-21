import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  id=0;
  constructor(private router:Router,ourActivate:ActivatedRoute, private ourService:DemoService) {
    this.id = ourActivate.snapshot.params.id;
   }

  ngOnInit(): void {
    this.ourService.deleteUser(this.id).subscribe();
      setTimeout(() => {
        this.router.navigate(['users']);
      }, 200);
  }

}

