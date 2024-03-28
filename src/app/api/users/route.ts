import { NextResponse } from "next/server";

import { findAllUsers } from "@/utils/db/user";

export async function GET() {
  try {
    const answer = await findAllUsers();
    return NextResponse.json(answer);
  } catch (error) {}
}
