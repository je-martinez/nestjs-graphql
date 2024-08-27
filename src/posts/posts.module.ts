import { CommentsService } from 'src/comments/comments.service';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [CommentsService, PostsService, PostsResolver],
})
export class PostsModule {}
