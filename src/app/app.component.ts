import { Component } from '@angular/core';

import { NgbModal,  ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appGera';

  closeResult = '';
  
  constructor( private modalService: NgbModal) {

  }

  
}

