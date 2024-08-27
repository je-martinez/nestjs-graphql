import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Comment {
  @Field(() => Int)
  postId: number;
  @Field(() => Int)
  id: number;
  @Field({ nullable: false })
  name: string;
  @Field({ nullable: false })
  email: string;
  @Field({ nullable: false })
  body: string;
}
