import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAX_SIZE, SUCCESS_MESSAGE, submitDataDTO } from 'src/app/models/story';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-submit-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.css']
})
export class SubmitPageComponent {
  jobId:number=0;
  message:string=SUCCESS_MESSAGE;
  jobForm!: FormGroup<
    Record<
      keyof Omit<submitDataDTO,''>,
      FormControl
    >
  >;

  showSuccess:boolean = false;

  get name() {
    return this.jobForm.get('name');
  }
  get email() {
    return this.jobForm.get('email');
  }

  get totalExperience() {
    return this.jobForm.get('totalExperience');
  }
  get phoneNumber() {
    return this.jobForm.get('phoneNumber');
  }

  get resume() {
    return this.jobForm.get('resume');
  }

  constructor(private _dataserv:DataserviceService,
    private route: ActivatedRoute,
     private router: Router
  ){
    this.route.queryParams.subscribe(params => {
      this.jobId=params['jobId']
      console.log('data',params);
      
    });

    this.buildForm()
  }

  private buildForm(): void {
    // console.log(this.jobForm.get('name')?.errors);
    
    this.jobForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      phoneNumber: new FormControl('', [Validators.required, Validators.min(10)]),
      totalExperience: new FormControl('', [Validators.required, Validators.min(1)]),
      resume: new FormControl('', [Validators.required]),
    });
  }


  submitApplication(){
    this._dataserv.apply(this.jobId)
    this.showSuccess = true
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    console.log('fie',file)
    if (file) {
      // Check the file size
      if (file.size > MAX_SIZE) {
        alert('File size is too big');
        return;
      } else {
        this.jobForm.get('resume')?.setValue(file);
      }
      this.readFile(file);
    }
  }

  readFile(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const fileContent = e.target.result;
      console.log(fileContent); // Do something with the file content
    };
    reader.readAsText(file); // You can use readAsDataURL or readAsBinaryString depending on your need
  }

  successOk(){
    this.showSuccess=false;
    this.router.navigate(['/home']);
  }
}
