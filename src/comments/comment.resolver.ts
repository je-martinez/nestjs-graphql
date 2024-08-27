import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Comment } from './models/comment.model';
import { CommentsService } from './comments.service';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private commentsService: CommentsService) {}

  @Query(() => [Comment])
  async comments() {
    return this.commentsService.findAll();
  }

  @Query(() => Comment)
  async comment(@Args('id', { type: () => Int }) id: number) {
    return this.commentsService.findOneById(id);
  }
}
