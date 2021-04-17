import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/entities/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User[]=[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(response=>{
      this.user=response.data;
    })
  }
}