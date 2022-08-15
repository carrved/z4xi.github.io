<script>
  import "fluent-svelte/theme.css";
  import Buttons from './lib/Buttons.svelte';
  import { TextBlock } from "fluent-svelte";
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';

  let ready = false;
  onMount(() => ready = true);
</script>

<main>
  {#if ready}
  <div>
    
  </div>
    <div class="content">
      <center><TextBlock ref="title" variant="display">z4xi</TextBlock></center> 
    </div>
  <p in:scale out:fade>lua dev, and cat enthousiast</p>

  <div class="buttons">
    <p in:scale out:fade> </p>
    <hr in:scale out:fade />
    <p in:scale out:fade> </p>
    <hr in:scale out:fade />
    <Buttons />
  </div>
  {/if}
</main>

<style>
  :global([ref=title]) {
    font-family: monospace;
  }
</style>
