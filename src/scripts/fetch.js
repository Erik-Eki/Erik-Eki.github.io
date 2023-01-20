async function sendResponse() {
  const prompt = document.getElementById("prompt-field").value;
  //(<HTMLInputElement>document.getElementById("prompt-field")).value;
  //document.getElementById("prompt-field").value;

  const dataToSend = JSON.stringify({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 100,
    temperature: 0,
    // "top_p": 1,
    // "n": 1,
    // "stream": false,
    // "logprobs": null,
    //"stop": "\n"
  });

  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    body: dataToSend,
  });

  const data = await response.json();

  const formatted = data["choices"][0]["text"];

  document.getElementById("output").innerHTML = formatted;
  document.getElementById("raw-output").innerHTML = JSON.stringify(
    data,
    null,
    2
  );
}

document.getElementById("send-button").addEventListener("click", sendResponse);
