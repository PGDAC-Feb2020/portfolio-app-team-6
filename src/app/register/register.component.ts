import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

//import { faAirFreshener } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  //public faAirFreshener = faAirFreshener;
  linksList = [
    // { title: 'Home', link: 'home'},
    // { title: 'About', link: 'about'},
    // { title: 'Education', link: 'education'},
    // { title: 'Experiance', link: 'experiance' },
    // { title: 'Contact', link: 'contact' },
    // { title: 'Login', link: 'login' },
    //{ title: 'Signup', link: 'signup' },
  ];
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  async registerHere() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3500/adduser';

    await this.http.post(url, data).toPromise();

    this.router.navigate(['login']);
  }
}