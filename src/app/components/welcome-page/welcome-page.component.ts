import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  public inputEmail: any = "getEmail()"

  userForm!: FormGroup;

  @ViewChild('email') emailKey!: ElementRef;
  @ViewChild('pwd') pwdKey!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      pwd: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
      'checkbox': new FormControl(null)
    });
  }

  getEmail() {
    localStorage.setItem('email', this.emailKey.nativeElement.value);
  }
  getPassword() {
    localStorage.setItem('Password', this.pwdKey.nativeElement.value);
  }

  get Email(): FormControl {
    return this.userForm.get("email") as FormControl;
  }
  get PWD(): FormControl {
    return this.userForm.get("pwd") as FormControl;
  }
}