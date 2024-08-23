import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReviewsModule } from './reviews/reviews.module';
import { OffersModule } from './offers/offers.module';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ReviewsModule, OffersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
