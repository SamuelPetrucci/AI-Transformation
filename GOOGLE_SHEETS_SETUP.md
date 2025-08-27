# Google Sheets Integration Setup Guide

## Overview
This setup will automatically append all contact form submissions to a Google Sheet, giving you a CSV export of all leads, plus send email notifications via Resend.

## Step 1: Create a Google Sheet

1. **Go to [Google Sheets](https://sheets.google.com)**
2. **Create a new spreadsheet** called "AI Transformation Leads"
3. **Set up the headers** in row 1:
   ```
   A: Timestamp | B: Name | C: Email | D: Phone | E: Company | F: Consultation Type | G: Message | H: Source
   ```
4. **Make the sheet public** (for API access):
   - Click "Share" in the top right
   - Click "Change to anyone with the link"
   - Set to "Viewer"
   - Copy the link

## Step 2: Get Google Sheets API Key

1. **Go to [Google Cloud Console](https://console.cloud.google.com/)**
2. **Create a new project** or select existing one
3. **Enable Google Sheets API**:
   - Go to "APIs & Services" → "Library"
   - Search for "Google Sheets API"
   - Click "Enable"
4. **Create API Key**:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy the API key
5. **Restrict the API Key** (recommended):
   - Click on the API key
   - Under "Application restrictions" select "HTTP referrers"
   - Add your domain: `*.vercel.app/*` and `localhost:3000/*`
   - Under "API restrictions" select "Restrict key"
   - Select "Google Sheets API"

## Step 3: Get Your Sheet ID

From your Google Sheet URL, extract the Sheet ID:
```
https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit#gid=0
```

## Step 4: Update Environment Variables

Add these to your `.env.local`:

```env
# Resend Configuration
RESEND_API_KEY=re_hEvLEdyJ_KQRq9g8wPL2nJBGyMknNsaYA
FROM_EMAIL=onboarding@resend.dev
TO_EMAIL=info@aitransformationllc.com

# Google Sheets Configuration
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_SHEETS_API_KEY=your_api_key_here
```

## Step 5: Test the Integration

1. **Start your dev server**: `npm run dev`
2. **Submit a test form** on your website
3. **Check your email** - you should receive a notification
4. **Check the Google Sheet** - you should see a new row
5. **Check the console logs** for any errors

## Step 6: Deploy to Vercel

Add these environment variables in your Vercel project settings:

- `RESEND_API_KEY` = `re_hEvLEdyJ_KQRq9g8wPL2nJBGyMknNsaYA`
- `FROM_EMAIL` = `onboarding@resend.dev`
- `TO_EMAIL` = `info@aitransformationllc.com`
- `GOOGLE_SHEET_ID` = `your_sheet_id_here`
- `GOOGLE_SHEETS_API_KEY` = `your_api_key_here`

## What Happens When Someone Submits the Form

1. ✅ **Form data is validated**
2. ✅ **Email notification sent** to `info@aitransformationllc.com`
3. ✅ **New row added** to your Google Sheet
4. ✅ **Success message shown** to the user
5. ✅ **Form resets** automatically

## Google Sheet Structure

Your sheet will have these columns:
- **Timestamp**: When the form was submitted
- **Name**: Contact's full name
- **Email**: Contact's email address
- **Phone**: Contact's phone number (if provided)
- **Company**: Contact's company (if provided)
- **Consultation Type**: Selected consultation type
- **Message**: Contact's message (if provided)
- **Source**: Always "AI Transformation Website"

## Exporting Data

- **CSV Export**: File → Download → CSV
- **Excel Export**: File → Download → Microsoft Excel
- **PDF Export**: File → Download → PDF Document

## Benefits

✅ **Real-time updates** - Leads appear immediately  
✅ **Email notifications** - Instant alerts  
✅ **CSV export** - Easy data analysis  
✅ **No database needed** - Google handles storage  
✅ **Free** - Google Sheets is free  
✅ **Backup** - Data stored in Google's cloud  

## Troubleshooting

- **API Key not working**: Check if Google Sheets API is enabled
- **Sheet not updating**: Verify the Sheet ID is correct
- **Permission errors**: Make sure the sheet is shared publicly
- **Email not sending**: Check your Resend API key
- **Form not submitting**: Check browser console for errors

## Security Notes

- The Google Sheet is public (read-only for API)
- API key is restricted to your domain
- No sensitive data is stored in the code
- All data is encrypted in transit

## Next Steps

1. Create your Google Sheet
2. Set up Google Cloud Project
3. Get API key and Sheet ID
4. Update environment variables
5. Test locally
6. Deploy to Vercel

Your contact form will now automatically send email notifications AND add leads to your Google Sheet! 📊📧
