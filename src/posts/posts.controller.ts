import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

class CreatePostDto {
  title: string;
  content: string;
}

@Controller('posts')
@ApiTags("帖子")
export class PostsController {
  @Get()
  @ApiOperation({ summary: '显示博客列表' })
  index() {
    return [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
    ]
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  // create(@Body() data, @Query() query, @Param() params) {
  create(@Body() body) {
    return {
      success: true
    }
  }

  @Get(':id')
  detail() {
    return {
      status: 200
    }
  }
}
