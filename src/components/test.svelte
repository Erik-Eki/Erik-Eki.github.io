<script>
  //To change component state and trigger a re-render, just assign to a locally declared variable.
  let test = "EBIN SVELTE TEST!!!!!";

  //export let person;
  // this will only set `name` on component creation
  // it will not update when `person` does
  //let { name } = person;

  let raw = "{}";
  let formatted = "";

  let prompt = "";
  //document.getElementById("prompt-field").value;

  let dataToSend = JSON.stringify({
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

  function testFunc() {
    console.log(prompt);

    formatted = prompt.toUpperCase;
  }
  //$: raw = formatted.toLocaleLowerCase

  //   async function sendData() {
  //     const response = await fetch("https://api.openai.com/v1/completions", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${process.env.API_KEY}`,
  //       },
  //       body: dataToSend,
  //     });

  //     data = await response.json();

  //     formatted = data["choices"][0]["text"];
  //     raw = JSON.stringify(data, null, 2);

  //     //document.getElementById("output").innerHTML = formatted;
  //     //document.getElementById("raw-output").innerHTML = JSON.stringify(data,null,2);
  //   }
</script>

<h2 style={{ display: "flex", color: "red" }}>{test}</h2>

<div>Prompt:</div>
<input
  id="prompt-field"
  type="text"
  placeholder="Type something..."
  bind:value={prompt}
/>
<button id="send-button" disabled={!prompt} on:click={testFunc}>Send</button>

<h2>Response</h2>
<pre id="output">
    {prompt}
    {formatted}
</pre>

<h3>Raw output</h3>
<pre id="raw-output">
    {raw}
    <!-- {JSON.stringify(data, null, 2)} -->
</pre>

<style>
  #send-button {
    padding: 10px;
    color: white;
    background: darkviolet;
    border-radius: 10px;
  }

  #prompt-field {
    padding: 10px;
    min-width: 100px;
    width: 300px;
    height: 50px;
    border-radius: 10px;
  }
</style>
