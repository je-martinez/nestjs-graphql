import { Field, Int, ObjectType } from '@nestjs/graphql';

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
}
