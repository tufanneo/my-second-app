import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-number-validator',
  templateUrl: './phone-number-validator.component.html',
  styleUrls: ['./phone-number-validator.component.css']
})
export class PhoneNumberValidatorComponent implements OnInit {
  line: string;

  get e164() {
    const num = this.line
    return `${num}`
  }

  constructor() { }

  ngOnInit() {
  }

}
