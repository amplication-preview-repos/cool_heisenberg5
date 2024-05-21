/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FaceRecognitionDataService } from "../faceRecognitionData.service";
import { FaceRecognitionDataCreateInput } from "./FaceRecognitionDataCreateInput";
import { FaceRecognitionData } from "./FaceRecognitionData";
import { FaceRecognitionDataFindManyArgs } from "./FaceRecognitionDataFindManyArgs";
import { FaceRecognitionDataWhereUniqueInput } from "./FaceRecognitionDataWhereUniqueInput";
import { FaceRecognitionDataUpdateInput } from "./FaceRecognitionDataUpdateInput";

export class FaceRecognitionDataControllerBase {
  constructor(protected readonly service: FaceRecognitionDataService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FaceRecognitionData })
  async createFaceRecognitionData(
    @common.Body() data: FaceRecognitionDataCreateInput
  ): Promise<FaceRecognitionData> {
    return await this.service.createFaceRecognitionData({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [FaceRecognitionData] })
  @ApiNestedQuery(FaceRecognitionDataFindManyArgs)
  async faceRecognitionDataItems(
    @common.Req() request: Request
  ): Promise<FaceRecognitionData[]> {
    const args = plainToClass(FaceRecognitionDataFindManyArgs, request.query);
    return this.service.faceRecognitionDataItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FaceRecognitionData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async faceRecognitionData(
    @common.Param() params: FaceRecognitionDataWhereUniqueInput
  ): Promise<FaceRecognitionData | null> {
    const result = await this.service.faceRecognitionData({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FaceRecognitionData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFaceRecognitionData(
    @common.Param() params: FaceRecognitionDataWhereUniqueInput,
    @common.Body() data: FaceRecognitionDataUpdateInput
  ): Promise<FaceRecognitionData | null> {
    try {
      return await this.service.updateFaceRecognitionData({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FaceRecognitionData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFaceRecognitionData(
    @common.Param() params: FaceRecognitionDataWhereUniqueInput
  ): Promise<FaceRecognitionData | null> {
    try {
      return await this.service.deleteFaceRecognitionData({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}