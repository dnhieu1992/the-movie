import { NextResponse } from "next/server";

export async function GET(Request: any) {
  return NextResponse.json({title: "this is test api"});
}