import connectToDB from "@/lib/mongodb";
import Education from "@/lib/models/Education";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
    try {
        await connectToDB();
        const extractData = await req.json();
        const saveData = await Education.create(extractData);

        if (saveData) {
            return NextResponse.json({
                success: true,
                message: "Data saved successfully",
            });
        } else {
            return NextResponse.json({
                success: false,
                message: "Something goes wrong !Please try again",
            });
        }
    } catch (e) {
        console.log(e);

        return NextResponse.json({
            success: false,
            message: "Something goes wrong !Please try again",
        });
    }
}