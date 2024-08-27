import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Post } from './models/post.model';
import { PostsService } from './posts.service';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private postService: PostsService) {}

  @Query(() => [Post])
  async posts() {
    return this.postService.findAll();
  }

  @Query(() => Post)
  async post(@Args('id', { type: () => Int }) id: number) {
    return this.postService.findOneById(id);
  }
}
