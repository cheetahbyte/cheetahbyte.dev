<script>
    import Project from "$lib/components/project.svelte";
</script>

<section id="#work">
    <h1 data-aos="fade-up">Work</h1>
    <p data-aos="fade-up">These are a selection of my projects.</p>
    <br /><br /><br />
    <div class="projects">
        <Project
            title="ermine"
            description="ermine is a micro webframework build in python. It was my first big project and is still in development. It offers an easy and unterstandable interface to the dev."
        />
        <Project
            title="roe-teer"
            description="roe-teer is a routing lib written in python. It's using a radix tree implementation."
        />
        <Project
            title="Platypus"
            description="Platypus is a file sharing client build in Python and Svelte. It was my first svelte project."
        />
    </div>
</section>

<style>
    div.projects {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 0px 0px;
        grid-template-areas:
            ". ."
            ". .";
    }
</style>
