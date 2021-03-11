import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user!: User;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
    }
    return classes;
  }

  onRef(user: any) {
    sessionStorage.setItem("id", user.id)
    window.location.href='/albums'
    //window.location.href=`https://jsonplaceholder.typicode.com/users/${user.id}/albums`
  }

}
