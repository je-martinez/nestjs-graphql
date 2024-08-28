import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { DataLoaderModule } from './data-loaders/data-loader.module';
import { DataLoadersService } from './data-loaders/data-loaders.service';
import { AppDataLoaders } from './types';

@Module({
  imports: [
    CommentsModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [DataLoaderModule],
      driver: ApolloDriver,
      useFactory: (loaders: DataLoadersService) => {
        return {
          autoSchemaFile: 'src/schema.gql',
          context: () => ({
            loaders: {
              comments: loaders.createCommentLoader(),
            } satisfies AppDataLoaders,
          }),
        };
      },
      inject: [DataLoadersService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
