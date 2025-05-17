import { NextResponse } from "next/server";
import { projects } from "./data";

export async function GET() {
  await new Promise((res) => setTimeout(res));
  return NextResponse.json(projects);
}
