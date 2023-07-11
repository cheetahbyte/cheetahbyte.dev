<script lang="ts">
    export let title: string = ""
    export let description: string = ""
</script>

<div class="project">
    <h1 style="text-transform: capitalize;">{title}</h1>
    <p>
        {description}
    </p>
    <a href="https://github.com/cheetahbyte/{title}">View project</a>
</div>

<style>
    .project {
        padding: 1vw;
    }
</style>