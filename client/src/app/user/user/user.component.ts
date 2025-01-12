import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{

  constructor(private http: HttpClient, private router:Router ){}

  ngOnInit(): void {
    console.log('calllinir v');
    
    const userDataString = localStorage.getItem("userData")
    const userdata = userDataString? JSON.parse(userDataString): null;
    if (userdata) {
      this.http.get('/user', {params: {_id: userdata.id}}).subscribe((response: any)=>{
        console.log(response);
        
      })
    }
    
  }

}
