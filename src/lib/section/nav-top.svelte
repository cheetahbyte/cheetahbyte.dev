<nav>
    <ul>
        <li>
            <a
                href="/"
                style="color: black; border-bottom: 2px solid black;"
                >Home</a
            >
        </li>
        <li><a href="#work">Skills</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>

<style>
    nav {
        z-index: 1000;
        position: fixed;
        /* position: absolute; */
        top: 3vh;
        right: 10vh;
    }

    ul {
        width: 20vw;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    ul li {
        list-style: none;
    }

    ul li a {
        text-transform: uppercase;
        text-decoration: none;
        color: var(--grey);
    }

    ul li a:active {
        font-style: italic;
        color: black;
    }
</style>
