import { NextApiRequest, NextApiResponse } from "next";
import AppError from "@/app/_utils/appError";

const catchAsync = (
  fn: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await fn(req, res);
    } catch (err) {
      // Ensure `err` is an instance of Error before further checks
      if (err instanceof AppError) {
        // Handle operational errors from AppError
        res.status(err.statusCode).json({
          status: err.status,
          message: err.message,
        });
      } else if (err instanceof Error) {
        // Handle non-operational errors that are instances of Error
        console.error("UNEXPECTED ERROR: ", err.message);
        res.status(500).json({
          status: "error",
          message: "Something went wrong on the server.",
        });
      } else {
        // Handle unknown errors (non-Error types, though rare)
        console.error("UNKNOWN ERROR: ", err);
        res.status(500).json({
          status: "error",
          message: "An unknown error occurred.",
        });
      }
    }
  };
};

export default catchAsync;
