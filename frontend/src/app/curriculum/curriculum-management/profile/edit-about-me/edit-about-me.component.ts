import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from 'src/app/authentication/user/user.service';
import {User} from '../../../user';
import {UserInfomationService} from '../../../user-infomation.service';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.css']
})
export class EditAboutMeComponent implements OnInit {

  aboutMe: string = "";
  userTokenObject = this.userToken.userReturn()
  isLoading!: boolean;

  constructor(private userInformation: UserInfomationService, private userToken: UserService, private router: Router) { }

  ngOnInit() {
    this.getInformation()
  }

  getInformation() {
    this.userInformation.getUserInformation().subscribe({
      next: (users: User[]) => {
        users.find((user) => {
          if (user._id === this.userTokenObject._id) {
            this.aboutMe = user.aboutMe
          }
        })
      },
      error: (error) => console.log(error),
      complete: () => this.isLoading = false,
    });
  }

  updateAboutMe(): void {
    this.userInformation.putUserInformation(this.userTokenObject._id, {aboutMe: this.aboutMe}).subscribe({
      complete: () => this.router.navigate(["curriculum", "management"])
    })
  }

}
