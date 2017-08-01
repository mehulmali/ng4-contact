import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    model: any = {};
    loading = false;

    constructor() {
    }

    ngOnInit() {
    }

    fnLogin(e) {
        this.loading = true;
        console.log('e', e);
    }

}
