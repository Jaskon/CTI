import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import { GlobalObject } from '../../Globals/GlobalObject';

@Component({
    selector: 'affiches',
    templateUrl: './affiches.component.html',
    styleUrls: ['./affiches.component.scss']
})
export class AffichesComponent implements OnInit {

    objects: [{title: string, img: string, link: string, description: string}];

    constructor(private http: HttpClient, private loginService: LoginService) { }

    ngOnInit() {
        /*this.objects = [
            {title: 'Title 1', img: 'img 1', link: 'link-1', description: 'Description 1 12321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 112321 123 1'},
            {title: 'Title 2', img: 'img 2', link: 'link-2', description: 'Description 2'},
            {title: 'Title 3', img: 'img 3', link: 'link-3', description: 'Description 3'},
            {title: 'Title 4', img: 'img 4', link: 'link-4', description: 'Description 4'},
            {title: 'Title 5', img: 'img 5', link: 'link-5', description: 'Description 5'}
        ];*/
        this.http.get(GlobalObject.serverAddress + '/api/affiches').subscribe(data => {
            console.log(data['message']);
            this.objects = data['data'];
        });
    }
}
