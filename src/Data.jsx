/* ======= Icones Tecnologias =======*/
import { SiJavascript, SiTypescript, SiReact, SiAngular, SiBootstrap, SiStyledcomponents, SiNodedotjs, SiJquery } from 'react-icons/si';

/*======== Import das imagens =======*/
import imagem01 from '/public/game-master.jpg'
import imagem02 from '/public/space-tourism.jpg'
import imagem03 from '/public/poke-api.jpg'
import imagem04 from '/public/hbo-clone.jpg'
import imagem05 from '/public/calculadora-react.jpg'
import imagem06 from '/public/disney+.jpg'


export const links = [
    {
        name: 'Home',
        path: 'home',
    },
    {
        name: 'Services',
        path: 'Services',
    },
    {
        name: 'TCC',
        path: 'TCC',
    },
    {
        name: 'Resume',
        path: 'resume',
    }
]

export const services = [
    {
        id: 1,
        name: 'TCC',
        title: 'Proposta TCC',
        description:'Desenvolvimento da proposta do trabalho de conclusão de curso. '
    },
    {
        id: 2,
        name: 'TCC',
        title: 'Andamento TCC',
        description:'Desenvolvimento do projeto e do artigo científico ao longo do ano de 2025.'
    },
]

export const skills = [
    {
        id: 1,
        name: 'JavaScript',
        image: <SiJavascript id='js' />
    },
    {
        id: 2,
        name: 'TypeScript',
        image: <SiTypescript id='ts' />
    },
    {
        id: 3,
        name: 'React',
        image: <SiReact id='react' />
    },
    {
        id: 4,
        name: 'Angular',
        image: <SiAngular id='angular' />
    },
    {
        id: 5,
        name: 'Bootstrap',
        image: <SiBootstrap id='bootstrap' />
    },
    {
        id: 6,
        name: 'styled-components',
        image: <SiStyledcomponents id='styled' />
    },
    {
        id: 7,
        name: 'jQuery',
        image: <SiJquery id='jquery' />
    },
    {
        id: 8,
        name: 'Node js',
        image: <SiNodedotjs id='node' />
    },
]


export const cv = [
    {
        id: 1,
        title: 'Bacharel em Ciência da Computação',
        subtitle: 'IME - USP (Em Andamento)',
        date: '2022 - 2025',
        description:
        'Curso iniciado em 2022, onde venho me preparando e me estruturando para me tornar um profissional de tecnologia, com foco em desenvolvimento de software e inteligência artificial.',
        category: 'educacao',
    },
    {
        id: 2,
        title: 'Desenvolvimento Full-Stack Python',
        subtitle: 'Experiência',
        date: '2022 - 2023',
        description:
        'Iniciei meus estudos em junho de 2022 neste curso que é focado na linguagem Python para o back-end, finalizei o front-end onde apliquei conhecimentos com javascript, react, bootstrap, jquery, sass e material UI na construção de alguns projetos e no momento venho estudando o back-end com o python.',
        category: 'experiencia',
    },
    {
        id: 3,
        title: 'DevOps',
        subtitle: 'Estágio',
        date: '2024 - Até o Momento',
        description:
        'Estou atuando como estagiário na área de DevOps, onde estou aprendendo sobre integração e entrega contínua, automação de processos, monitoramento de aplicações e infraestrutura, e estou aplicando conhecimentos em ferramentas como Jenkins, Docker, Kubernetes, Git, GitLab, AWS, Azure, entre outras.',
        category: 'experiencia',
    },
    {
        id: 4,
        title: 'Full-Stack Developer',
        subtitle: 'Arquitetura Paulista',
        date: '2024 - 2024',
        description:
        'No projeto da disciplina de métodos ágeis com o professor Goldman, fui o desenvolvedor full-stack do projeto, onde ajudei no desenvolvimento do projeto junto à prefeitura de São Paulo, para a Arquitetura Paulista.',
        category: 'experiencia',
    },
    {
        id: 5,
        title: 'Técnico em Eletrotécnica',
        subtitle: 'Instituto Federal do Espírito Santo',
        date: '2018 - 2021',
        description:
        'Curso técnico de nível médio, onde tive a oportunidade de aprender sobre eletricidade, eletrônica, automação, instrumentação, redes elétricas, motores elétricos, entre outros.',
        category: 'educacao',
    },
    {
        id: 6,
        title: 'Medalhas olímpicas',
        subtitle: 'OBA e OBR',
        date: '2018 - 2021',
        description:
        'Durante o Ensino Médio participei de olímpiadas e sendo premiado com medalha de ouro na de Robótica (OBR) e Astronomia (OBA).',
        category: 'educacao',
    },
]

