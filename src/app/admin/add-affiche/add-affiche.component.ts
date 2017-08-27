import { Component, OnInit } from '@angular/core';
import { HttpClient }        from '@angular/common/http';
import { ActivatedRoute, Router }    from '@angular/router';
import { LoginService }      from '../../services/login.service';
import { GlobalObject }      from '../../Globals/GlobalObject';

@Component({
    selector: 'add-affiche',
    templateUrl: './add-affiche.component.html',
    styleUrls: ['./add-affiche.component.scss']
})
export class AddAfficheComponent implements OnInit {

    afficheId: string;
    changeAffiche: boolean;

    preview: boolean = false;
    title: string = '';
    img: string = '';
    description: string = '';
    ckeditorContent: string = '';

    constructor(private route: ActivatedRoute, private router: Router,
            private http: HttpClient, private loginService: LoginService) {

        this.route.params.subscribe(params => {
            this.afficheId = params['id'];
        });
    }

    ngOnInit() {
        if (this.afficheId) {
            this.http.get(GlobalObject.serverAddress + '/api/affiche/' + this.afficheId).subscribe(data => {
                console.log(data['message']);
                this.title = data['data']['title'];
                this.img = data['data']['img'];
                this.description = data['data']['description'];
                this.ckeditorContent = data['data']['text'];
                this.changeAffiche = true;
            });
        } else {
            this.changeAffiche = false;
        }
    }

    addAffiche() {
        if (!this.title) {
            console.log('Введите заголовок');
        } else if (!this.ckeditorContent) {
            console.log('Введите текст афиши');
        } else {
            // Adding or changing existing affiche
            if (this.changeAffiche) {
                // Changing
                this.loginService.changeAffiche(this.afficheId, this.title, this.img,
                        this.description, this.ckeditorContent, (state: string) => {
                            
                    if (state === 'success') {
                        alert('Изменено');
                        this.router.navigate(['/affiche', this.afficheId]);
                    }
                });
            } else {
                // Adding
                this.loginService.addAffiche(this.title, this.img, this.description, 
                        this.ckeditorContent, (state: string) => {

                    if (state === 'success') {
                        alert('Добавлено');
                        this.router.navigate(['/affiches']);
                    }
                });
                
            }
        }
    }

    previewAffiche() {
        this.preview = !this.preview;
    }
}
