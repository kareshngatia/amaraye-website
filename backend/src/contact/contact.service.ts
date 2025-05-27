/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ContactDto } from './contact.dto';
import nodemailer from 'nodemailer';

@Injectable()
export class ContactService {
  async processContact(contactDto: ContactDto) {
    // Configure email transport (using a test service or your email)
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password', // Use an App Password for Gmail
      },
    });

    // Send email
    await transporter.sendMail({
      from: contactDto.email,
      to: 'your-email@gmail.com',
      subject: `New Contact from ${contactDto.name}`,
      text: contactDto.message,
    });
  }
}