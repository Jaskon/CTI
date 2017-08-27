import { Injectable, OnInit }   from '@angular/core';
import { HttpClient }           from '@angular/common/http';
import { GlobalObject }         from '../Globals/GlobalObject';

@Injectable()
export class LoginService {

    public username: string = 'admin';
    private password: string = null;

    constructor(private http: HttpClient) { }


    login(username: string, password: string) {
        // Its only test
        // Here should be a server request
        if (password == 'admin') {
            this.username = username;
            this.password = password;
            localStorage.setItem('username', username);
            console.log('[LoginService] Logged in as ' + username);
        }
    }

    logout() {
        this.username = null;
        this.password = null;
        console.log('[LoginService] Logged out');
    }

    changePassword(oldPass: string, newPass: string) {
        this.http.post(GlobalObject.serverAddress + '/api/admin/change-password',
                {oldPass: oldPass, newPass: newPass}).subscribe(data => {

            data['message'] && console.log(data['message']);
            if (data['state'] === 'success')
                this.password = newPass;
        });
        console.log('[LoginService] Changing password...');
    }


    // FUNCTIONS TO WORK WITH CONTENT

    addAffiche(title: string, img: string, description: string,
            text: string, callback?: Function) {

        this.http.post(GlobalObject.serverAddress + '/api/admin/affiche',
                {title: title, img: img, description: description, text: text}).subscribe(data => {

            data['message'] && console.log(data['message']);
            callback && callback(data['state']);
        });
    }

    changeAffiche(id: string, title: string, img: string, description: string,
            text: string, callback?: Function) {

        this.http.put(GlobalObject.serverAddress + '/api/admin/affiche/' + id,
                {title: title, img: img, description: description, text: text}).subscribe(data => {

            data['message'] && console.log(data['message']);
            callback && callback(data['state']);
        });
    }

    deleteAffiche(id: string, callback?: Function) {
        this.http.delete(GlobalObject.serverAddress + '/api/admin/affiche/' + id).subscribe(data => {
            data['message'] && console.log(data['message']);
            callback && callback(data['state']);
        })
    }
}