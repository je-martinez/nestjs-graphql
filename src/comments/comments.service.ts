import { Injectable, Logger } from '@nestjs/common';
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
    const logger = new Logger();
    logger.log('Query comments by postId: ' + postId, 'CommentsService');
    return comments.filter((comment) => comment.postId === postId);
  }
}
