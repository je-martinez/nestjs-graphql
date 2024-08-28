import { Injectable } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { CommentsService } from 'src/comments/comments.service';
import { Comment } from 'src/comments/models/comment.model';

@Injectable()
export class DataLoadersService {
  constructor(public commentsService: CommentsService) {}
  createCommentLoader() {
    return new DataLoader<number, Comment[]>((ids) => {
      return new Promise((resolve) => {
        const comments = this.commentsService.findAllByListPostId([...ids]);
        const mappedResult = comments.reduce(
          (acc, comment) => {
            if (!acc[comment.postId]) {
              acc[comment.postId] = [];
            }
            acc[comment.postId].push(comment);
            return acc;
          },
          {} as Record<number, Comment[]>,
        );
        const result = ids.map(
          (id) => mappedResult[id] || new Error(`Post ${id} not found`),
        );
        resolve(result);
      });
    });
  }
}
