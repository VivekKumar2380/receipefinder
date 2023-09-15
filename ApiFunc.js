import axios from "axios";
import { RECIPE_API_KEY,RECIPE_API_BASE_URL,GPT_API_BASE_URL,GPT_API_KEY } from "./config";
//  const RECIPE_API_KEY = "85c84cd58e5f577831f628fa5fa6390c";
//  const GPT_API_KEY =
//   "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";
//  const RECIPE_API_BASE_URL = "https://api.edamam.com/search";
//  const GPT_API_BASE_URL =
//   "https://api.openai.com/v1/engines/text-davinci-003/completions";

export const searchRecipes = async (ingredients) => {
  try {
    const response = await axios.get(RECIPE_API_BASE_URL, {
      params: {
        q: ingredients.join("+"),
        app_id: "464c84ba",
        app_key: RECIPE_API_KEY,
      },
    });

    return response.data.hits; // Return the list of recipes
  } catch (error) {
    console.error("Error searching for recipes:", error);
    throw error;
  }
};

export const chatWithGPT = async (message) => {
  try {
    const response = await axios.post(
      GPT_API_BASE_URL,
      {
        prompt: "You are a helpful recipe assistant and first job is greeting then tell steps " + message,
        max_tokens: 150,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GPT_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].text; // Return the GPT-3 response
  } catch (error) {
    console.error("Error chatting with GPT:", error);
    throw error;
  }
};
