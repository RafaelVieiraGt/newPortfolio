import './output.css';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import cv from './Assets/CV/Currículo-Rafael-2024.pdf'

import Projetos from './Components/Projetos';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';




function App() {
  Aos.init();
  return (
    <main className='h-lvh w-full '>
      <div className="w-full flex justify-center items-center font-sans h-full bg-gradient-to-r from-stone-950 via-yellow-950 to-stone-950">
        <div className='text-white justify-center items-center w-2/5 homeResponsivity'>
          <span className='font-bold text-3xl'>Olá, sou o Rafael 🚀 </span>
          <h1 className='text-8xl font-black mt-1.5'>DESENVOLVEDOR</h1>
          <div className=' rowIcons flex flex-row items-center gap-x-5'>
            <h1 className='text-8xl font-black'>JÚNIOR</h1>
            <a href='https://www.linkedin.com/in/rafael-camilli-vieira-077355269/' target='blank' className='no-underline'><FontAwesomeIcon   icon={faLinkedin} size='2xl'  className=' iconResponsivity cursor-pointer ml-3 transition-all animate-bounce hover:animate-none icone-linkedin'/></a>
           <a href='https://github.com/RafaelVieiraGt' target='blank' className='no-underline'> <FontAwesomeIcon  icon={faGithub} size='2xl'  className=' iconResponsivity cursor-pointer ml-3 transition-all animate-bounce hover:animate-none'/></a>
            <a href={cv} download='Currículo-Rafael-2024' className='no-underline'><FontAwesomeIcon icon={faFileLines} size='2xl'   className=' iconResponsivity cursor-pointer ml-3 transition-all animate-bounce hover:animate-none icone-cv'/></a>
          </div>
          <p className=' mt-8 text-xl font-bold w-4/6 mt-4 description'>Tenho 19 anos e estou em busca de uma oportunidade! Com 1 ano de experiência desenvolvendo projetos acadêmicos e pessoais.</p>
        
        </div>
        
      </div>
      <Projetos />
      <a href='https://github.com/RafaelVieiraGt?tab=repositories' target='blank' className=' footer cursor-pointer no-underline w-full flex justify-center items-center h-32 bg-gradient-to-r from-stone-950 via-yellow-700 to-stone-950 text-2xl text-white font-bold hover:font-black'>Confira todos os Projetos 🧑‍💻</a>
    </main>
    
  );
}

export default App;
