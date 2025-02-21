(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();const s=document.getElementById("theme-toggle"),l=s.querySelector(".theme-icon");function d(e){document.documentElement.classList.toggle("dark",e),l.textContent=e?"🌞":"🌚",localStorage.setItem("theme",e?"dark":"light")}const c=localStorage.getItem("theme");c&&d(c==="dark");s.addEventListener("click",()=>{const e=!document.documentElement.classList.contains("dark");d(e)});const p=[{title:"Lead Developer",company:"Tecnotree",period:"May 2024 - Present",description:`Leading a Business Support Solution (BSS) product and directly contributing to the customer requirements.
        <br />                
        Collaborating on multiple bug fixes and migration of different packages.`,techStack:["ReactJS","NodeJS","ExpressJS","TypeScript","MongoDB"]},{title:"Software Developer",company:"Team Geek Solutions",period:"Sept 2021 - May 2024",description:`Developed and maintained web applications using React, NextJS, HTML, CSS, and JavaScript made apis using NodeJS and Python and deployed on AWS lambda and developed generic modules for frontend usage.
        <br />
        Developed an in-house hiring platform and a NodeJS compiler for test-case executions.
        <br />
        Replicated TypeForm for common usage in different frontend modules.`,techStack:["ReactJS","ExpressJS","MongoDB","Python","NodeJS","NextJS","Vite"]},{title:"Software Development Intern",company:"Team Geek Solutions",period:"Feb 2021 - Aug 2021",description:"Developed a fitness platform using NextJS, Material-UI, NodeJS, MySQL, featuring coach listings, user registration, package selection, appointment booking, and payment integration.",techStack:["ReactJS","ExpressJS","MongoDB","Python","NodeJS","NextJS","MySQL","Webpack"]}],m=[{title:"Movie Browser",description:"A Movie Browser which consumes TMDB API and explore different movies with several filters.",techStack:["ReactJS","TypeScript","TailwindCSS","Vite"],link:"https://movie-browser-tan-one.vercel.app/"},{title:"A TypeForm Component",description:"Replicated TypeForm with additional button presses and smooth navigation for common usage in different frontend modules.",techStack:["ReactJS","Material UI","Recoil"],link:"https://github.com/asharma991/typeform"},{title:"Open Source Contribution for Team Shiksha",description:"Working on multiple user stories including both front-end and back-end development, writing test cases, and currently developing a new design system.",techStack:["ReactJS","NodeJS","ExpressJS","MongoDB","Vite"],link:"https://github.com/TeamShiksha/openlogo/pulls?q=is:pr+author:asharma991+is:closed"},{title:"Reading List",description:"A simple app to explore the webpack and it's builder analyser plugin",techStack:["ReactJS","TypeScript","Webpack","SCSS"],link:"https://reading-list-tau-five.vercel.app/"}],u=document.querySelector(".experience-grid");p.forEach(e=>{const o=document.createElement("div");o.className="experience-card",o.innerHTML=`
        <h3>${e.title}</h3>
        <h4>${e.company}</h4>
        <p class="period">${e.period}</p>
        <p>${e.description}</p>
        <div class="tech-stack">
            ${e.techStack.map(i=>`<span class="tech-tag">${i}</span>`).join("")}
        </div>
    `,u.appendChild(o)});const h=document.querySelector(".projects-grid");m.forEach(e=>{const o=document.createElement("div");o.className="project-card",o.innerHTML=`
        <h3>${e.title}</h3>
        <p>${e.description}</p>
        <div class="tech-stack">
            ${e.techStack.map(i=>`<span class="tech-tag">${i}</span>`).join("")}
        </div>
        <div class="project-link">
            ${e.link?`<a href="${e.link}" target="_blank">🔗</a>`:""}
        </div>
    `,h.appendChild(o)});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(o){o.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});
