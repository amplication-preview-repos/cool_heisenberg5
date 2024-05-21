import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FaceRecognitionDataService } from "./faceRecognitionData.service";
import { FaceRecognitionDataControllerBase } from "./base/faceRecognitionData.controller.base";

@swagger.ApiTags("faceRecognitionData")
@common.Controller("faceRecognitionData")
export class FaceRecognitionDataController extends FaceRecognitionDataControllerBase {
  constructor(protected readonly service: FaceRecognitionDataService) {
    super(service);
  }
}
