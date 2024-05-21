import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FaceRecognitionDataServiceBase } from "./base/faceRecognitionData.service.base";

@Injectable()
export class FaceRecognitionDataService extends FaceRecognitionDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
