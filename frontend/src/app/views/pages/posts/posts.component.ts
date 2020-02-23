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
  published: boolean = false;
  public searchPost: any;
  constructor(private router: Router,
              private service: TycketService) { }

  ngOnInit() {
    this.user = this.service.getUserData();
    this.user = this.user['email'];
    this.service.getpublishedPost(this.user).subscribe(response => {
      this.userPosts = response['response'];
      this.postlen = this.userPosts.length;
      for (let i = 0; i < this.postlen; i++){
        this.images.push(this.service.imagebaseUrl(this.userPosts[i]['image']));
        let temp = '';
        this.posts[i] = {
          id: i,
          postid: this.userPosts[i]['id'],
          title: this.userPosts[i]['title'],
          category: this.userPosts[i]['category'],
          created_at: this.userPosts[i]['created_at'],
          published_at: this.userPosts[i]['published_at'],
          image: this.images[i]
        };
      }
    });
    console.log(this.posts);
  }
  onChange(event) {
    this.searchPost = event;
    console.log(event);
  }
  addPost() {
    this.router.navigateByUrl('/admin/addpost');
  }
  editPost(id) {
    return this.router.navigate(['/admin/editpost', id]);
  }
}
