import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-bxmodal',
  templateUrl: './bxmodal.component.html',
  styleUrls: ['./bxmodal.component.css']
})
export class BxmodalComponent implements OnInit {

@ViewChild('childModal') public childModal:ModalDirective;
 
  public showModal():void {
    this.childModal.show();
  }
 
  public hideModal():void {
    this.childModal.hide();
  }

  constructor() { }

  ngOnInit() {
  }


}
