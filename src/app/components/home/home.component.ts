import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { FormsModule } from '@angular/forms';
import { jobDataDTO } from 'src/app/models/story';
import { Home, LucideAngularModule } from 'lucide-angular';
import { Router } from '@angular/router';
import { CardViewComponent } from 'src/app/shared/components/card-view/card-view.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,LucideAngularModule,CardViewComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  jobData:jobDataDTO[]=[];
  jobDataCopy:jobDataDTO[]=[];
  jobTitle:string='';
  joblocation:string='';

  constructor(private _dataserv:DataserviceService,
    private router: Router
  ){

  }

  ngOnInit(){
    this.getJobData()
  }

  getJobData(){
    this.jobData= this._dataserv.alljobs()
  }

  search(){
    this.jobData = this.jobDataCopy.filter(job =>
      job.jobRole.toLowerCase().includes(this.jobTitle.toLowerCase()) &&
      job.location.toLowerCase().includes(this.joblocation.toLowerCase())
    );
  }

  apply(id:number){
    this.router.navigate(['/submit-job'], {
      queryParams: { jobId: id }
    });
  }

  save(id:number){
    this._dataserv.save(id)
    
  }

}
