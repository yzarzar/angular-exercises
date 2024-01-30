import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Input()
  message!: string;

  fruits: string[] = [];

  helloFromChild: EventEmitter<string> = new EventEmitter<string>();

  msg!: string;

  @Output()
  public sentDataToParent(msg: string) {
    this.helloFromChild.emit(msg);
  }

  public addFruits(fruit: string) {
    this.fruits.push(fruit);
  }
}
