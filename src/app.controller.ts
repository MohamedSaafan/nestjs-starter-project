import { Controller, Get } from "@nestjs/common";
@Controller("/app")
export class AppController {
  @Get("/route")
  getRoute() {
    return "hi there";
  }
  @Get("/")
  getRootRoute() {
    return "hello from the root route";
  }
}
