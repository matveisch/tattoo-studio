import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from './emailSender';

export async function POST(req: NextRequest) {
  try {
    const { email, message } = await req.json();
    await sendEmail({
      from: 'tattoo@laroselatelier.de',
      to: 'tattoo@laroselatelier.de',
      subject: 'New Client Message',
      text: `
      email: ${email},
      message: ${message}
     `,
    });

    return NextResponse.json(
      { message: 'message sent' },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error },
      {
        status: 400,
      }
    );
  }
}
