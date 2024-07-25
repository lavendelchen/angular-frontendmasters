import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <h3>My Top 3 Video Games</h3>
    <ol>
      <li>The Legend of Zelda: Twilight Princess</li>
      <li>Metroid Dread</li>
      <li>Broforce</li>
    </ol>
  `,
  styles: `
    ol {
      list-style-type: upper-roman;
    }
  `,
})
export class AppComponent {}
