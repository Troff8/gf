import { NextResponse } from "next/server";

import { findUsers } from "@/utils/db/user";

export async function GET() {
  try {
    const answer = await findUsers();
    return NextResponse.json(answer);
  } catch (error) {}
}
