import { Component, OnInit, TemplateRef, NgModule } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ValueService } from 'app/value.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  providers: [ ValueService ]
})

export class SettingsComponent {

  modalRef: BsModalRef;
  private items:string[] = ['FAQ', 'Settings', 'Social'];

  constructor(private modalService: BsModalService, private valueService: ValueService) {}
  
  showModal(value: string){
    console.log(value);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
