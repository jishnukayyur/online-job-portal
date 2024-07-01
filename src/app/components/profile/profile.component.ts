import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name:string='Jishnu V';
  email:string='jishnukyr@gmail.com';
  phoneNumber:number=9645792624;
  totalExperience:number=2.5;
  role:string='Software Developer';
}