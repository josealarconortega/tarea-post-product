import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, catchError, filter, from, map, mergeMap, of, toArray, forkJoin, switchMap} from 'rxjs';
import { IPost } from './interfaces/IPosts';
import { IUser } from './interfaces/IUsers';

@Injectable()
export class UserPostService {
  constructor(private readonly httpService: HttpService){}

  getFilteredPostsJsonPlaceHolder(): Observable<any> {
    const post$ = this.httpService.get<IPost[]>('https://jsonplaceholder.typicode.com/posts').pipe( map(response => response.data));
    const user$ = this.httpService.get<IUser[]>('https://jsonplaceholder.typicode.com/users').pipe( map(response => response.data));
    return forkJoin({ users: user$, posts: post$ }).pipe(
      map(({ users, posts}) => {
        return users.map(user => ({
          ...user,
          posts: posts.filter(post => post.userId = user.id)
        }))
      })
    );

  }
}
