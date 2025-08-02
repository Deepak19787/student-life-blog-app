import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
constructor(private meta: Meta, private title: Title) { }
ngOnInit(): void {
    this.title.setTitle('Contact Me - Student Life Blog');
    this.meta.addTags([
      { name: 'description', content: 'Contact me .' },
      { name: 'keywords', content: 'contact me, contact me for any help' }
    ]);
  }
}
