import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await fetch(
      "https://api.stability.ai/v2beta/stable-image/generate/core",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          prompt,
          output_format: "png",
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Stability API error: ${response.statusText}`);
    }

    const data = await response.json();

    // Stability returns base64 image
    res.json({ image: data.image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Image generation failed" });
  }
});

export default router;
