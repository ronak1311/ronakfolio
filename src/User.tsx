import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
const Info = {
    name: "Ronakkumar Gandhi",
    stack: ["Pro Frontend Engineer", "Emerging Full Stack Developer", "Former Student Pilot"],
    bio: "Welcome! I'm a passionate Frontend Engineer dedicated to crafting efficient and scalable web solutions. With proven expertise in frontend development and a strong command of React JS, I excel at delivering top-notch applications that exceed expectations. Currently, I'm on an exciting journey to become a full stack developer, and I'm always eager to learn and adapt to new technologies. Right now, I'm actively seeking job opportunities in Canada. Let's create the future of web development together!"
}



const ProjectInfo = [
    {
        title: "Article Summarizer",
        desc: "The Article Summarizer Application is a cutting-edge tool designed to provide users with concise summaries of lengthy articles using the power of natural language processing and machine learning. Built with Vite for a fast and efficient development experience, the application's frontend leverages React.js for its component-based architecture and efficient rendering. Tailwind CSS is employed to style the application, offering a highly customizable and responsive design. The core summarization functionality is powered by OpenAI's GPT model, ensuring accurate and coherent summaries. State management is streamlined with Redux Toolkit, simplifying the process of managing and updating state in the application. Additionally, the application integrates with RapidAPI to access article data from various sources, providing users with quick and reliable summaries. The Article Summarizer Application combines robust technology with an interactive and user-friendly interface, making it easy to quickly grasp the main points and key information of any given text.",
        image: "Summarizer.png",
        live: true,
        technologies: ["React","Vite", "Tailwind", "Redux", "RapidApi"],
        link: "https://lets-summarize.surge.sh/",
        github: "https://github.com/ronak1311/article_summarizer"
    },
    {
        title: "CloudBeds",
        desc: "During my studies at Conestoga, I developed the Hotel Booking Management System, a web-based application designed for efficient booking management and customer satisfaction. The project involved high-level design, unit testing, integration testing, system testing, and acceptance testing to ensure functionality, performance, and security. The front-end uses ReactJS for an interactive interface, while Supabase provides secure data storage, real-time updates, and user authentication for the back-end. Tailwind CSS ensures a stunning visual design and responsive layout. React Query handles state management for efficient data loading and real-time updates. Additional libraries like React Router, React Icons, React Hook Form, React Toastify, React Query Devtools, Tailwind CSS Plugins, Supabase Client, Preline, and Flowbite enhance the application's performance and user experience.",
        image: "CloudBeds.png",
        live: true,
        technologies: ["React","Supabase", "Tailwind", "React Query", "React Router"],
        link: "https://hotelmanagement-umber.vercel.app/home",
        github: "https://github.com/ronak1311/hotelmanagement"
    },
]


const SkillInfo = [
    {
        title: "Web Technologies & Frameworks",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Next JS","Node JS", "Express JS", "Redux", "Web3", "Tailwind CSS", , "Material UI", "Bootstrap", "GraphQL", "Jest", "Mocha", ]
    },
    
    {
        title: "Tools",
        skills: ["Git", "Github", "BitBucket", "VS Code", "Postman", "MongoDB Compass", "Webpack", "Babel", "NPM", "Yarn", "Docker"]
    },
    {
        title: "Languages",
        skills: ["JavaScript", "TypeScript", "Python"]
    },
    {
        title: "Databases",
        skills: [ "MySQL", "MongoDB",  "PostgresSQL"]
    },
    {
        title: "Cloud Services",
        skills: [ "AWS", "GCP",]
    },

]
const socialLinks = [
    { link: "https://github.com/ronak1311", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/ronakkumar-gandhi/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/iam_rk.7/", icon: IconBrandInstagram }
];


const ExperienceInfo = [
    {
        role: "Customer Service Representative",
        company: "Walmart",
        date: "Dec 2022 - Present, Kitchener,Canada (Part Time)",
        desc: "I successfully led the Fresh department team operations for a major Walmart project, demonstrating exceptional teamwork and communication skills. By increasing inventory accuracy by 20% through strategic planning and meticulous attention to detail, I surpassed challenging targets. My dedicated efforts in optimizing the sales floor organization enhanced the customer experience by 50% during both morning and overnight shifts. Managing one of the largest teams, I consistently delivered outstanding results and upheld high operational standards. Additionally, I provided exceptional customer service, promptly resolving inquiries and addressing customer needs, while excelling in stock management.",
        skills: ["Leadership", "Communication", "Team Management", "Customer Service"]
    },
    {
        role: "Frontend Developer",
        company: "Solulab Inc",
        date: "Jan 2019 - Aug 2022, Ahmedabad,India",
        desc: "I architected and built high-performance, user-friendly front-end applications, increasing website loading speed by 20%. By writing and debugging well-tested code, I reduced development time by 15% through a reusable UI component library. Collaborating with UI/UX designers, product managers, and engineers, I ensured on-time, budget-conscious project delivery. Mentoring junior developers and conducting code reviews boosted team productivity by 10%. Additionally, I standardized UI best practices, reducing errors by 25%, and improved project efficiency by 30% using tools like Git and Jira",
        skills: ["React JS", "Typescript", "Javascript", "Next JS", "Web3", "Node JS","Agile", "Jira", "Git", "Automation Testing", "AWS "]
    }
]
const Slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "mysql",
    "amazonaws",
    "postgresql",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };