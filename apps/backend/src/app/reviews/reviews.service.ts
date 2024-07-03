import { Injectable } from '@nestjs/common';

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
    return reviews.find((item) => item.id === +id);
  }

  createReview(data: Review) {
    reviews.push(data);
    return data;
  }

  deleteReview(id: string) {
    return null;
  }
}
