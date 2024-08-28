import DataLoader from 'dataloader';
import { Comment } from 'src/comments/models/comment.model';

export interface AppDataLoaders {
  comments: DataLoader<number, Comment[]>;
}
