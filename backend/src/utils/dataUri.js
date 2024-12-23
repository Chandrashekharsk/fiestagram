import DatauriParser from "datauri/parser.js";
import path from "path";

const parser = new DatauriParser();

const getDataUri = (file) =>{
  // extension name
  const extName = path.extname(file.originalname).toString();
  return parser.format(extName, file.buffer).content;
}
export default getDataUri;
