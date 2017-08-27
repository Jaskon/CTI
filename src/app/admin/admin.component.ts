import { Component, OnInit } from '@angular/core';
import { LoginService }      from '../services/login.service';

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    constructor(private loginService: LoginService) { }

    ngOnInit() {
    }

    login(username: string, password: string, event: Event) {
        event.preventDefault();        // To prevent warning in the console

        this.loginService.login(username, password);
        console.log(username + ' ' + password);
    }

    logout() {
        this.loginService.logout();
    }

    changePassword(oldPass: string, newPass: string, newPassAgain: string) {
        if (newPass && newPass === newPassAgain) {
            this.loginService.changePassword(oldPass, newPass);
        }
    }
}
