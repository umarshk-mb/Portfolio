import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Imported all the components into root-app*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';

import{RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/*Angular material*/
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  /*Defined components */
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      /* Defined rooting */
    {path: '',component: HomeComponent},
    {path: 'home',component: HomeComponent},
    {path:'about',component: AboutComponent},
    {path:'portfolio',component: PortfolioComponent},
    {path:'skills',component: SkillsComponent},
    {path:'contact',component: ContactComponent},
    ]),

   ],

  //providers: [ContactService],
  bootstrap: [AppComponent]


})
export class AppModule {

}
