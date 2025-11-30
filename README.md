# TruthGuardAI – Fake News & Forward Message Detector

An AI-powered application that analyzes news articles, forwarded messages, and social media posts to detect fake news and misinformation.

## Features

- 🔍 **Real-time Analysis**: Instantly analyze any text for credibility
- 🤖 **AI-Powered**: Uses Google's Gemini AI for intelligent fact-checking
- 🌐 **Multi-language Support**: Works with English, Tamil, Hindi, and more
- 📱 **Modern UI**: Beautiful, responsive interface with glassmorphism design
- 🎯 **Accurate Detection**: Classifies content as REAL, FAKE, or MISLEADING

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **AI**: Google Generative AI (Gemini)
- **Styling**: Vanilla CSS with modern design patterns

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Google Gemini API Key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sathyam-max/TruthGuardAI.git
   cd TruthGuardAI
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   GOOGLE_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   In a separate terminal, start the backend:
   ```bash
   node server/server.js
   ```

5. Open your browser and navigate to `http://localhost:5173`

## How It Works

1. User pastes news text, article, or forwarded message
2. Text is sent to the backend API
3. Gemini AI analyzes the content using a specialized prompt
4. Results are returned with:
   - Status (REAL/FAKE/MISLEADING)
   - Confidence level
   - Detailed reasoning
   - Advice for the user

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
