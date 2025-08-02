import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-avoid-procrastination',
  templateUrl: './avoid-procrastination.component.html',
  styleUrls: ['./avoid-procrastination.component.css']
})
export class AvoidProcrastinationComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Avoid Procrastination - Student Life Blog');
    this.meta.updateTag({ name: 'description', content: 'Strategies to overcome procrastination and improve productivity for students.' });
    this.meta.updateTag({ name: 'keywords', content: 'procrastination, productivity, study tips, student life' });
  }
}
