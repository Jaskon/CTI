import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }        from '@angular/common/http';
import { FormsModule }             from '@angular/forms';
import { NgModule }                from '@angular/core';

import { AppRoutingModule }  from './app-routing.module';
import { LoginService }      from './services/login.service';
import { SafeHtmlPipe }      from './pipes';
import { CKEditorModule }    from 'ng2-ckeditor';
import { CalendarComponent } from './Globals/calendar.component';
import { NgbModule }         from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }      from './app.component';
import { ContentComponent }  from './content/content.component';
import { AfficheComponent }  from './content/affiche/affiche.component';
import { ProjectComponent }     from './content/project/project.component';

import { AffichesComponent }   from './content/affiches/affiches.component';
import { ProjectsComponent }    from './content/projects/projects.component';
import { TeploobmenComponent } from './content/teploobmen/teploobmen.component';

import { AdminComponent }      from './admin/admin.component';
import { AddAfficheComponent } from './admin/add-affiche/add-affiche.component';

@NgModule({
  declarations: [
    SafeHtmlPipe,
    CalendarComponent,
    AppComponent,
    ContentComponent,
    AfficheComponent,
    ProjectComponent,
    AffichesComponent,
    ProjectsComponent,
    TeploobmenComponent,
    AdminComponent,
    AddAfficheComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CKEditorModule,
    NgbModule.forRoot()
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
