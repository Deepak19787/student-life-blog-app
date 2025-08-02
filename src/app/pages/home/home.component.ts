import { Component } from '@angular/core';
import { OnInit } from '../../../../node_modules/@angular/core/index';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Student Life Blog - Home');
    this.meta.addTags([
      { name: 'description', content: 'Welcome to my personal blog about student life, sharing experiences, tips, and stories.' },
      { name: 'keywords', content: 'student life, college experiences, study tips, campus life' }
    ]);
  }
}
