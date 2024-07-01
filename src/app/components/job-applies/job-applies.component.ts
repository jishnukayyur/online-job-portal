import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jobDataDTO } from 'src/app/models/story';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { CardViewComponent } from 'src/app/shared/components/card-view/card-view.component';

@Component({
  selector: 'app-job-applies',
  standalone: true,
  imports: [CommonModule,CardViewComponent],
  templateUrl: './job-applies.component.html',
  styleUrls: ['./job-applies.component.css']
})
export class JobAppliesComponent {
  jobData:jobDataDTO[]=[]
  constructor(private _dataserv:DataserviceService,
  ){}

  ngOnInit(){
    this.getData()
  }

  getData(){
   this.jobData = this._dataserv.appliedJobs()
  }
}
