import { Injectable, signal } from '@angular/core';
import { jobDataDTO } from '../models/story';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {


  jobdata=signal<jobDataDTO[]>([]);
  notificationData:string[]=[];


  readonly baseUrl=environment.baseUrl

  constructor(private readonly _http:HttpClient){
  }

  getallJobs(){
    this._http.get(this.baseUrl).subscribe((data)=>{
      console.log('data',data);
      
      this.jobdata.set(data as jobDataDTO[])
    })
    
  }

  alljobs(){
    return this.jobdata()
  }

  appliedJobs(){
    return this.jobdata().filter(job=>job.applied==true)
  }

  savedJobs(){
    return this.jobdata().filter(job=>job.saved==true)
  }

  save(id:number){
    const index=this.jobdata().findIndex(job=>job.jobId==id)
    if (index !== -1) {
      this.jobdata()[index].saved = true;
      const notif=`Job ${id} saved sucssessfully `
      this.notificationData.push(notif)
    }
  }

  apply(id:number){
    const index=this.jobdata().findIndex(job=>job.jobId==id)
    if (index !== -1) {
      this.jobdata()[index].applied = true;
      const notif=`Job ${id} applied sucssessfully `
      this.notificationData.push(notif)
    }
  }

  getNotificationData(){
    return this.notificationData
  }

}
