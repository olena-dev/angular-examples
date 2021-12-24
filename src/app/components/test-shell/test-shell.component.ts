import { Component, OnInit } from '@angular/core';
import { TestService } from "src/app/services/test.service";

@Component({
  selector: 'app-test-shell',
  templateUrl: './test-shell.component.html',
  styleUrls: ['./test-shell.component.css'],
})
export class TestShellComponent {
  user: string = 'Olena';
  isDisabled = false;

  constructor(private testService: TestService) {
  }

  onButtonClick() {
  }

}
