import { Module } from "@nestjs/common";
import { FaceRecognitionDataModuleBase } from "./base/faceRecognitionData.module.base";
import { FaceRecognitionDataService } from "./faceRecognitionData.service";
import { FaceRecognitionDataController } from "./faceRecognitionData.controller";
import { FaceRecognitionDataResolver } from "./faceRecognitionData.resolver";

@Module({
  imports: [FaceRecognitionDataModuleBase],
  controllers: [FaceRecognitionDataController],
  providers: [FaceRecognitionDataService, FaceRecognitionDataResolver],
  exports: [FaceRecognitionDataService],
})
export class FaceRecognitionDataModule {}
