// ================SPLASH SCREEN ANIMATION=============

// splash screen logo fades in
let tl = gsap.timeline();
tl.from(".splash img", {
    opacity: 0,
    duration: 2
});

// splash screen logo disappears
tl.to(".splash img", {
    scale: 0,
    opacity: 0,
    duration: .5,
    delay: 1
});

// removes splash after logo animation is done
setTimeout(() => {
    document.querySelector(".splash").style.display = "none";
}, 3500);


// ===================HEADER======================

// fade in logo
tl.from("header .logo", {
    opacity: 0,
    duration: .5
});

// header buttons appear
tl.from("header ul a", {
    opacity: 0,
    y: -10,
    duration: .4,
    stagger: .1
});

// change header style based on scroll
const header = document.querySelector("header");
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        header.style.boxShadow = "0 0 10px rgba(128, 128, 128, 0.255)";
        header.style.backgroundColor = "var(--black)";
    } else {
        header.style.boxShadow = "none";
        header.style.backgroundColor = "transparent"
    }
});


// ==================MAIN======================

tl.from("main .main-text", {
    opacity: 0,
    y: 30,
    duration: .5,
    stagger: .1
});

tl.from(".left-social, .right-social", {
    opacity: 0,
    duration: .5
});

// =================ABOUT===================

gsap.from("#about h2, #about .content", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: "#about",
        start: "top 50%"
    }
})

// ================JOBS==================

gsap.from("#jobs h2, #jobs .content", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: "#jobs",
        start: "top 50%"
    }
})

const jobs = [
    {
        "name": "B. P. Poddar Institute of Management and Technology",
        "link": "https://bppimt.ac.in/",
        "designation": "Software Developer",
        "duration": "October 2022 - Present",
        "Description": `<li data-icon="🟢">Consists of all the micro-projects assigned under <a href="https://makautexam.net/">MAKAUT</a> curriculum.</li>
                        <li data-icon="🟢">Developed a Text-to-Speech(TTS) Software using Python Libraries in PCC-CS393(IT Workshop).</li>
                        <li data-icon="🟢">Currently working on an Online Transport System in ESC591(Software Engineering Lab) using HTML, Vanila CSS, JavaScript. Using Firebase for authentication, storage and realtime database. Google Maps API for finding shortest distance between location and destination and also to track current location.</li>
                        <li data-icon="🟢"><span>Skills: </span>Python, HTML, CSS, JavaScript, Firebase</li>`
    },
    {
        "name": "Quantum Dot Communications",
        "link": "https://theqdc.in/",
        "designation": "Intern",
        "duration": "August 2024 - September 2024",
        "Description": `<li data-icon="🟢">Designed, Developed and Deployed the landing page of Quantum Dot Communications, a Creative Agency.</li>
                        <li data-icon="🟢">Extensive use of animations in order to make the website more interactive and easy to understand.</li>
                        <li data-icon="🟢"><span>Skills: </span>HTML, CSS, JavaScript, LocomotiveJS, GSAP, SheryJS, AnimeJS</li>`
    },
    {
        "name": "Artificial Intelligence and Sustainable Computing (AISC) 2024",
        "link": "https://aisc2024.vercel.app/",
        "designation": "Multimedia Developer",
        "duration": "September 2023 - July 2024",
        "Description": `<li data-icon="🟢">Designed, Developed and Deployed the landing page of International conference on Artificial Intelligence and Sustainable Computing (AISC) 2024 organised by BPPIMT, Kolkata and Calcutta University.</li>
                        <li data-icon="🟢">Provided important information regarding the conference like the guidelines, schedule, call for papers(CFP), etc.</li>`
    },
    {
        "name": "TechStorm 2.24",
        "link": "https://techstorm-2-24.vercel.app/",
        "designation": "Web Developer & Volunteer",
        "duration": "February 2024 - March 2024",
        "Description": `<li data-icon="🟢">Designed, Developed and Deployed the landing page of TechStorm 2.24, the annual tech fest of BPPIMT.</li>
                        <li data-icon="🟢">Simple frontend project with details of various events and their corresponding registration links provided.</li>
                        <li data-icon="🟢">Volunteered in organising App Mania - App Development Competition.</li>`
    },
    {
        "name": "Association for Computing Machinery (ACM)",
        "link": "https://acm-bppimt.vercel.app/",
        "designation": "Web Master(for '24-25)",
        "duration": "July 2023 - Present",
        "Description": `<li data-icon="🟢">Designed, Developed and Deployed the landing page of Association of Computing Machinery(ACM) BPPIMT Student Chapter.</li>
                        <li data-icon="🟢">Gives brief detail about the ACM and the benefits of joining ACM.</li>
                        <li data-icon="🟢">Organized multiple events(both online & offline) to promote software development and problem solving skills.</li>`
    },
    {
        "name": "Google Developer Student Club BPPIMT",
        "link": "https://google-dsc-bppimt.netlify.app/",
        "designation": "App Core Member",
        "duration": "August 2024 - July 2023",
        "Description": `<li data-icon="🟢">Became a part of the GDSC App Team.</li>
                        <li data-icon="🟢">Organised workshops and seminars to promote app development among the new comers.</li>
                        <li data-icon="🟢">Served and recognized: <a href="https://drive.google.com/file/d/1rRryTTL3ebB-HGfbjNZa-w-Ukh_jie1C/view?usp=sharing">Certificate</a></li>
                        <li data-icon="🟢"><span>Skills: </span>XML, Java, Kotlin, Dart</li>`
    },
];
const jobList = document.getElementById("job-list");

for(let i = 0; i < jobs.length; i++){
    let job = jobs[i];
    let jobItem = document.createElement("li");
    if(i == 0){
        jobItem.setAttribute("class", "active");
        activeJob(job);
    }
    jobItem.innerText = job.name;
    jobList.appendChild(jobItem);

    jobItem.onclick = () => {
        document.querySelectorAll("#job-list li").forEach((element) => {
            element.removeAttribute("class");
        });
        jobItem.setAttribute("Class", "active");
        activeJob(job);
    }
}

function activeJob(job) {
    const jobHeading = document.getElementById("job-heading");
    const jobDuration = document.getElementById("job-duration");
    const jobDescription = document.getElementById("job-description");
    jobHeading.innerHTML = `${job.designation} <span>@<a href="${job.link}">${job.name}</a></span>`;
    jobDuration.textContent = job.duration;
    jobDescription.innerHTML = job.Description;
}