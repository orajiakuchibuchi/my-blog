import { Injectable } from '@angular/core';
import {ConfirmationDialogComponent} from "./confirmation-dialog/confirmation-dialog.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {


  constructor(private modalService: NgbModal) { }


}
