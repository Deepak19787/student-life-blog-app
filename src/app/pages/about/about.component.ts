import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-about',  
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
 constructor(private meta: Meta, private title: Title) { }
 
  ngOnInit(): void {
    this.title.setTitle('About Me - Student Life Blog');
    this.meta.addTags([
      { name: 'description', content: 'Learn more about the author behind the Student Life Blog.' },
      { name: 'keywords', content: 'about the author, student blogger, personal journey' }
    ]);
  }
}
