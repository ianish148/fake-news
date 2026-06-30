"use client";

import { useState } from "react";
import { Search, AlertTriangle, CheckCircle, HelpCircle, XCircle, ExternalLink, Loader2 } from "lucide-react";

type Verdict = "True" | "Mostly True" | "Mixed" | "Mostly False" | "False" | "Unverified";

interface VerificationResult {
  verdict: Verdict;
  confidence: number;
  analysis: string;
  sources: { title: string; url: string; snippet: string }[];
}

export default function Home() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [error, setError] = useState("");

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Failed to verify text");
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || "An error occurred during verification.");
    } finally {
      setLoading(false);
    }
  };

  const getVerdictColor = (verdict: Verdict) => {
    switch (verdict) {
      case "True":
      case "Mostly True":
        return "bg-[#22C55E]"; // Success Green
      case "False":
      case "Mostly False":
        return "bg-[#EF4444]"; // False Red
      case "Mixed":
      case "Unverified":
        return "bg-[#F59E0B]"; // Warning Amber
      default:
        return "bg-white";
    }
  };

  const getVerdictIcon = (verdict: Verdict) => {
    switch (verdict) {
      case "True":
      case "Mostly True":
        return <CheckCircle className="w-16 h-16 mb-4" />;
      case "False":
      case "Mostly False":
        return <XCircle className="w-16 h-16 mb-4" />;
      default:
        return <HelpCircle className="w-16 h-16 mb-4" />;
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center selection:bg-black selection:text-white pb-8">
      
      {/* Header (Transparent on gradient) */}
      <div className="w-full py-16 px-4 relative overflow-hidden flex flex-col items-center border-b-4 border-black">
        {/* Purple glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#9333EA]/30 to-[#3B82F6]/30 blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 text-center space-y-6 max-w-6xl w-full">
          <div className="inline-block brutal-card bg-white text-black px-4 py-2 mb-4">
            <span className="font-mono font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#9333EA]" />
              V3_ENGINE_ACTIVE
            </span>
          </div>
          <h1 className="text-[clamp(4rem,10vw,7.5rem)] font-bold leading-none uppercase -ml-2">
            Truth<br />Seeker
          </h1>
          <p className="text-xl font-bold max-w-2xl mx-auto border-t-4 border-b-4 border-black py-4 bg-[#9333EA] text-white">
            RAW FACT-CHECKING. NO BS. REAL-TIME SEARCH.
          </p>
        </div>
      </div>

      <div className="w-full max-w-6xl flex flex-col gap-8 mt-8 px-4 md:px-8">

        {/* Form Container */}
        <div>
          <form onSubmit={handleVerify} className="brutal-card bg-white text-black p-6 md:p-8 flex flex-col gap-6">
            <div>
              <label htmlFor="claim" className="font-mono font-bold uppercase tracking-widest block mb-2">
                [ INPUT_CLAIM_DATA ]
              </label>
              <textarea
                id="claim"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste suspicious news or claims here..."
                className="brutal-input w-full min-h-[200px] p-4 text-lg md:text-xl font-medium resize-y bg-[#f4f4f4]"
              />
            </div>
            
            {error && (
              <div className="brutal-card bg-[#EF4444] text-white p-4 font-bold flex items-center gap-4">
                <AlertTriangle className="w-6 h-6 flex-shrink-0" />
                <p>{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !text.trim()}
              className="brutal-button w-full flex justify-center items-center py-5 px-4 bg-[#3B82F6] text-white text-xl font-bold uppercase tracking-widest hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                  ANALYZING_DATA...
                </>
              ) : (
                "VERIFY_NOW"
              )}
            </button>
          </form>
        </div>

        {/* Results Container */}
        {result && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4 animate-in slide-in-from-bottom-8 fade-in duration-500">
            
            {/* Primary Verdict Card */}
            <div className={`lg:col-span-1 brutal-card hover-shake p-8 flex flex-col items-center justify-center text-center text-white ${getVerdictColor(result.verdict)}`}>
              {getVerdictIcon(result.verdict)}
              <h2 className="text-4xl md:text-5xl font-bold uppercase mb-2">
                {result.verdict}
              </h2>
              <div className="font-mono font-bold text-sm uppercase tracking-wider bg-black px-4 py-2 mt-4 inline-block">
                Final_Verdict
              </div>
            </div>

            {/* Stats & Confidence */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Confidence Card */}
              <div className="brutal-card hover-shake bg-[#22C55E] text-black p-6 flex flex-col items-center justify-center text-center space-y-4">
                <div className="text-6xl font-bold">{result.confidence}%</div>
                <h3 className="font-mono font-bold text-sm uppercase tracking-wider bg-black text-white px-3 py-1">
                  Confidence
                </h3>
              </div>

              {/* Quick Stats */}
              <div className="brutal-card hover-shake bg-[#9333EA] text-white p-6 flex flex-col justify-center space-y-6">
                <div>
                  <span className="font-mono font-bold text-xs uppercase block mb-1">Sources_Found</span>
                  <span className="text-4xl font-bold">{result.sources?.length || 0}</span>
                </div>
                <div>
                  <span className="font-mono font-bold text-xs uppercase block mb-1">Response_Time</span>
                  <span className="text-4xl font-bold">~1.2s</span>
                </div>
              </div>
            </div>

            {/* Explanation Card */}
            <div className="lg:col-span-3 brutal-card hover-shake bg-white text-black p-6 md:p-8">
              <h3 className="font-mono font-bold text-xl uppercase mb-6 flex items-center gap-3 border-b-4 border-black pb-4">
                <span className="w-4 h-4 bg-black inline-block"></span>
                Detailed_Analysis
              </h3>
              <p className="text-lg md:text-xl font-medium leading-relaxed whitespace-pre-wrap">
                {result.analysis}
              </p>
            </div>

            {/* Sources List */}
            {result.sources && result.sources.length > 0 && (
              <div className="lg:col-span-3 brutal-card hover-shake bg-white text-black p-6 md:p-8">
                <h3 className="font-mono font-bold text-xl uppercase mb-6 flex items-center gap-3 border-b-4 border-black pb-4">
                  <span className="w-4 h-4 bg-black inline-block"></span>
                  Grounding_Sources
                </h3>
                <ul className="space-y-4">
                  {result.sources.map((source, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="flex-shrink-0 w-8 h-8 bg-black text-white font-bold flex items-center justify-center mr-4 mt-1 border-2 border-black group-hover:bg-[#3B82F6] group-hover:border-[#3B82F6] transition-colors">
                        {index + 1}
                      </span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full border-2 border-transparent hover:border-black p-2 -m-2 transition-all"
                      >
                        <h4 className="font-bold text-lg mb-1 flex items-center justify-between group-hover:text-[#3B82F6]">
                          <span className="line-clamp-1">{source.title}</span>
                          <ExternalLink className="w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h4>
                        <p className="font-mono text-sm opacity-80 line-clamp-2">
                          {source.snippet}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        )}
        
      </div>
    </main>
  );
}
