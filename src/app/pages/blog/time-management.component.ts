import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-time-management',
  templateUrl: './time-management.component.html',
  styleUrls: ['./time-management.component.css']
})
export class TimeManagementComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Time Management Tips - Student Life Blog');
    this.meta.updateTag({ name: 'description', content: 'Tips to effectively manage your time and balance academics with social life.' });
    this.meta.updateTag({ name: 'keywords', content: 'time management, study tips, productivity, student life' });
  }
}
