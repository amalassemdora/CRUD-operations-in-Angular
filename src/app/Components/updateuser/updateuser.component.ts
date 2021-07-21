import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  id: 0;
  user: any;
  constructor(private router: Router,OurActive: ActivatedRoute,private OurService: DemoService)
  {
    this.id = OurActive.snapshot.params.id;
  }

  ngOnInit(): void {
    this.OurService.GetUserById(this.id).subscribe(
      (res) => {this.user = res;},
      (err) => { console.log(err);});
  }
  update(na: string, em: string, ph: string,st:string,ct:string) {
    this.user = { name: na, email: em, phone: ph ,address:{street:st,city:ct}};
    this.OurService.updateuser(this.id, this.user).subscribe();
    setTimeout(() => {
      this.router.navigate(['users']);
    }, 200);
  }
}
