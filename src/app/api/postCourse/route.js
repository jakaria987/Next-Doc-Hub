import { connect } from "@/app/Mongodb/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
      const db = await connect();
      const blogs = db.collection('Courses');
      
      const requestBody = await request.json();
  
      // Insert the data into the database
      const result = await blogs.insertOne(requestBody);
  
      // Return a success response with the inserted data
      return NextResponse.json(result);
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.error(error.message);
    }
  }
 