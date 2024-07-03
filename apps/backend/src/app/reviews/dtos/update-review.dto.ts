import { PartialType } from '@nestjs/mapped-types'; // utility types TS
import { CreateReviewDto } from './create-review.dto';

export class UpdateReviewDto extends PartialType(CreateReviewDto) {}
