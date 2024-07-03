import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

type Review = { id: number; content: string; rate: number };

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

  createReview(data: Review) {
    reviews.push(data);
    return data;
  }

  deleteReview(id: string) {
    return null;
  }
}
