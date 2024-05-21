import { FaceRecognitionData as TFaceRecognitionData } from "../api/faceRecognitionData/FaceRecognitionData";

export const FACERECOGNITIONDATA_TITLE_FIELD = "id";

export const FaceRecognitionDataTitle = (
  record: TFaceRecognitionData
): string => {
  return record.id?.toString() || String(record.id);
};
