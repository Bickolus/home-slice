import dbConnect from "../../../../server/config/connection";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method} = req;

  dbConnect();

  if (method === "GET") {
    
  }

  if (method === "POST") {

  }
}