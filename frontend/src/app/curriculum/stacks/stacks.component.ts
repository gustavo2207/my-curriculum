import { Component, OnInit } from '@angular/core';
import { Stack } from './stack';
import { StackService } from './stack.service';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.css'],
})
export class StacksComponent implements OnInit {
  frontStacks: Stack[] = [];
  backStacks: Stack[] = [];
  databaseStacks: Stack[] = [];

  constructor(protected stackService: StackService) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.stackService.getStacks().subscribe({
      next: (stacks: Stack[]) => this.separeteAndInsertStacks(stacks),
      error: (error) => console.log(error),
      complete: () => console.log('Complete Stack Service'),
    });
  }

  separeteAndInsertStacks(stacks: Stack[]) {
    stacks.forEach((stack) => {
      if (stack.type === 'Front-End') this.frontStacks.push(stack);
      else if (stack.type === 'Back-End') this.backStacks.push(stack);
      else if (stack.type === 'Database') this.databaseStacks.push(stack);
    });
  }
}
