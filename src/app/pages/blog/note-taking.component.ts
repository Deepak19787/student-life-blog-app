import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-note-taking',
  templateUrl: './note-taking.component.html',
  styleUrls: ['./note-taking.component.css']
})
export class NoteTakingComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Effective Note Taking - Student Life Blog');
    this.meta.updateTag({ name: 'description', content: 'Tips and techniques for effective note taking to enhance learning and retention.' });
    this.meta.updateTag({ name: 'keywords', content: 'note taking, study tips, learning, student life' });
  }
}
