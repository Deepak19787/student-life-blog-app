import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-study-schedule',
  templateUrl: './study-schedule.component.html',
  styleUrls: ['./study-schedule.component.css']
})
export class StudyScheduleComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Create a Study Schedule - Student Life Blog');
    this.meta.updateTag({ name: 'description', content: 'Learn how to create an effective study schedule to improve your academic success and time management.' });
    this.meta.updateTag({ name: 'keywords', content: 'study schedule, time management, academic success, student life' });
  }
}
