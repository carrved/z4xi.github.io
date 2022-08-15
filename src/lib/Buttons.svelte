<script>
    import { fade, scale } from 'svelte/transition';
    import * as Fluent from "fluent-svelte";

    let testOpen = false;

    let checked = false;
    const openTwitter = () => {
        window.open("https://twitter.com/z4xiii"); 
    }

    const openTwitch = () => {
        window.open("https://twitch.tv/z4xiiii"); 
    }

    const openGithub = () => {
        window.open("https://github.com/z4xi"); 
    }
</script>

<Fluent.Button on:click={openTwitter}>
    twitter
</Fluent.Button>

<Fluent.Button on:click={openTwitch}>
    twitch
</Fluent.Button>

<Fluent.Button on:click={openGithub}>
    github
</Fluent.Button>