import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TibetComponent } from './tibet/tibet.component';
import { YunnanComponent } from './yunnan/yunnan.component';
import { YadingComponent } from './yading/yading.component';
import { ViewComponent } from './view/view.component';
import { ShapeComponent } from './shape/shape.component';
import { SarahComponent } from './sarah/sarah.component';
import { MountComponent } from './mount/mount.component';
import { LankaComponent } from './lanka/lanka.component';
import { BagComponent } from './bag/bag.component';
import { SpotsComponent } from './spots/spots.component';
import { Project01Component } from './project01/project01.component';
import { Project04Component } from './project04/project04.component';
import { Project03Component } from './project03/project03.component';
import { Project02Component } from './project02/project02.component';
import { UiairlineComponent } from './uiairline/uiairline.component';
import { UiwebsiteComponent } from './uiwebsite/uiwebsite.component';
import { OtheruiComponent } from './otherui/otherui.component';
import { OtherdesignComponent } from './otherdesign/otherdesign.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'tibet', component: TibetComponent },
  { path: 'spots', component: SpotsComponent },
  { path: 'bag', component: BagComponent },
  { path: 'lanka', component: LankaComponent },
  { path: 'mount', component: MountComponent },
  { path: 'sarah', component: SarahComponent },
  { path: 'shape', component: ShapeComponent },
  { path: 'view', component: ViewComponent },
  { path: 'yading', component: YadingComponent },
  { path: 'yunnan', component: YunnanComponent },
  { path: 'project01', component: Project01Component },
  { path: 'project02', component: Project02Component },
  { path: 'project03', component: Project03Component },
  { path: 'project04', component: Project04Component },
  { path: 'uiairline', component: UiairlineComponent },
  { path: 'uiwebsite', component: UiwebsiteComponent },
  { path: 'otherui', component: OtheruiComponent },
  { path: 'otherdesign', component: OtherdesignComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
