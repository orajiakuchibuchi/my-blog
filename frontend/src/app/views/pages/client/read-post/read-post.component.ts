import { Component, OnInit } from '@angular/core';
import {TycketService} from "../../../../services/tycket.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'kt-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['../client.component.scss']
})
export class ReadPostComponent implements OnInit {
  post:any = {};
  // image:any = [];
  constructor(private service: TycketService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.post = this.service.getstoredPost();
   console.log(this.service.getstoredPost());
  }

}
