import { FaceRecognitionDataWhereInput } from "./FaceRecognitionDataWhereInput";
import { FaceRecognitionDataOrderByInput } from "./FaceRecognitionDataOrderByInput";

export type FaceRecognitionDataFindManyArgs = {
  where?: FaceRecognitionDataWhereInput;
  orderBy?: Array<FaceRecognitionDataOrderByInput>;
  skip?: number;
  take?: number;
};
