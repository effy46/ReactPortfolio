import self from "./../images/self.jpg"



export let colors = ["rgb(251,154,63)", "rgb(71,86,223,1)"];


export const info = {
    firstName: "Fiona",
    lastName: "Feng",
    email: "fionabfeng@gmail.com",
    self: self, //my photo

    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],

    socials: [
        {
            link: "https://github.com/effy46",
            icon: "FaGithub",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/fionabfeng",
            icon: "FaLinkedin",
            label: 'linkedin'
        },
        {
            link: "mailto:fionabfeng@gmail.com",
            icon: "MdMailOutline",
            label: 'fionabfeng@gmail.com'
        }
    ],

    bio: "I'm a Business Intelligence Engineer for Amazon. I pursuing my Master of Computer Information Technology at UPenn and working as a Teaching Assistant for 421/521 AI & Maching Learning Algorithm course. I enjoy challenging myself to think differently to equip myself with the continually evolving society.Risk-taker, adventurer, love to explore new cities, design LEGO moc, play strategy games."
    ,
    miniBio: [
        {
            emoji: '✨',
            text: 'Fueled by Curiosity'
        },
        {
            emoji: '🌎',
            text: 'Based in the Texas, US'
        },
        {
            emoji: '💼',
            text: 'Business Intelligence Engineer at Amazon'
        },
        {
            emoji: '📚',
            text: 'M.S. in CS at UPenn'
        }
    ],
    skills:
    {
        programming_languages: ['Python', 'R', 'Java', 'C'],
        web: ['Adobe Analytics', 'HTML/CSS', 'React'],
        database: ['SQL (Redshift, Teradata, Hadoop, PostgreSQL)'],
        tools: ['Tableau', 'Excel', 'AWS (Redshift, S3, Sagemaker etc.)', 'Pandas', 'Numpy', 'Pytorch', 'Tensorflow', 'Seaborn']

    }
    ,
    portfolio: [
        {
            title: "Philadelphia COVID Data Analyzer - Upenn Software Design Course Team Project",
            details: "Developed a Java application that parses and analyze COVID vaccination and housing data from OpenDataPhilly, by utilizing N-tier architecture and state machine."
        }
    ]
}