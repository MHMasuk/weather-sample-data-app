import { headers } from 'next/headers'
import axios from "axios";
import {NextResponse} from "next/server";


export async function GET(request, { params }) {
    const host = headers().get('host')
    const protocol = headers().get('x-forwarded-proto')

    const res = await fetch(`${protocol}://${host}/20240430_info.json`, { cache: 'no-store' })

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return NextResponse.json(res.json())
}