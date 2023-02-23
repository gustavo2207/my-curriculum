import { Router } from '@angular/router';
import { PersonalInfos } from './personal-infos';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserInfomationService} from '../../../user-infomation.service';
import {User} from '../../../user';
import {UserService} from 'src/app/authentication/user/user.service';

@Component({
  selector: 'app-edit-personal-infos',
  templateUrl: './edit-personal-infos.component.html',
  styleUrls: ['./edit-personal-infos.component.css']
})
export class EditPersonalInfosComponent implements OnInit {

  personalInfosForm!: FormGroup;
  isLoading: boolean = true;
  userTokenObject = this.userToken.userReturn()

  constructor(private formBuilder: FormBuilder, private userInformation: UserInfomationService, private userToken: UserService, private router: Router) {}


  ngOnInit() {
    this.personalInfosForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern(
        "^(\\d{2}9\\d{3}-\\d{4})|([(]\\d{2}[)] 9\\d{4}-\\d{4})|([(]\\d{2}[)] 9 \\d{4}-\\d{4})|(\\d{2}9\\d{7})$"
        )]],
      githubLink: ["", [Validators.required, Validators.pattern("^https://github.com/.+$")]],
      linkedlnLink: ["", [Validators.required, Validators.pattern("https://www.linkedin.com/in/.+/")]],
      instagramLink: ["", [Validators.required, Validators.pattern("https://www.instagram.com/.+/")]]
    })

    this.getInformation()
  }

  getInformation() {
    this.userInformation.getUserInformation().subscribe({
      next: (users: User[]) => {
        users.find((user) => {
          if (user._id === this.userTokenObject._id){
            this.personalInfosForm.setValue({
              name: user.name,
              email: user.email,
              phone: user.phone,
              githubLink: user.githubLink,
              linkedlnLink: user.linkedlnLink,
              instagramLink: user.instagramLink
            })
          }
        })
      },
      error: (error) => console.log(error),
      complete: () => this.isLoading = false,
    });
  }

  updateUser(): void {
    const formPersonalInfos = this.personalInfosForm.getRawValue() as PersonalInfos;
    this.userInformation.putUserInformation(this.userTokenObject._id, formPersonalInfos).subscribe({
      complete: () => this.router.navigate(["curriculum", "management"])
    })
  }
}
