# AI Diagnostic Setup Guide

This guide explains how to set up the Gemini AI integration for intelligent part recommendations based on appliance diagnostics.

## Prerequisites

You need a Google Gemini API key to use the AI diagnostic feature.

## Step 1: Get Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click on "Get API Key" or "Create API Key"
4. Copy your API key

## Step 2: Configure the Backend

1. Open `backend/.env` file
2. Find the line: `GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE`
3. Replace `YOUR_GEMINI_API_KEY_HERE` with your actual API key
4. Save the file

Example:
```env
GEMINI_API_KEY=AIzaSyB1234567890abcdefghijklmnopqrstuvwx
```

## Step 3: Install Required Packages

### Backend
Open terminal in the `backend` folder and run:

```bash
# Activate virtual environment (if not already active)
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install the new package
pip install google-generativeai==0.8.3
```

Or simply reinstall all requirements:
```bash
pip install -r requirements.txt
```

### Frontend
The frontend doesn't need any additional packages. The axios library is already configured.

## Step 4: Restart the Backend Server

1. Stop the Django server (Ctrl+C)
2. Start it again:
```bash
python manage.py runserver
```

## How It Works

1. User completes the diagnostic stepper by selecting:
   - Appliance type (washing machine, dishwasher, etc.)
   - Symptoms (water leak, abnormal noise, etc.)

2. Frontend sends this data to: `POST /api/products/ai_diagnostic/`

3. Backend:
   - Fetches available products from inventory
   - Sends diagnostic info + inventory to Gemini AI
   - Receives AI analysis with:
     - Detailed diagnosis
     - Probable causes (with probability ratings)
     - Recommended product from inventory
     - Alternative products
     - Installation tips

4. Frontend displays the results in the AI Result Modal

## Testing

1. Go to the diagnostic page
2. Select an appliance (e.g., "Dishwasher")
3. Select symptoms (e.g., "Water leak", "Abnormal noise")
4. Click "Launch diagnostic"
5. Wait for AI analysis
6. View recommended parts and diagnosis

## Troubleshooting

### Error: "GEMINI_API_KEY not configured"
- Make sure you added the API key to `backend/.env`
- Restart the Django server

### Error: "google.generativeai module not found"
- Run: `pip install google-generativeai==0.8.3`
- Restart the Django server

### Error: 429 or quota exceeded
- You've exceeded the free tier limit
- Wait for the quota to reset (usually daily)
- Or upgrade your Google AI API plan

### No products recommended
- Make sure you have products in the database
- Run: `python manage.py loaddata seed_data.json` (if available)
- Or add products through Django admin

## API Endpoint Details

### Request
```json
POST /api/products/ai_diagnostic/
{
  "appliance": "dishwasher",
  "symptoms": ["Water leak", "Abnormal noise"]
}
```

### Response
```json
{
  "query": "Dishwasher: Water leak, Abnormal noise",
  "diagnosis": "Detailed analysis of the problem...",
  "causes": [
    {
      "id": "cause1",
      "title": "Defective drain pump",
      "probability": "high",
      "description": "The pump may be damaged..."
    }
  ],
  "recommendedProduct": {
    "id": 1,
    "name": "Universal drain pump",
    "price": "24.90",
    "image": "...",
    ...
  },
  "alternatives": [...],
  "installationTips": "Installation instructions..."
}
```

## Notes

- The free tier of Gemini API has rate limits
- The AI analyzes up to 50 products from your inventory
- Responses are returned in JSON format
- The system falls back to basic product search if no specific recommendation is made

## Support

For issues or questions, check:
- [Google Gemini API Documentation](https://ai.google.dev/docs)
- Django logs: Check console output from `python manage.py runserver`
- Frontend logs: Check browser console (F12)
