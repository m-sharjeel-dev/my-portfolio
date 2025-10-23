import axios from 'axios';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';
export const runtime = 'nodejs';

// Function to create transporter
function getTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSKEY, 
    },
  });
}

// Helper function to send a message via Telegram
async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, {
      text: message,
      chat_id,
    });
    return res.data.ok;
  } catch (error) {
    console.error('Error sending Telegram message:', error.response?.data || error.message);
    return false;
  }
};

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

// Helper function to send an email via Resend (if configured) or Nodemailer
async function sendEmail(payload, message) {
  const { name, email, message: userMessage } = payload;
  const fromEmail = process.env.FROM_EMAIL || process.env.EMAIL_ADDRESS || 'onboarding@resend.dev';
  const resendApiKey = process.env.RESEND_API_KEY;
  
  // If RESEND_API_KEY is available, prefer Resend
  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: `Portfolio <${fromEmail}>`,
        to: fromEmail,
        subject: `New Message From ${name}`,
        text: message,
        html: generateEmailTemplate(name, email, userMessage),
        replyTo: email,
      });
      return true;
    } catch (error) {
      console.error('Resend email error:', error?.message || error);
      // fall through to Nodemailer as a fallback
    }
  }

  // Fallback: Nodemailer (Gmail)
  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `"Portfolio" <${fromEmail}>`,
      to: fromEmail,
      subject: `New Message From ${name}`,
      text: message,
      html: generateEmailTemplate(name, email, userMessage),
      replyTo: email,
    });
    return true;
  } catch (error) {
    console.error('Nodemailer email error:', error.message);
    return false;
  }
};

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    // Detect mail credentials: either Resend or Nodemailer creds
    const hasResend = !!process.env.RESEND_API_KEY;
    const hasNodemailer = !!(process.env.EMAIL_ADDRESS && process.env.GMAIL_PASSKEY);

    // Zero-config mode: if nothing is configured, accept the message without sending
    if (!hasResend && !hasNodemailer) {
      return NextResponse.json({
        success: true,
        message: 'Message received. Email service not configured yet.'
      }, { status: 200 });
    }

    const message = `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n\n${userMessage}\n\n`;

    // Send Telegram message only if both credentials are present
    let telegramSuccess = true;
    if (token && chat_id) {
      telegramSuccess = await sendTelegramMessage(token, chat_id, message);
    }

    // Send email
    const emailSuccess = await sendEmail(payload, message);

    if (emailSuccess) {
      return NextResponse.json({
        success: true,
        message: telegramSuccess
          ? 'Message and email sent successfully!'
          : 'Email sent successfully. Telegram notification was skipped or failed.',
      }, { status: 200 });
    }

    return NextResponse.json({
      success: false,
      message: 'Failed to send email.',
    }, { status: 500 });
  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred.',
    }, { status: 500 });
  }
};