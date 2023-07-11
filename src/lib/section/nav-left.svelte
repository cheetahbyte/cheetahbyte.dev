<script lang="ts">
    import { onMount } from "svelte";

    onMount(() => {
        const copyright = document.getElementById("copyright") as HTMLElement;
        copyright.innerText = "©" + new Date().getFullYear().toString();
    });
</script>

<nav data-aos="fade-left">
    <div class="s">
        <a href="https://discord.gg/fP6nhSKkA2" id="discord">DC</a>
        <!-- <a href="/">TW</a> -->
        <a href="https://github.com/cheetahbyte">GH</a>
        <div class="line" />
    </div>
    <div class="s" style="justify-content: end;">
        <p
            id="copyright"
            style="transform: rotate(-90deg); margin: 0; height: 10px; color: none; "
        />
    </div>
</nav>

<style>
    nav {
        z-index: 1000;
        position: fixed;
        /* position: absolute; */
        left: 0;
        display: flex;
        flex-direction: column;
        height: 84vh;
        padding-top: 8vh;
        padding-bottom: 8vh;
        padding-left: 5vh;
        font-size: 10px;
        letter-spacing: 5px;
        filter: invert(1);
        mix-blend-mode: difference;
    }

    nav .s {
        height: 50%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        width: 12px;
    }

    nav .s a {
        mix-blend-mode: difference;

        transform: rotate(-90deg);
        text-decoration: none;
    }
    nav .s a:hover {
        text-decoration: line-through;
    }

    .line {
        height: 20vh;
        width: 1px;
        background-color: black;
    }
</style>
