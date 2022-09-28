import { useCallback } from "react";
import { Form } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

export const Upload = ({
  bodyText,
  labelText,
  labelClassName,
  required,
  getImage,
}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      //console.log(acceptedFiles);
      getImage(acceptedFiles);
    },
    [getImage]
  );

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
      multiple: false,
      disabled:true
    });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div>
      {labelText && (
        <Form.Label className={labelClassName}>
          {labelText}
          {required && <span className="text6">*</span>}
        </Form.Label>
      )}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          <div
            className=" rounded cursor-pointer"
            style={{ border: "1px dashed" }}
          >
            {isDragActive && <div className=""></div>}
            <div>{bodyText}</div>
          </div>
        }
      </div>
      <ul>{acceptedFileItems}</ul>
    </div>
  );
};
