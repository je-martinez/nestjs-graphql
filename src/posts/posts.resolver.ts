import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CommentsService } from '../comments/comments.service';
import { Post } from './models/post.model';
import { PostsService } from './posts.service';

@Resolver(() => Post)
export class PostsResolver {
  constructor(
    private postService: PostsService,
    private commentsService: CommentsService,
  ) {}

  @Query(() => [Post])
  async posts() {
    return this.postService.findAll();
  }

  @Query(() => Post)
  async post(@Args('id', { type: () => Int }) id: number) {
    return this.postService.findOneById(id);
  }

  @ResolveField(() => [Comment])
  async comments(@Parent() post: Post) {
    return this.commentsService.findAllByPostId(post.id);
  }
}
