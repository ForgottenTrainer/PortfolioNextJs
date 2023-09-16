import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = req.body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['roy.gonz312@gmail.com', email],
      subject: subject,
      react: EmailTemplate({ firstName: 'John' }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
