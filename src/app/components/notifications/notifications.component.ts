import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notificationData:string[]=[];

  constructor(private _dataserv:DataserviceService){

  }

  ngOnInit(){
    this.getNotificationData()
  }

  getNotificationData(){
    this.notificationData = this._dataserv.getNotificationData()
  }
}
