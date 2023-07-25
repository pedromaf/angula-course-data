import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

interface WikiResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      wordcount: number;
      pageid: number;
    }[]
  }
}

export interface Pages {
  search: {
    title: string;
    snippet: string;
    wordcount: number;
    pageid: number;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  private baseUrl: string = "http://pt.wikipedia.org/w/api.php";
  
  constructor(private httpClient: HttpClient) {}

  public search(text: string) {
    return this.httpClient.get<WikiResponse>(this.baseUrl, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: text,
        origin: '*'
      }
    }).pipe(
      map(value => value.query as Pages)
    );
  }
}
