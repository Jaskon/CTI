import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { GlobalObject } from '../../Globals/GlobalObject';

@Component({
    selector: 'project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

    @Input() customTitle: string;
    @Input() customText: string;
    customObject: boolean = false;

    id: string;

    object: {
        title: string,
        text: string
    } = {title: '', text: ''};

    constructor(private route: ActivatedRoute, private router: Router,
            private http: HttpClient, private loginService: LoginService) {
        
        // Wait until :id param is fetched
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });
    }

    ngOnInit() {
        if (this.customTitle || this.customText) {
            this.customObject = true;
        } else {
            this.http.get(GlobalObject.serverAddress + '/api/project/' + this.id).subscribe(data => {
                console.log(data['message']);
                this.object.title = data['data']['title'];
                this.object.text = data['data']['text'];
            });
        }
    }


    deleteObject() {
        this.loginService.deleteAffiche(this.id, (state: string) => {
            if (state === 'success')
                alert('Удалено');
            else
                alert('Ошибка');

            this.router.navigate(['/projects', this.id]);
        });
    }
}
