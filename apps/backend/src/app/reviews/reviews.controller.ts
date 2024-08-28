import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseFilters,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dtos/create-review.dto';
import { UpdateReviewDto } from './dtos/update-review.dto';
import { HttpExceptionFilter } from '../filters/http-exception-filter';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('reviews')
@UseFilters(new HttpExceptionFilter())
@Controller('reviews') // http://localhost:3000/api/reviews
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  getReviews(@Query() query) {
    const { page, offset } = query;
    return this.reviewsService.getReviews(page, offset);
    // return this.reviewsService.getReviews();
  }

  @Get(':id')
  getReview(@Param('id') id: number) {
    console.log(id);
    return this.reviewsService.getReview(id);
  }

  @Delete(':id')
  async deleteReview(@Param('id') id: number) {
    await this.reviewsService.deleteReview(id);
    return {};
  }

  @Post()
  createReview(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.createReview(createReviewDto);
  }
  @Patch(':id')
  updateReview(
    @Param('id') id: number,
    @Body() updateReviewDto: UpdateReviewDto
  ) {
    return this.reviewsService.updateReview(id, updateReviewDto);
  }
}
