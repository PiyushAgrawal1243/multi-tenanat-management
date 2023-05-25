import { Component, OnInit, TemplateRef } from '@angular/core';
import { IsActiveMatchOptions, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../service/login.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  matchOptions: IsActiveMatchOptions = {
    paths: 'exact',
    matrixParams: 'exact',
    queryParams: 'subset',
    fragment: 'ignored'
  };
  modalRef: BsModalRef | undefined;
  nevbarOpen=false;
  profileOpen= false;


  auth=localStorage.getItem('role');
  constructor(private router:Router,private loginService:LoginService , private toastr:ToastrService,
    private modalService: BsModalService) { }
  isActiveRoute(routeUrl: string): boolean {
    return this.router.isActive(routeUrl, this.matchOptions);
  }


  logOut(){
     this.loginService.logout()
     this.closeModal()
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      animated: true,
      class: 'logOut-modal'
    });
  }

  closeModal(){
  this.modalService?.hide();
  }

 toggleNevbar(){
  this.nevbarOpen = !this.nevbarOpen;
}

toggleProfile(){
  this.profileOpen = !this.profileOpen;
}

navigate(page:string): void {
    this.router.navigate( ['home']);
}


}
