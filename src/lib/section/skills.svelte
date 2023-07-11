<script>
    import Skill from "$lib/components/skill.svelte";
</script>

<section style="padding-left: 20vw; padding-right: 20vw;" id="#skills">
    <h1 data-aos="fade-up">Skills</h1>
    <p data-aos="fade-up">These are some of my skills.</p>
    <br /><br /><br />
    <div class="skills">
        <Skill name="Python" />
        <Skill name="Svelte" />
        <Skill name="HTML5" />
        <Skill name="CSS3" />
        <Skill name="TypeScript" />
    </div>
    <div class="line" data-aos="fade-up"/>
    <div class="skills grid-1">
        <Skill name="FastAPI" />
        <Skill name="Git"/>
        <Skill name="Linux" />
        <Skill name="PostgreSQL" />
    </div>
</section>

<style>
    h1 {
        margin: 0;
    }
    div.skills {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 0px 0px;
        grid-template-areas:
            ". . ."
            ". . .";
    }

    .line {
        background-color: #666666;
        width: 100%;
        height: 1px;
        margin-top: 5vh;
        margin-bottom: 5vh;
    }
</style>
