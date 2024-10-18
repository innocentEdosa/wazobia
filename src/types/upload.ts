export enum UploadTypeEnum {
  IMAGE = "image",
}

export interface UseFileUploadParams {
  uploadFunc?: (file: File) => void;
  type?: UploadTypeEnum;
}
