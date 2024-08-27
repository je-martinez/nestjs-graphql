import { Injectable } from '@nestjs/common';
import { comments } from './comments.datasource';

@Injectable()
export class CommentsService {
  findAll() {
    return comments;
  }

  findOneById(id: number) {
    return comments.find((comment) => comment.id === id);
  }

  findAllByPostId(postId: number) {
    return comments.filter((comment) => comment.postId === postId);
  }
}
