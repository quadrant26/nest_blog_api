import { getModelForClass, prop } from "@typegoose/typegoose";
import { IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

// export class Post {
//   @prop()
//   title: string;
//   @prop()
//   content: string;
// }

// export const PostModel = getModelForClass(Post);

export class Post {
  @ApiProperty({ description: "标题", example: "标题1" })
  @IsString()
  @prop({ required: true })
  title: string;
  @ApiProperty({ description: "内容", example: "内容1" })
  @IsString()
  @prop({ required: true })
  content: string;
}

