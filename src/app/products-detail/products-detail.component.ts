import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../../Post';


@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  //@Input() post: any;
  //post: any = "hola";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { }


  // const routeParams = this.route.snapshot.paramMap;
  // const postsIdFromRoute = Number(routeParams.get('postsId'))
  //   this.posts = posts.find((post: { id: number; }) => post.id === postsIdFromRoute)
}


