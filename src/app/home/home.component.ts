import { Component, OnInit } from '@angular/core';
import {ModalService} from '../modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  bodyText = '';

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string): void {
    console.log('open modal');
    this.modalService.open(id);
  }

  closeModal(id: string): void {
    console.log('close modal');
    this.modalService.close(id);
  }
}
