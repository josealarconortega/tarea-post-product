import { Controller, Get } from '@nestjs/common';
import { UserPostService } from './user-post.service';
import { IPost } from './interfaces/IPosts';
import { Observable } from 'rxjs';

@Controller()
export class UserPostController {
  constructor(private readonly userPostService: UserPostService) {}

  @Get('postuser')
  getFilterPost(): Observable<IPost[]> {
    return this.userPostService.getFilteredPostsJsonPlaceHolder();
  }
}
