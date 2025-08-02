import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Student Life Blog - Blog');
    this.meta.addTags([
      { name: 'description', content: 'Read insightful articles and tips about student life, study habits, and campus experiences.' },
      { name: 'keywords', content: 'student life blog, study tips, campus experiences, student articles' }
    ]);
  }
}
