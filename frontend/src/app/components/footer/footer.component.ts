import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input()
  userName: string = '';
  @Input()
  email: string = '';
  @Input()
  phoneNumber: string = '';

  constructor() {}

  ngOnInit(): void {}
}
