import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('ip')
export class IpController {
  @Get()
  getIp(@Req() request: Request): { ip: string | undefined } {
    // In some setups, req.ip might return ::1 or ::ffff:127.0.0.1 for localhost.
    // If behind a proxy, you might need to check req.headers['x-forwarded-for'] or configure Express 'trust proxy'.
    // For now, we'll use req.ip directly.
    return { ip: request.ip };
  }
}
