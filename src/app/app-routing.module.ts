import { NgModule } from '@angular/core';
import { MobileNotiConcatmapComponent } from './modules/mobile-noti-concatmap/mobile-noti-concatmap.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path:'',
    component: MobileNotiConcatmapComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true})
  ]
})
export class AppRoutingModule { }
