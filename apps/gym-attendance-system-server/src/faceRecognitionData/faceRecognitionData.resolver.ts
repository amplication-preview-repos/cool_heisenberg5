import * as graphql from "@nestjs/graphql";
import { FaceRecognitionDataResolverBase } from "./base/faceRecognitionData.resolver.base";
import { FaceRecognitionData } from "./base/FaceRecognitionData";
import { FaceRecognitionDataService } from "./faceRecognitionData.service";

@graphql.Resolver(() => FaceRecognitionData)
export class FaceRecognitionDataResolver extends FaceRecognitionDataResolverBase {
  constructor(protected readonly service: FaceRecognitionDataService) {
    super(service);
  }
}
