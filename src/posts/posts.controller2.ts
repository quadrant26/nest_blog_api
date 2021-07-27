import { Controller, Get, Post, Body, Put, Query, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
// import { PostModel } from './post.model';
import { IsNotEmpty } from 'class-validator';
import { InjectModel } from 'nestjs-typegoose';
import { Post as PostSchema } from './post.model'
import { ReturnModelType } from "@typegoose/typegoose";

class CreatePostDto {
  @ApiProperty({ description: "帖子标题", example: "帖子标题1" })
  @IsNotEmpty({ message: '请填写标题' })
  title: string;
  @ApiProperty({ description: "帖子内容", example: "帖子内容1" })
  content: string;
}

@Controller('posts')
@ApiTags("帖子")
export class PostsController {

  constructor(
    @InjectModel(PostSchema) private readonly postModel: ReturnModelType<typeof PostSchema>
  ) {

  }

  @Get()
  @ApiOperation({ summary: '显示博客列表' })
  async index() {
    return await this.postModel.find()
    // return [
    //   { id: 1 },
    //   { id: 2 },
    //   { id: 3 },
    //   { id: 4 },
    // ]
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  // create(@Body() data, @Query() query, @Param() params) {
  async create(@Body() createPostDto: CreatePostDto) {
    await this.postModel.create(createPostDto);
    return {
      success: true,
      body: createPostDto
    }
  }

  @Get(':id')
  @ApiOperation({ summary: '博客详情' })
  async detail(@Param('id') id: string) {
    return await this.postModel.findById(id)
    // return {
    //   status: 200,
    //   id: id,
    // }
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  async update(@Param('id') id: string, @Body() createPostDto: CreatePostDto) {
    return await this.postModel.findByIdAndUpdate(id, createPostDto);
    // return {
    //   status: 200,
    //   id: id,
    //   body: body
    // }
  }

  @Delete('id')
  @ApiOperation({ summary: '删除帖子' })
  async del(@Param('id') id: string) {
    return await this.postModel.findByIdAndDelete(id);
    // return {
    //   status: 200,
    //   id: id
    // }
  }
}
