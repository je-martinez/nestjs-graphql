import { Module } from '@nestjs/common';
import { CommentsModule } from 'src/comments/comments.module';
import { PostsModule } from 'src/posts/posts.module';
import { DataLoadersService } from './data-loaders.service';

@Module({
  imports: [CommentsModule, PostsModule],
  providers: [DataLoadersService],
  exports: [DataLoadersService],
})
export class DataLoaderModule {}
