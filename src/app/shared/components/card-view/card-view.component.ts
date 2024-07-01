import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jobDataDTO } from 'src/app/models/story';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent {
  @Input() jobData!:jobDataDTO;
}
