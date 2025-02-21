const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('.theme-icon');

function setTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    themeIcon.textContent = isDark ? '🌞' : '🌚';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme === 'dark');
}

themeToggle.addEventListener('click', () => {
    const isDark = !document.documentElement.classList.contains('dark');
    setTheme(isDark);
});

const experiences = [
    {
        title: 'Lead Developer',
        company: 'Tecnotree',
        period: 'May 2024 - Present',
        description: `Leading a Business Support Solution (BSS) product and directly contributing to the customer requirements.
        <br />                
        Collaborating on multiple bug fixes and migration of different packages.`,
        techStack: ['ReactJS', 'NodeJS', 'ExpressJS', 'TypeScript', 'MongoDB']
    },
    {
        title: 'Software Developer',
        company: 'Team Geek Solutions',
        period: 'Sept 2021 - May 2024',
        description: `Developed and maintained web applications using React, NextJS, HTML, CSS, and JavaScript made apis using NodeJS and Python and deployed on AWS lambda and developed generic modules for frontend usage.
        <br />
        Developed an in-house hiring platform and a NodeJS compiler for test-case executions.
        <br />
        Replicated TypeForm for common usage in different frontend modules.`,
        techStack: ['ReactJS', 'ExpressJS', 'MongoDB', 'Python', 'NodeJS', 'NextJS', 'Vite']
    },
    {
        title: 'Software Development Intern',
        company: 'Team Geek Solutions',
        period: 'Feb 2021 - Aug 2021',
        description: 'Developed a fitness platform using NextJS, Material-UI, NodeJS, MySQL, featuring coach listings, user registration, package selection, appointment booking, and payment integration.',
        techStack: ['ReactJS', 'ExpressJS', 'MongoDB', 'Python', 'NodeJS', 'NextJS', 'MySQL', 'Webpack']
    },
];

const projects = [
    {
        title: 'Movie Browser',
        description: 'A Movie Browser which consumes TMDB API and explore different movies with several filters.',
        techStack: ['ReactJS', 'TypeScript', 'TailwindCSS', 'Vite'],
        link: 'https://movie-browser-tan-one.vercel.app/'
    },
    {
        title: 'A TypeForm Component',
        description: 'Replicated TypeForm with additional button presses and smooth navigation for common usage in different frontend modules.',
        techStack: ['ReactJS', 'Material UI', 'Recoil'],
        link: 'https://github.com/asharma991/typeform'
    },
    {
        title: 'Open Source Contribution for Team Shiksha',
        description: `Working on multiple user stories including both front-end and back-end development, writing test cases, and currently developing a new design system.`,
        techStack: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Vite'],
        link: 'https://github.com/TeamShiksha/openlogo/pulls?q=is:pr+author:asharma991+is:closed'
    },
    {
        title: 'Reading List',
        description: `A simple app to explore the webpack and it's builder analyser plugin`,
        techStack: ['ReactJS', 'TypeScript', 'Webpack', 'SCSS'],
        link: 'https://reading-list-tau-five.vercel.app/'
    }
]

const experienceGrid = document.querySelector('.experience-grid');
experiences.forEach(exp => {
    const card = document.createElement('div');
    card.className = 'experience-card';
    card.innerHTML = `
        <h3>${exp.title}</h3>
        <h4>${exp.company}</h4>
        <p class="period">${exp.period}</p>
        <p>${exp.description}</p>
        <div class="tech-stack">
            ${exp.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
    `;
    experienceGrid.appendChild(card);
});

const projectsGrid = document.querySelector('.projects-grid');
projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-stack">
            ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-link">
            ${project.link ? `<a href="${project.link}" target="_blank">🔗</a>` : ''}
        </div>
    `;
    projectsGrid.appendChild(card);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});