import { SmartLink } from "@/once-ui/components";

const person = {
    firstName: 'Zsofia',
    lastName:  'Komaromi',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Founder & Product Designer',
    avatar:    '/images/avatar.png',
    location:  'Europe/Vienna',       // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/zsofiakm',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/zsofiakomaromi/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/ZsofiaKomaromi',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:zsofia@once-ui.com',
    },
]

const home = {
    label: 'Home',
    title: `Hello, I'm ${person.name}`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Helping software teams work smarter</>,
    subline: <>I'm Zsofia, product manager turned designer.<br/> I help engineers to design, and developers to code with <SmartLink style={{marginLeft: '-0.125rem', marginRight: '-0.125rem'}} href="https://once-ui.com">Once UI</SmartLink>.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: false,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/zsofia.komaromi/15min'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I’m a Vienna-based product builder with a love for crafting beautiful and user-friendly products. I work on the Once UI design system and UI kit, helping to bring beautiful designs to life for developers and designers everywhere. </>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'DesignEdge',
                timeframe: '2024 - Present',
                role: 'Co-Founder',
                achievements: [
                    <>Creating prototypes and designing MVPs for early stage startups, to help them secure funding.</>,
                    <>Designing & setting up a design system for clients.</>
                ],
                images: [ 
                    {
                        src: '/images/cv/designedge-cover.png',
                        alt: 'DesignEdge Agency',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Once UI',
                timeframe: '2023 - Present',
                role: 'Co-Founder',
                achievements: [
                    <>Once UI for Next.js: An open-source, versatile design system & UI library intended to cover 80% of the needs of all applications.</>,
                    <>Once UI for Figma: Design and prototype entire products from scratch in hours. Use the same tokens and components as the Next.js design system.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/cv/once-ui-cover.png',
                        alt: 'Once UI',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Grafana Labs',
                timeframe: '2022 - 2024',
                role: 'Group Product Manager',
                achievements: [
                    <>Worked on Grafana, a beloved open-source data visualization and observability platform used by millions globally.</>,
                    <>I focused on improving usability, accessibility, and overall user experience.</>
                ],
                images: [ 
                    {
                        src: '/images/cv/grafana-cover.png',
                        alt: 'Grafana',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Wise',
                timeframe: '2021 - 2022',
                role: 'Senior Product Manager',
                achievements: [ ],
                images: [ ]
            },
            {
                company: 'Instructure',
                timeframe: '2019 - 2021',
                role: 'Senior Product Manager',
                achievements: [ ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: false, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Jakarta',
                description: <>Studied software engineering.</>,
            },
            {
                name: 'Build the Future',
                description: <>Studied online marketing and personal branding.</>,
            }
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };