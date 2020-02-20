import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TycketService} from "../../../services/tycket.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'kt-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  public id = null;
  public postInfo = null;
  editPost: FormGroup;
  submitted = false;
  imageUrl = '';
  error: any;
  public content;
  fileToUpload: File = null;
  public userdata: any = this.service.getUserData();
  constructor(private formBuilder: FormBuilder, private service: TycketService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.postInfo(this.id).subscribe(data => {
      this.postInfo = data;
      if (data['error']) {
        this.error = data['error'];
        return ;
      }
      this.postInfo = this.postInfo['response'][0];
      this.imageUrl = this.service.imagebaseUrl(this.postInfo['image']);
      this.editPost = this.formBuilder.group({
        title: [this.postInfo['title']],
        category: [this.postInfo['category']],
        content: [this.postInfo['content']],
        image: ['']
      });
    });
    console.log(this.postInfo);
    this.userdata = this.userdata['email'];
    // console.log(this.imageUrl);
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    console.log(this.fileToUpload);
  }
  onClickSubmit(){
    let formData = new FormData();
    formData.append('title', this.editPost.controls.title.value);
    formData.append('category', this.editPost.controls.category.value);
    formData.append('content', this.content);
    formData.append('id',this.id);
    if (this.fileToUpload) {
      formData.append('image[]', this.fileToUpload, this.fileToUpload.name);
    }
    // console.log(this.editPost.controls);
    this.submitted = true;
    this.service.updatepost(formData).subscribe();
    return this.router.navigateByUrl('posts');
  }


}
