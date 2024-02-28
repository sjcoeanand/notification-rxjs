import { Component } from '@angular/core';
import { concatMap, delay, from, map, mergeMap, of } from 'rxjs';
import { MobileNotiService } from 'src/app/services/mobile-noti.service';

@Component({
  selector: 'app-mobile-noti-concatmap',
  templateUrl: './mobile-noti-concatmap.component.html',
  styleUrls: ['./mobile-noti-concatmap.component.css']
})
export class MobileNotiConcatmapComponent {

  constructor(private servInst : MobileNotiService){}

  notificationArray !: any[];


  ngOnInit() {  
    this.servInst.fetchNotificationData().subscribe((resp)=>{
      this.notificationArray = resp;
      this.performObservableOperation();
    })  
  }

  performObservableOperation(){
    const obs1 = from(this.notificationArray);  
    obs1.pipe(
      concatMap(x => this.sendNotification(x))
    ).subscribe((res) => {
      let sampleHtml = `<div class="notifications shadow-sm bg-body mb-2">
          <div class="notification-head d-flex align-items-center justify-content-between">
              <div class="user fw-bold d-flex">
                  <div class="profile">
                      <img src="assets/user.png" class="rounded float-left">
                  </div>
                  <div class="name  ms-2">${res.email.length > 20 ? res.email.substring(0, 20) + '...' : res.email}</div>
              </div>
              <div class="timing">9::00 AM</div>
          </div>
          <div class="notification-body">
            ${res.body.length > 70 ? res.body.substring(0, 70) + '...' : res.body }
          </div>
      </div>`;
      this.servInst.createNotification(sampleHtml, 'mobId')
  })
  }

  sendNotification(data:any){
    return of(data).pipe(delay(1000)) 
  }
}
