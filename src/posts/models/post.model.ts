import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/comments/models/comment.model';

@ObjectType()
export class Post {
  @Field(() => Int)
  userId: number;
  @Field(() => Int)
  id: number;
  @Field({ nullable: false })
  title: string;
  @Field({ nullable: false })
  body: string;
  @Field(() => [Comment], { nullable: true, defaultValue: [] })
  comments?: Comment[];
}
