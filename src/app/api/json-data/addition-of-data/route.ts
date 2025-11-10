import * as fs from "fs";
import { NextRequest } from "next/server";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    console.log("Received data:", data);

    // File path
    const filePath = path.join(process.cwd(), "src/data/home.json");

    // Ensure file isn't empty
    let fileData = [];
    const fileContent = fs.readFileSync(filePath, "utf-8");

    if (fileContent.trim().length > 0) {
      fileData = JSON.parse(fileContent);
    }

    // Push new item
    fileData.push(data);

    // save back
    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));

    return new Response(
      JSON.stringify({ message: "Data added successfully", data }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ message: "Error adding data", error: String(error) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
