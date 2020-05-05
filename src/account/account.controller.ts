import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ host: ':account.example.com' })
@Controller('account')
export class AccountController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return { account };
  }
}
