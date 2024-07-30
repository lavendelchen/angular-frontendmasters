import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <input type="text" id="title" [(ngModel)]="title"/>

        <label for="body">Post Body</label>
        <textarea id="body" [(ngModel)]="body"></textarea>
      </section>
      <section>
        <p>The title is {{ title }}</p>
        <p>The body is: <br/> {{ body }}</p>
      </section>
    </article>
  `,
})
export class AppComponent {
  title = '09-template-driven-forms';
  body = "Write text here";
}
