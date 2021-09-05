import {
  Get,
  Res,
  Param,
  Body,
  JsonController,
  Post,
  Delete,
  Put,
  Authorized,
} from "routing-controllers";

@JsonController("/")
class HealtController {

  @Get("/")
  heatStatus(@Res() response: any) {
    return {status: 'OK'};
  }
}

export default HealtController;
