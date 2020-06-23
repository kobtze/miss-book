
export default {
    template: `
    <section class="app-main about-us">
        <h2>About Us</h2>
        <div class="flex team-member">
            <div>
                <img class="mx-150 rounded-circle team-member-pic" src="img/team/4.jpg" alt="">
            </div>
            <div>
                <h1>Kobi 'Kobtze' Donner</h1>
                <p class="text-muted">Frontend Web Developer</p>
                <p class="large text-muted  about-description">Curious, ambitious & tech-savvy individual with great English,
                social and collaborative skills and thorough handson experience in web development looking to join an exciting R&D
                environment to make this world a better place.</p>
            </div>
        </div>
    </section>
    `,
    created() {
        console.log('About-page created');
    }
}
