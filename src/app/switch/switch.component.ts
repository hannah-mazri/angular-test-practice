import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  isOn = false;

  clicked(): void {
    this.isOn = !this.isOn;
  }

  get message(): string {
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }
}
