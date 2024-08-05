import { Component } from '@angular/core';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsComponent],
  template: `
    <section class="container">
      <h1>Deferrable Views Example</h1>
      @defer (on interaction()) {
        <app-posts />
      } @placeholder {
        <button>Load Posts</button>
      }
    </section>
  `,
})
export class AppComponent {}
