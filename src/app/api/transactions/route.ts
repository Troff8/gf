import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    return NextResponse.json(req.url);
  } catch (error) {}
}
