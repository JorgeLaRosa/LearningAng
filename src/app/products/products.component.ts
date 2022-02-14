import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../data.service';
import { Post } from '../Post';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {
  @Input() userName: any;
  @Input() posts: any;

  //posts: any[] = [];

  constructor(private dataService: DataService) {

    this.dataService.getData().subscribe(data => {

      this.posts = data

    })
  }

  share() {
    alert("compartido")
  }

  ngOnInit(): void {
  }

}
