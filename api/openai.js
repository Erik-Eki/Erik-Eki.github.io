import { Configuration, OpenAIApi } from "openai";

function OpenAI(data) {

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  const openAI = new OpenAIApi(configuration);

  console.log("Data to send to AI:", data)
  const response = openAI.createCompletion(data)

  console.log("Response from AI:", response)
  
  return response
}


export default OpenAI