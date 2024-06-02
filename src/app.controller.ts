import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

/**
 * Todo: implement the prisma crontoller stuff: https://docs.nestjs.com/recipes/prisma
 */

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
