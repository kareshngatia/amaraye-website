/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [ContactModule],
})
export class AppModule {}