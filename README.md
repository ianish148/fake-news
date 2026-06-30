<div align="center">
  <img src="public/logo.png" alt="Truth Seeker Logo" width="120" />

  # 🕵️‍♂️ Truth Seeker AI
  **RAW FACT-CHECKING. NO BS. REAL-TIME SEARCH.**

  [![Live Demo](https://img.shields.io/badge/Live_Demo-Truth_Seeker_AI-9333EA?style=for-the-badge&logo=vercel)](https://truthseeker-ai.vercel.app/)
  [![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google)](https://aistudio.google.com/)
  
  <p align="center">
    An ultra-fast, brutalist-designed AI fact-checking engine that investigates claims using real-time Google Search and the Gemini 2.5 Flash model.
  </p>
</div>

---

## ⚡ Why Truth Seeker?

Misinformation spreads fast. Truth Seeker spreads faster. 
Built with a sleek, high-contrast Cyberpunk/Brutalist UI, this application takes any suspicious claim, news headline, or rumor, and cross-references it against live internet data. 

It doesn't just guess—it provides a hard verdict, a confidence score, a detailed breakdown, and exact grounding sources with links.

## 🚀 Features

- **🔴 V3 Engine Active**: Powered by Google's incredibly fast `gemini-2.5-flash` model.
- **🌐 Real-Time Grounding**: Bypasses AI training cutoffs by directly querying Google Search.
- **🎨 Brutalist UI/UX**: Custom dark-gradient void aesthetics with glowing neon accents. Responsive, aggressive, and beautiful.
- **📊 Detailed Analytics**: Returns a definitive Verdict (True, Mixed, False), a 0-100% Confidence Score, and a step-by-step logic breakdown.
- **🔗 Source Citations**: Automatically extracts and links the exact articles used to verify the claim.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **AI Engine**: `@google/genai` SDK
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com)

## 💻 Run it Locally

Want to run the engine yourself? It takes less than 2 minutes.

### 1. Clone the repository
```bash
git clone https://github.com/ianish148/fake-news.git
cd fake-news
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure your Environment
Create a `.env.local` file in the root directory and add your Google Gemini API Key:
```env
GEMINI_API_KEY=your_api_key_here
```
*(You can get a free API key from [Google AI Studio](https://aistudio.google.com/))*

### 4. Ignite the Engine
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to start fact-checking.

## 🤝 Contributing
Contributions, issues, and feature requests are always welcome! Feel free to check the issues page.

---
<div align="center">
  <i>"In an era of deepfakes and rapid rumors, ground your reality with data."</i><br><br>
  Built by <a href="https://github.com/ianish148">Anish</a>
</div>
