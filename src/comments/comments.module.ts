import { CommentResolver } from './comment.resolver';
import { CommentsService } from './comments.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [CommentsService, CommentResolver],
  exports: [CommentsService, CommentResolver],
})
export class CommentsModule {}
