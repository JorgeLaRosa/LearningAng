import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() userName: any


  // constructor(private dataService: DataService) {
  //   this.dataService.getData().subscribe(data => {

  //     this.posts = data
  //   })
  // }


  ngOnInit(): void {
  }

}
