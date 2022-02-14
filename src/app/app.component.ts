import { Component } from '@angular/core';
import { DataService } from './data.service'
import { RouterLink, RouterOutlet } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  users = ["jorge", "Adrian", "Roberto"]
  activated: boolean = false;
  posts: any[] = [];

  // constructor(private dataService: DataService) {
  //   this.dataService.getData().subscribe(data => {
  //     this.posts = data;
  //     console.log(data);

  //   })
  // }


  eco = ["jorge", "rolo"]

  alertar(data: any) {

    console.log(data.value)
    data.value = " "

    return false
  }



}

