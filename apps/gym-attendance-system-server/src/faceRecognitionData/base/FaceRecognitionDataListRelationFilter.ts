/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FaceRecognitionDataWhereInput } from "./FaceRecognitionDataWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FaceRecognitionDataListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FaceRecognitionDataWhereInput,
  })
  @ValidateNested()
  @Type(() => FaceRecognitionDataWhereInput)
  @IsOptional()
  @Field(() => FaceRecognitionDataWhereInput, {
    nullable: true,
  })
  every?: FaceRecognitionDataWhereInput;

  @ApiProperty({
    required: false,
    type: () => FaceRecognitionDataWhereInput,
  })
  @ValidateNested()
  @Type(() => FaceRecognitionDataWhereInput)
  @IsOptional()
  @Field(() => FaceRecognitionDataWhereInput, {
    nullable: true,
  })
  some?: FaceRecognitionDataWhereInput;

  @ApiProperty({
    required: false,
    type: () => FaceRecognitionDataWhereInput,
  })
  @ValidateNested()
  @Type(() => FaceRecognitionDataWhereInput)
  @IsOptional()
  @Field(() => FaceRecognitionDataWhereInput, {
    nullable: true,
  })
  none?: FaceRecognitionDataWhereInput;
}
export { FaceRecognitionDataListRelationFilter as FaceRecognitionDataListRelationFilter };
