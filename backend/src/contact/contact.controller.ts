/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDto } from './contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async submitContact(@Body() contactDto: ContactDto) {
    await this.contactService.processContact(contactDto);
    return { message: 'Contact form submitted successfully' };
  }
}