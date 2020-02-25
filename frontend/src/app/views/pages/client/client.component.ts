import { Component, OnInit } from '@angular/core';
import {TycketService} from "../../../services/tycket.service";
import {Router} from "@angular/router";

@Component({
  selector: 'kt-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  user: any;
  userPosts: any;
  postlen: number = 0;
  images: any = [];
  posts: any = [];
  published: boolean = false;
  constructor(private service: TycketService,
              private route: Router) { }

  ngOnInit() {
    // this.user = this.service.getUserData();
    // this.user = this.user['email'];
    this.service.getpublishedPost('somtobuchi@gmail.com').subscribe(response => {
      this.userPosts = response['response'];
      this.postlen = this.userPosts.length;
      for (let i = 0; i < this.postlen; i++){
        this.images.push(this.service.imagebaseUrl(this.userPosts[i]['image']));
        this.posts[i] = {
          id: i,
          postid: this.userPosts[i]['id'],
          title: this.userPosts[i]['title'],
          category: this.userPosts[i]['category'],
          content: this.userPosts[i]['content'],
          created_at: this.userPosts[i]['created_at'],
          published_at: this.userPosts[i]['published_at'],
          image: this.images[i]
        };
      }
    });
    console.log(this.posts);
  }
  getPost(data) {
    this.service.storePost(data);
    this.route.navigate(['readPost']);
  }

}
