import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    const data = await request.formData();
    const file = data.get('file');

    if (!file || typeof file === 'string') {
        return NextResponse.json({ success: false, message: 'No file uploaded' });
    }

    // Create a FormData object and append the file
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: formData, // Send as FormData
    });

    if (response.ok) {
        console.log('File uploaded successfully');
        return NextResponse.json({ success: true });
    } else {
        console.error('Upload failed');
        return NextResponse.json({ success: false, message: 'Upload failed' });
    }
}
