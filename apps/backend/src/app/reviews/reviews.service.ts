import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Review } from './entities/review.entity';
import { CreateReviewDto } from './dtos/create-review.dto';

const reviews: Review[] = [
  { id: 1, content: 'Lorem ipsum', rate: 4 },
  { id: 2, content: 'sit dolor', rate: 5 },
];

@Injectable()
export class ReviewsService {
  getReviews(page?: number, offset?: number): Review[] {
    return reviews;
  }

  getReview(id: string): Review {
    const review = reviews.find((item) => item.id === +id);
    if (!review) {
      // thorw new Error('Review not found')
      // throw new HttpException('Review not found', HttpStatus.NOT_FOUND);
      throw new NotFoundException('Review not found');
    }
    return review;
  }

  createReview(createReviewDto: CreateReviewDto) {
    // reviews.push(data);
    return createReviewDto;
  }

  deleteReview(id: string) {
    return null;
  }
}
