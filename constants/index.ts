import { Experiencia, Usuario, Proyecto, Objetivo, FooterItem, Link } from "../types";


export const footerItems: FooterItem[] = [
	{
		id: 1,
		nombre: 'Home',
		icono: '/icons/home.svg',
		iconoSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd"></path></svg>',
		url: '/'
	},
	{
		id: 2,
		nombre: 'About',
		icono: '/icons/about.svg',
		iconoSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"></path></svg>',
		url: '/'
	},
	{
		id: 3,
		nombre: 'Projects',
		icono: '/icons/projects.svg',
		iconoSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zM2.5 9v5.75c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V9h-15zM4 5.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H4zM6.25 6A.75.75 0 017 5.25h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H7a.75.75 0 01-.75-.75V6zM10 5.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H10z" clip-rule="evenodd"></path></svg>',
		url: '/'
	},
	{
		id: 4,
		nombre: 'GitHub',
		icono: '/icons/github.svg',
		iconoSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.28a.75.75 0 00-1.06-1.06L4.97 9.47a.75.75 0 000 1.06l2.25 2.25a.75.75 0 001.06-1.06L6.56 10l1.72-1.72zm4.5-1.06a.75.75 0 10-1.06 1.06L13.44 10l-1.72 1.72a.75.75 0 101.06 1.06l2.25-2.25a.75.75 0 000-1.06l-2.25-2.25z" clip-rule="evenodd"></path></svg>',
		url: '/'
	},
	{
		id: 5,
		nombre: 'Linkedin',
		icono: '/icons/linkedin.svg',
		iconoSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clip-rule="evenodd"></path><path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"></path></svg>',
		url: '/'
	},
	{
		id: 6,
		nombre: 'Twitter',
		icono: '/icons/github.svg',
		iconoSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg>',
		url: '/'
	},
	{
		id: 7,
		nombre: 'Blog',
		icono: '/icons/blog.svg',
		iconoSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z"></path></svg>',
		url: '/'
	},
	{
		id: 8,
		nombre: 'Contact',
		icono: '/icons/contact.svg',
		iconoSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z" clip-rule="evenodd"></path></svg>',
		url: '/'
	},
	{
		id: 9,
		nombre: 'My Cv',
		icono: '/icons/my-cv.svg',
		iconoSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clip-rule="evenodd"></path></svg>',
		url: '/'
	}
];

export const dataObjetivos: Objetivo[] = [
	{
		id: 1,
		nombre: 'Meeting',
		descripcion: 'The first step is to hold a meeting to learn about your expectations, objectives and project requirements. It is important to discuss the scope of the project, the resources required and the project delivery schedule.',
	},
	{
		id: 2,
		nombre: 'Prototyping',
		descripcion: 'The first step is to hold a meeting to learn about your expectations, objectives and project requirements. It is important to discuss the scope of the project, the resources required and the project delivery schedule.',
	},
	{
		id: 3,
		nombre: 'SEO and content',
		descripcion: 'The first step is to hold a meeting to learn about your expectations, objectives and project requirements. It is important to discuss the scope of the project, the resources required and the project delivery schedule.',
	},
	{
		id: 4,
		nombre: 'Development phase',
		descripcion: 'The first step is to hold a meeting to learn about your expectations, objectives and project requirements. It is important to discuss the scope of the project, the resources required and the project delivery schedule.',
	},
	{
		id: 5,
		nombre: 'Testing and delivery',
		descripcion: 'Once the website is finished, it will be tested to ensure that it works correctly and that it is displayed correctly on all devices. Once the tests have been passed, the website will be delivered to the client.'
	}
];
export const proyectosData: Proyecto[] = [
	{
		id: 1,
		nombre: 'Vue Docs',
		descripcion: 'He colaborado en la pagina de documentacion de Vue.js, añadiendo correciones en los estilos y en la lógica de los componentes.',
		imagen: '/images/vue-docs.png',
		url: 'https://github.com/vuejs/docs'
	},
	{
		id: 2,
		nombre: 'Web Gloabal d-tech',
		descripcion: 'He hecho la web de la empresa d-tech, con php y js, con un diseño responsive y con un diseño moderno y atractivo.',
		imagen: '/images/vue-docs.png',
		url: 'https://github.com/vuejs/docs'
	},
	{
		id: 3,
		nombre: 'Csv python pandas and numpy',
		descripcion: 'He hecho programas en python para la universidad de Valencia y la sede de Endesa en Granollers en python',
		imagen: '/images/vue-docs.png',
		url: 'https://github.com/vuejs/docs'
	}
];
export const links: Link[] = [

	{
		name: 'Home',
		href: '/'
	},
	{
		name: 'Projects',
		href: '/projects'
	},
	{
		name: 'Images',
		href: '/lazy-load'
	},
	{
		name: 'Contact',
		href: '/contact'
	}
];

export const usuarioData: Usuario = {
	nombre: 'Sergio',
	descripcion: 'Paniagua',
	profesion: 'Desarrollador web',
	subDescripcion: 'Full Stack developer </>',
	imagen: '/images/sergio-profile.png'
};


export const experienciaData: Experiencia[] = [
	{
		id: 1,
		nombre: 'Kriter Software',
		puesto: 'Web developer',
		fecha: '2022 - 2023',
		descripcion: 'He estado trabajando media jornada en Kriter Software como desarrollador web. Mi trabajo consiste en crear aplicaciones web para clientes.'
	},
	{
		id: 2,
		nombre: 'Endesa',
		puesto: 'Desarrollador',
		fecha: '2022 - 2023',
		descripcion: 'Llevo y estoy realizando programa para la universidad de Valencia y la sede de Endesa en Granollers en python'
	},
	{
		id: 3,
		nombre: 'Grafix',
		puesto: 'Tecnico informatico',
		fecha: '2018-2019',
		descripcion: 'Reparacion de ordenadores y portatiles, instalacion de programas, mantenimiento de redes, etc.'
	},
	{
		id: 4,
		nombre: 'Grafix',
		puesto: 'Tecnico informatico',
		fecha: '2018-2019',
		descripcion: 'Reparacion de ordenadores y portatiles, instalacion de programas, mantenimiento de redes, etc.'
	},
	{
		id: 5,
		nombre: 'Grafix',
		puesto: 'Tecnico informatico',
		fecha: '2018-2019',
		descripcion: 'Reparacion de ordenadores y portatiles, instalacion de programas, mantenimiento de redes, etc.'
	}
];


export const aboutData = {
	sobremi: "¡Hola! Soy un desarrollador web apasionado en la creación de aplicaciones web. Mi enfoque principal es trabajar con tecnologías modernas como [React o Vue para FrontEnd y Python, Php....], y me encanta aprender nuevas herramientas y lenguajes de programación."
};


