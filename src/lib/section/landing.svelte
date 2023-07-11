<main>
    <div class="content" >
        <div class="text" data-aos="fade-up">
            <h1 class="username">cheetahbyte</h1>
            <h1 style="z-index: 1000; margin-top: 0;">student & developer.</h1>
            <p style="width: 70%; line-height: 20px;">Hey there, I am Leo! An eighteen-year-old developer with a focus on front-end and user interfaces based in Belgium. </p>
            <br>
        </div>

        <img src="/cheetah.png" alt="Gepard" data-aos="fade-up"/>
    </div>

</main>

<style>
    main {
        width: 60vw;
        height: 50vh;
        padding-left: 20vw;
        padding-right: 20vw;
        padding-bottom: 25vh;
        padding-top: 25vh;
        background-color: var(--whiter);
        overflow: hidden;
        position: relative;
        /* display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; */
    }

    /* .circle {
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--white);
        height: 30vw;
        width: 30vw;
        border-radius: 100%;
        display: flex;
        justify-content: end;
        align-items: center;
    } */

    img {
        height: 70vh;
        filter: grayscale(100%);
    }

    .content {
        margin-top: -11vh;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }


    .username {
        margin: 0;
        font-family: 'Dancing Script', cursive;
        color: var(--grey);
        font-size: 3rem;
    }
</style>
