<script>
    import { fade, scale } from 'svelte/transition';
    import * as Fluent from "fluent-svelte";

    let checked = false;
    let twitterFlyout = false;
    let twitchFlyout = false;
    let githubFlyout = false;

    const openTwitter = () => {
        window.open("https://twitter.com/z4xiii");
        twitterFlyout = true;
    }

    const openTwitch = () => {
        window.open("https://twitch.tv/z4xiiii");
        twitchFlyout = true;
    }

    const openGithub = () => {
        window.open("https://github.com/z4xi");
        githubFlyout = true;
    }
</script>

<Fluent.Button on:click={openTwitter}>
    twitter
</Fluent.Button>

<Fluent.ContentDialog bind:twitterFlyout>
	opening twitter
    <p> </p>
    <hr />
    <p> </p>
	<Fluent.Button variant="accent" on:click={() => (twitterFlyout = false)}>ok</Fluent.Button>
</Fluent.ContentDialog>

<Fluent.Button on:click={openTwitch}>
    twitch
</Fluent.Button>

<Fluent.ContentDialog bind:twitchFlyout>
	opening twitch
    <p> </p>
    <hr />
    <p> </p>
	<Fluent.Button variant="accent" on:click={() => (twitchFlyout = false)}>ok</Fluent.Button>
</Fluent.ContentDialog>

<Fluent.Button on:click={openGithub}>
    github
</Fluent.Button>

<Fluent.ContentDialog bind:githubFlyout>
	opening github
    <p> </p>
    <hr />
    <p> </p>
	<Fluent.Button variant="accent" on:click={() => (githubFlyout = false)}>ok</Fluent.Button>
</Fluent.ContentDialog>