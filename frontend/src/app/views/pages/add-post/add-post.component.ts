import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TycketService} from "../../../services/tycket.service";
import {Router} from "@angular/router";

@Component({
  selector: 'kt-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  addPostForm: FormGroup;
  submitted = false;
  imageUrl = '';
  user: any;
  fileToUpload: File = null;
  published: boolean = false;
  public content;
  ERRORMESSAGE: any = '';
  SUCCESSMESSAGE: any = '';

  constructor(private formBuilder: FormBuilder,
              private service: TycketService,
              private route: Router
              ) { }

  ngOnInit() {
    this.addPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required]
    });
    this.user = this.service.getUserData();
    this.user = this.user['email'];
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
  }
  publishToggle(){
    this.published = !this.published;
    console.log(this.published);
  }
  onClickSubmit() {
    let formData = new FormData();
    formData.append('title', this.addPostForm.controls.title.value);
    formData.append('category', this.addPostForm.controls.category.value);
    formData.append('content', this.content);
    formData.append('image[]', this.fileToUpload, this.fileToUpload.name);
    formData.append('belongs_to', this.user);
    if(this.published === true) {
      formData.append('publish', 'true');
    }
    console.log(this.addPostForm.controls);
    this.submitted = true;
    if (this.addPostForm.invalid) {
      console.log('invaliddd');
      return;
    }
    // console.log(this.addEventForm);
    this.service.addpost(formData).subscribe(res => {
      if (res['status'] !== '200') {
        this.ERRORMESSAGE = res['error'];
      } else {
        this.SUCCESSMESSAGE = res['message'];
        if (this.published) {
          this.route.navigateByUrl('/admin/posts');
        } else {
          this.route.navigateByUrl('/admin/unpublished');
        }
      }
    });
  }


}
