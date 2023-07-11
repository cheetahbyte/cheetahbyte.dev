<script lang="ts">
    import { onMount } from "svelte";

    export let name: string = "";
    export let icon = "";
    onMount(() => {
        if (icon == "") {
            icon = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name.toLowerCase()}/${name.toLowerCase()}-original.svg`;
        }
    });

    const checkArch = () => {
        // if (name == "Linux") {
        //     window.alert("I use arch btw!")
        // }
    };

</script>

<div>
    <img src={icon} alt={name} />
    <h3 style="font-weight: 400;" on:mouseenter={e => checkArch()}>{name}</h3>
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: fit-content;
        margin: 10px;
        cursor: pointer;
    }

    img {
        width: 5vh;
        height: auto;
        filter: grayscale(100%);
        margin-right: 2vh;
    }

    div:hover img {
        filter: none;
    }

    div:hover h3 {
        font-weight: 500;
    }

    img,
    h3 {
        transition: all 500ms ease-in-out;
    }
</style>
