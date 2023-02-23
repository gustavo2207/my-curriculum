import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserInfomationService } from './user-infomation.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
})
export class CurriculumComponent implements OnInit {
  isLoading: boolean = true
  user!: User;
  constructor(private userInformation: UserInfomationService) {}
  ngOnInit(): void {
    this.getInformation();
  }

  getInformation() {
    this.userInformation.getUserInformation().subscribe({
      next: (user: User[]) => (this.user = user[0]),
      error: (error) => console.log(error),
      complete: () => this.isLoading = false,
    });
  }
}
