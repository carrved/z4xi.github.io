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
      <TextBlock ref="title" variant="display">z4xi</TextBlock>
    </div>
    <TextBlock variant="subtitle">lua dev, and cat enthousiast</TextBlock>

  <div class="buttons">
    <p in:scale> </p>
    <hr in:scale />
    <p in:scale> </p>
    <Buttons />
  </div>
  {/if}
</main>

<style>
  :global([ref=title]) {
    font-family: monospace;
  }
</style>
