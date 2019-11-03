import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPost} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class PostsLoadService {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Promise<IPost[]> {
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
      .toPromise();
  }
}
