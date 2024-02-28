import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileNotiService {

  constructor(private httpClient: HttpClient) { }

  fetchNotificationData(){
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/comments')
  }

  createNotification(val:any, parentId:any){
    let el = document.createElement('div');
    el.innerHTML = val;
    document.getElementById(parentId)?.appendChild(el)
  }
}
