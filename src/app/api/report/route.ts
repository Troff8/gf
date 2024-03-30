import { createReport } from "@/utils/db/db";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
export const config = {
  api: {
    bodyParser: true,
  },
};

export async function POST(req: any, res: NextApiResponse) {
  try {
    const body = await req.json();
    const { title, description, href } = body;
    const userAgent = req.headers["user-agent"] || "null";
    const reportResponce = await createReport(
      title,
      description,
      userAgent,
      href
    );

    return NextResponse.json({
      message: "Report is create",
    });
  } catch (error) {
    console.log(error);
  }
}
