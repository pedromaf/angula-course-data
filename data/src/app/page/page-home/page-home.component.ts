import { Component } from '@angular/core';
import { Pages, WikipediaService } from 'src/app/wikipedia.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent {
  pages: Pages | null = null;

  constructor(private wikiService: WikipediaService) {}

  onSearchSubmit(input: string) {
    this.wikiService.search(input).subscribe((pages) => {
      this.pages = pages;
      console.log(this.pages);
    });
  }
}
