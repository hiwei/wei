import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TibetComponent } from './tibet/tibet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BagComponent } from './bag/bag.component';
import { YadingComponent } from './yading/yading.component';
import { MountComponent } from './mount/mount.component';
import { SarahComponent } from './sarah/sarah.component';
import { SpotsComponent } from './spots/spots.component';
import { ShapeComponent } from './shape/shape.component';
import { ViewComponent } from './view/view.component';
import { YunnanComponent } from './yunnan/yunnan.component';
import { LankaComponent } from './lanka/lanka.component';
import { Project01Component } from './project01/project01.component';
import { Project02Component } from './project02/project02.component';
import { Project03Component } from './project03/project03.component';
import { Project04Component } from './project04/project04.component';
import { UiairlineComponent } from './uiairline/uiairline.component';
import { UiwebsiteComponent } from './uiwebsite/uiwebsite.component';
import { OtheruiComponent } from './otherui/otherui.component';
import { OtherdesignComponent } from './otherdesign/otherdesign.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TibetComponent,
    BagComponent,
    YadingComponent,
    MountComponent,
    SarahComponent,
    SpotsComponent,
    ShapeComponent,
    ViewComponent,
    YunnanComponent,
    LankaComponent,
    Project01Component,
    Project02Component,
    Project03Component,
    Project04Component,
    UiairlineComponent,
    UiwebsiteComponent,
    OtheruiComponent,
    OtherdesignComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
