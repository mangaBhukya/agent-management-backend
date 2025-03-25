import multer from "multer";

const storage = multer.memoryStorage();
const fileFilter = (req: any, file: any, cb: any) => {
  const allowedTypes = ["text/csv", 
                         "application/vnd.ms-excel", 
                         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only CSV, XLS, and XLSX are allowed."), false);
  }
};

const upload = multer({ storage, fileFilter });

export default upload;