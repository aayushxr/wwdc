import { NextResponse } from "next/server";

export async function POST(req:Request){
    try{
        const {pin} = await req.json()

        if(pin === "sFi$ecure75"){
            return NextResponse.json("success",{status:200})
        }
        return NextResponse.json("no auth",{status:200})

    } catch(e){
        return NextResponse.json("error",{status:500})
    }
}