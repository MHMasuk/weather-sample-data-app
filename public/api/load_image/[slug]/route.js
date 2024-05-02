import {NextResponse} from "next/server";

import axios from 'axios';

export async function GET(request, { params }) {
    const imageUrl = 'https://static-files.rimes.int/20240416/gfs_surface_humidity_20240416_0402202401.png';
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

    // if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    // }

    // Define the target URL where you want to redirect
    const slug_data = params.slug
    const image_data = slug_data.split(".")
    const redirectTo = `https://static-files.rimes.int/${image_data[0]}/${image_data[1]}.${image_data[2]}`;

    // const data = await response.data;

    return NextResponse.redirect(redirectTo)
}