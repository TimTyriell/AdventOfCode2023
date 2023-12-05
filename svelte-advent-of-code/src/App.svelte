<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Day1 from './lib/Day1.svelte'
</script>

<main>
  <h5>Advent of code + Svelte</h5>
  <div>
    <a href="https://adventofcode.com/" target="_blank" rel="noreferrer">
      <img src="https://repository-images.githubusercontent.com/112706767/160be980-3b1a-11eb-9dbe-439a40adfa99" class="logo" alt="Advent of Code Img" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  

  <div class="card">
    <Day1 />
  </div>

</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
