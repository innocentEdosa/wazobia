import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { UploadTypeEnum, UseFileUploadParams } from "../types/upload";

const acceptableUploadType: Record<
  UploadTypeEnum,
  { [key: string]: string[] }
> = {
  [UploadTypeEnum.IMAGE]: {
    "image/*": [".jpg", ".jpeg", ".png", ".gif", ".svg", ".webp"],
  },
};

const useFileUpload = (params?: UseFileUploadParams) => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | undefined>();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      setSelectedFile(file);
      params?.uploadFunc?.(file);

      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    },
    [params?.uploadFunc]
  );

  const clear = () => {
    setSelectedFile(undefined);
    setPreview(undefined);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: params?.type ? acceptableUploadType[params.type] : undefined,
  });

  return {
    getRootProps,
    getInputProps,
    preview,
    clear,
    selectedFile,
  };
};

export default useFileUpload;
