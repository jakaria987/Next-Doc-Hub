
import { connect } from "@/app/Mongodb/db";
import { NextResponse } from "next/server";
 // Update the path to your db.js module

export async function GET(request) {
    try {
        const db = await connect();
        const blogs = db.collection('Blog');
        
        const query = {};
        const blog = await blogs.find(query).toArray();
        
        return NextResponse.json(blog);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.error(error.message);
    }
}
