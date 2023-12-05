<script>
  let inputText = "";
  let formattedArray;
  let inputArray;
  let overAllNumber = 0;
  const wordToNumberMap = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let I

  async function loadInputData() {
    const response = await fetch("inputDay1.txt");
    inputText = await response.text();
    inputArray = inputText.split("\n");
    formattedArray = convertSpelledLetter();
  }

  function convertSpelledLetter() {
    const resultArray = inputArray.map((element) => {
      Object.keys(wordToNumberMap).forEach((word) => {
        const regex = new RegExp(word);
        
      });
      return element;
    });
    return resultArray;
  }

  function solveProblem() {
    overAllNumber = 0;
    inputArray.forEach((element) => {
      let firstNumber = 0;
      let lastNumber;
      for (let i = 0; i < element.length; i++) {
        if (!isNaN(element[i])) {
          if (firstNumber == 0) {
            firstNumber = element[i];
          }
          lastNumber = element[i];
        }
      }
      overAllNumber += parseInt(String(firstNumber) + String(lastNumber), 10);
    });
  }

  // Load input data when the component is mounted
  import { onMount } from "svelte";
  onMount(async () => {
    await loadInputData();

    solveProblem();
  });
</script>

<div>
  <h1>Advent of Code Challenge</h1>

  {#if inputText}
    <h2>Input Data</h2>
    <pre>{formattedArray}</pre>
    <pre>{inputArray}</pre>
    <pre>{overAllNumber}</pre>
  {/if}

  <!-- Implement the rest of your component as needed -->
</div>
