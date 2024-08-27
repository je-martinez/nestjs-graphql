import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';
import { posts } from './posts.datasource';

@Injectable()
export class PostsService {
  findAll(): Post[] {
    return posts;
  }

  findOneById(id: number): Post {
    return posts.find((post) => post.id === id);
  }
}
