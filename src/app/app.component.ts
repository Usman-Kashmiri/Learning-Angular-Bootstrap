import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
  .dark-modal .modal-content {
    background-color: #292b2c;
    color: white;
  }
  .dark-modal .close {
    color: white;
  }
  .light-blue-backdrop {
    background-color: #5cb3fd;
  }
`]
})
export class AppComponent {
  title = 'angular-bootstrap';
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public isMenuCollapsed = true;
  closeResult: string;
  constructor(private modalService: NgbModal) {}

  openVerticallyCentered(content:any) {
    this.modalService.open(content, { centered: true });
  }
}
