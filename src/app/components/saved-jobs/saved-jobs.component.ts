import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jobDataDTO } from 'src/app/models/story';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { Router } from '@angular/router';
import { CardViewComponent } from 'src/app/shared/components/card-view/card-view.component';

@Component({
  selector: 'app-saved-jobs',
  standalone: true,
  imports: [CommonModule,CardViewComponent],
  templateUrl: './saved-jobs.component.html',
  styleUrls: ['./saved-jobs.component.css']
})
export class SavedJobsComponent {
  jobData:jobDataDTO[]=[]
  constructor(private _dataserv:DataserviceService,
    private router: Router
  ){}

  ngOnInit(){
    this.getData()
  }

  getData(){
    this.jobData=this._dataserv.savedJobs()
  }

  apply(id:number){
    this.router.navigate(['/submit-job'], {
      queryParams: { jobId: id }
    });
  }

  
}
