import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Review } from './entities/review.entity';
import { CreateReviewDto } from './dtos/create-review.dto';
import { UpdateReviewDto } from './dtos/update-review.dto';

const reviews: Review[] = [
  { id: 1, content: 'Lorem ipsum', rate: 4 },
  { id: 2, content: 'sit dolor', rate: 5 },
];

@Injectable()
export class ReviewsService {
  getReviews(page?: number, offset?: number): Review[] {
    return reviews;
  }

  getReview(id: Review['id']): Review {
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

  updateReview(id: Review['id'], updateReviewDto: UpdateReviewDto) {
    // reviews.push(data);
    return updateReviewDto;
  }

  deleteReview(id: Review['id']) {
    return null;
  }
}
