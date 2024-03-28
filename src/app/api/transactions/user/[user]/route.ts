import { NextResponse } from "next/server";
import { findTransactions } from "@/utils/db/user";

export async function GET(req: Request, context: any) {
  try {
    const { params } = context;
    const answer = await findTransactions(params.user);
    return NextResponse.json({
      transactions: answer,
    });
  } catch (error) {}
}
