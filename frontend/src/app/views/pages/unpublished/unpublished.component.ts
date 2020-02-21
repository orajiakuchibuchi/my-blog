import { Component, OnInit } from '@angular/core';
import {TycketService} from "../../../services/tycket.service";
import {Router} from "@angular/router";

@Component({
  selector: 'kt-unpublished',
  templateUrl: './unpublished.component.html',
  styleUrls: ['./unpublished.component.scss']
})
export class UnpublishedComponent implements OnInit {
  user: any;
  userPosts: any;
  postlen: number = 0;
  images: any = [];
  posts: any = [];
  published: boolean = false;
  constructor(private router: Router,
              private service: TycketService) { }

  ngOnInit() {
    this.user = this.service.getUserData();
    this.user = this.user['email'];
    this.service.getUnpublishedPost(this.user).subscribe(response => {
      this.userPosts = response['response'];
      this.postlen = this.userPosts.length;
      for (let i = 0; i < this.postlen; i++){
        this.images.push(this.service.imagebaseUrl(this.userPosts[i]['image']));
        this.posts[i] = {
          id: i,
          postid: this.userPosts[i]['id'],
          title: this.userPosts[i]['title'],
          category: this.userPosts[i]['category'],
          created_at: this.userPosts[i]['created_at'],
          published_at: 'not published',
          image: this.images[i]
        };
      }
    });
  }
  addPost() {
    this.router.navigateByUrl('addpost');
  }
  editPost(id) {
    return this.router.navigate(['editpost', id]);
  }
  publish(data) {
    if(confirm('Ready to publish?')){
      this.published = true;
      // console.log(this.published);
      this.service.publish(data).subscribe(res =>{
        if(res['error']){
          console.log(res['error']);
          return ;
        }
        console.log(res['response']);
      });
    }
  }

}
