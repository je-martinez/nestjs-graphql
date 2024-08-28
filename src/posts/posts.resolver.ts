import {
  Args,
  Context,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
//Use without DataLoader
// import { CommentsService } from '../comments/comments.service';
import { Post } from './models/post.model';
import { PostsService } from './posts.service';
import { AppDataLoaders } from 'src/types';

@Resolver(() => Post)
export class PostsResolver {
  constructor(
    private postService: PostsService,
    //Without DataLoader
    // private commentsService: CommentsService,
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
  async comments(
    @Parent() post: Post,
    @Context() { loaders }: { loaders: AppDataLoaders },
  ) {
    // return this.commentsService.findAllByPostId(post.id);
    return loaders.comments.load(post.id) ?? [];
  }
}
