import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserPostModule } from './user-post/user-post.module';

@Module({
  imports: [UserPostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
