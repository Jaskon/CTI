import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'calendar',
    template: `
        <div class="calendar-wrapper">
            <div *ngFor="let day of days" class="{{day.class}}">{{day.numb}}</div>
        </div>
    `,
    styles: [`
        .calendar-wrapper {
            border: 1px solid black;
        }
    `]
})
export class CalendarComponent implements OnInit {

    days = [];

    constructor(private router: Router, private http: HttpClient) {
        
    }

    ngOnInit() {
        
    }
}
