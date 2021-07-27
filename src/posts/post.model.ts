import { getModelForClass, prop } from "@typegoose/typegoose";
import { IsString } from "class-validator";

// export class Post {
//   @prop()
//   title: string;
//   @prop()
//   content: string;
// }

// export const PostModel = getModelForClass(Post);

export class Post {
  @IsString()
  @prop({ required: true })
  title: string;
  @IsString()
  @prop({ required: true })
  content: string;
}

