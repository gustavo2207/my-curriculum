import { AuthenticationService } from './../../authentication/authentication.service';
import { UserInfomationService } from './../../curriculum/user-infomation.service';
import {animate, style, transition, trigger} from '@angular/animations';
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('overlay', [
      transition(':enter', [
        style({opacity: 0}),
        animate('250ms', style({opacity: .5})),
      ]),
      transition(':leave', [
        animate('500ms', style({opacity: 0}))
      ])
    ]),
    trigger('modal', [
      transition(':enter', [
        style({top: -999}),
        animate('500ms', style({top: '50%'})),
      ]),
      transition(':leave', [
        animate('250ms', style({top: -999}))
      ])
    ]),
  ]
})
export class ModalComponent {

  showModal: boolean = false;

  user!: string;
  password!: string;

  constructor(private routes: Router, private authService: AuthenticationService) {}

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  async login(): Promise<void> {
    console.log(this.user, this.password);
    this.authService.login(this.user, this.password).subscribe({
      complete: () => this.routes.navigate(["curriculum", "management"])
    });
  }
}
