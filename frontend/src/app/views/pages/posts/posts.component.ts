import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TycketService} from "../../../services/tycket.service";

@Component({
  selector: 'kt-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  user: any;
  userPosts: any;
  postlen: number = 0;
  images: any = [];
  posts: any = [];
  constructor(private router: Router, private service: TycketService) { }

  ngOnInit() {
    this.user = this.service.getUserData();
    this.user = this.user['email'];
    this.service.getAllPosts(this.user).subscribe(response => {
      this.userPosts = response.response;
      this.postlen = this.userPosts.length;
      for (let i = 0; i < this.postlen; i++){
        this.images.push(this.service.imagebaseUrl(this.userPosts[i]['image']));
        let temp = '';
        if (this.userPosts[i]['published_at'] == null) {
          this.posts[i] = {
            id: i,
            title: this.userPosts[i]['title'],
            category: this.userPosts[i]['category'],
            created_at: this.userPosts[i]['created_at'],
            published_at: 'not published',
            image: this.images[i]
          };
        } else {
          this.posts[i] = {
            id: i,
            title: this.userPosts[i]['title'],
            category: this.userPosts[i]['category'],
            created_at: this.userPosts[i]['created_at'],
            published_at: this.userPosts[i]['published_at'],
            image: this.images[i]
          };
        }
      }
    });
  }
  addPost() {
    this.router.navigateByUrl('addpost');
  }
}
