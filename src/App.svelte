<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let ready = false;
  onMount(() => ready = true);
</script>

<head>
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta2/css/all.css">
</head>

{#if ready}
  <main>
    <div id="container">
      <span style="font-size: 18px;">
        <a href='https://discord.com/users/320002284186763264' class="social"><p transition:fly="{{ y: 1000, duration: 1425 }}" id="discord" class="fab fa-discord mr-3 text-gray-500"></p></a>
        <a href="https://github.com/z4xi" class="social"><p transition:fly="{{ y: 1000, duration: 1450 }}" id="github" class="fab fa-github mr-3 text-gray-500"></p></a>
        <a href="https://paypal.me/z4xi" class="social"><p transition:fly="{{ y: 1000, duration: 1475 }}" id="paypal" class="fab fa-paypal text-gray-500"></p></a>
      </span>
        <h1 transition:fly="{{ y: 1000, duration: 1500 }}" on:introstart="{() => status = 'intro started'}" on:outrostart="{() => status = 'outro started'}" on:introend="{() => status = 'intro ended'}" on:outroend="{() => status = 'outro ended'}">
        Hey, I'm <span style="color:#b6abff;">z4xi</span>!
      </h1>
      <p transition:fly="{{ y: 1000, duration: 1850 }}" on:introstart="{() => status = 'intro started'}" on:outrostart="{() => status = 'outro started'}" on:introend="{() => status = 'intro ended'}" on:outroend="{() => status = 'outro ended'}">
        a <span style="color:#b6abff;">Lua</span> developer and <span style="color:#b6abff;">reverse engineer</span>.
      </p>
      <img src="https://discord.c99.nl/widget/theme-4/320002284186763264.png" class="discord-thingy" transition:fly="{{ y: 1000, duration: 2500 }}" on:introstart="{() => status = 'intro started'}" on:outrostart="{() => status = 'outro started'}" on:introend="{() => status = 'intro ended'}" on:outroend="{() => status = 'outro ended'}" />  
    </div>
  </main>
{/if}