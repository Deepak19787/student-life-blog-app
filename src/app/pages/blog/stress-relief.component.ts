import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-stress-relief',
  templateUrl: './stress-relief.component.html',
  styleUrls: ['./stress-relief.component.css']
})
export class StressReliefComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Stress Relief Techniques - Student Life Blog');
    this.meta.updateTag({ name: 'description', content: 'Effective techniques to manage and relieve stress for a healthier student life.' });
    this.meta.updateTag({ name: 'keywords', content: 'stress relief, mental health, student wellness, study tips' });
  }
}
