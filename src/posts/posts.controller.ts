import { Controller, Get, Post, Body, Put, Query, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';

class CreatePostDto {
  @ApiProperty({ description: "帖子标题" })
  title: string;
  @ApiProperty({ description: "帖子内容" })
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
  create(@Body() body: CreatePostDto) {
    return {
      success: true,
      body: body
    }
  }

  @Get(':id')
  @ApiOperation({ summary: '博客详情' })
  detail(@Param('id') id: string) {
    return {
      status: 200,
      id: id,
    }
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  update(@Param('id') id: string, @Body() body: CreatePostDto) {
    return {
      status: 200,
      id: id,
      body: body
    }
  }

  @Delete('id')
  @ApiOperation({ summary: '删除帖子' })
  del(@Param('id') id: string) {
    return {
      status: 200,
      id: id
    }
  }
}
