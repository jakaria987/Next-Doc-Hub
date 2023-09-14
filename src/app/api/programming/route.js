
import { connect } from "../../Mongodb/db";
import { NextResponse } from "next/server";
 // Update the path to your db.js module

export async function GET(request) {
    try {
        const db = await connect();
        const blogs = db.collection('Programming Language');
        
        const query = {};
        const programmingDocs = await blogs.find(query).toArray();
        
        return NextResponse.json(programmingDocs);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.error(error.message);
    }
}
