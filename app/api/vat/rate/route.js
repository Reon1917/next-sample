import { NextResponse } from 'next/server';

export async function GET(request) {
    const rate = parseFloat(process.env.VAT_RATE);
    return NextResponse.json({ rate });
}

export async function POST(request) {
    const { price, rate } = await request.json();
    const vat = Math.round(price * rate * 100) / 100;
    return NextResponse.json({ vat });
}

export async function PUT(request) {
    return NextResponse.json({ message: "PUT" });
}