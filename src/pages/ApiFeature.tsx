import { useState } from "react";

import { genAI } from "../lib/gemini";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ApiFeature = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChat = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      setResponse(text);
    } catch (error) {
      console.log(error);
      alert("Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section className="py-20 min-h-screen px-4 lg:px-20">
        <h1 className="text-3xl font-bold text-center mb-8">
          Ask us Anything, powered by Gemini
        </h1>

        <Card className="max-w-3xl mx-auto p-6 space-y-4">
          <Textarea
            placeholder="Ask something..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button onClick={handleChat} disabled={loading}>
            {loading ? "Thinking..." : "Ask Gemini"}
          </Button>
          <div className="border rounded p-4 bg-gray-100 whitespace-pre-wrap text-sm text-gray-800">
            {response || "Answer will appear here"}
          </div>
        </Card>
      </section>
      <Footer />
    </>
  );
};

export default ApiFeature;
