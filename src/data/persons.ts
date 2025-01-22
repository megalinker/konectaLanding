export interface Person {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    imgSrc: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
}

export const persons: Person[] = [
    {
        id: '1',
        name: 'Alejandro García',
        subtitle: 'Founder & Product Manager',
        description: 'Visionary, creative, entrepreneur, fire helicopter pilot, animal lover, hopeful in humanity.',
        imgSrc: '/assets/persons/agarcia.webp',
        twitter: 'https://x.com/varon1980',
        linkedin: 'https://www.linkedin.com/in/alejandro-garc%C3%ADa-aranda-49146761/',
    },
    {
        id: '2',
        name: 'Ricardo Capuz',
        subtitle: 'Strategist & Co-Founder',
        description: 'Projects booster. Problem solver and creative thinker always tinkering.',
        imgSrc: '/assets/persons/capuzr.webp',
        twitter: 'https://x.com/capuzr',
        linkedin: 'https://www.linkedin.com/in/capuzr',
        github: 'https://github.com/CapuzR',
    },
    {
        id: '3',
        name: 'David Przemysław',
        subtitle: 'Investor & Co-Founder',
        description: 'Team Services Coordinator at UEFA Euro, and a passionate investor.',
        imgSrc: '/assets/persons/davidP.webp',
        linkedin: 'https://www.linkedin.com/in/david-przemys%C5%82aw-pa%C5%84tak-688b20/',
    },
    {
        id: '4',
        name: 'Sagar Shah',
        subtitle: 'CTO',
        description: 'Development leader of the team coding Konecta WebApp and Protocol.',
        imgSrc: '/assets/persons/sshah.webp',
        twitter: 'https://x.com/sagarshah1611',
        linkedin: 'https://www.linkedin.com/in/sagarshah16/',
        github: 'https://github.com/sagcryptoicp',
    },
    {
        id: '5',
        name: 'Jesús Pérez',
        subtitle: 'Dev & Video maker',
        description: 'Versatile creator: Apps, videos, music, games, and digital content.',
        imgSrc: '/assets/persons/jperez.webp',
        linkedin: 'https://www.linkedin.com/in/jes%C3%BAs-p%C3%A9rez-82b9a2136',
        github: 'https://github.com/megalinker',
    },
    {
        id: '6',
        name: 'Dmytro Dintsen',
        subtitle: 'Lead UI/UX Designer',
        description: 'Dmytro is a seasoned UI/UX Designer with 8 years of professional experience.',
        imgSrc: '/assets/persons/ddintsen.webp',
        twitter: 'https://x.com/dintsendmytro',
        linkedin: 'https://www.linkedin.com/in/dintsen-dmitriy-19136013a/',
    },
    {
        id: '7',
        name: 'Jesús Capitán',
        subtitle: 'Legal Advisor',
        description: 'Legal advise on Venture Capital, Private Equity, digital assets, Web3 and DeFi.',
        imgSrc: '/assets/persons/jcapitan.webp',
        linkedin: 'https://www.linkedin.com/in/jes%C3%BAs-capit%C3%A1n-minguet-2a745167/',
    },
    {
        id: '8',
        name: 'Daniel Granado',
        subtitle: 'Graphic and UX/UI Designer',
        description: 'Creator of high-impact concepts that navigate between creativity and usability.',
        imgSrc: '/assets/persons/dgranado.webp',
        twitter: 'https://x.com/dgrandoicp',
        linkedin: 'https://www.linkedin.com/in/daniel-alejandro-granado/',
    },
    {
        id: '9',
        name: 'Laura Rivero',
        subtitle: 'Illustrator',
        description: 'Illustrator with a background in art and architecture.',
        imgSrc: '/assets/persons/lrivero.webp',
    },
];
