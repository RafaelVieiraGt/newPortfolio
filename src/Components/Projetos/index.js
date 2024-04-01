import '../../output.css'
import '../../index.css'
import imageProjetos from '../../Assets/svgprojetos.svg'
import imageProjetos2 from '../../Assets/svg2.svg'
import telaFluent from '../../Assets/projetos/telaFluent.PNG'
import telaFut from '../../Assets/projetos/barraFut.PNG'
import telaDoacoes from '../../Assets/projetos/doacoes.PNG'
import Aos from 'aos'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs, faPython } from '@fortawesome/free-brands-svg-icons'
import { apiKey } from '../../apikey'

function Projetos(){
    const [repos, setRepos] = useState([]);
    

    const images = {
        'BarraFut' : telaFut,
        'DrFluent' : telaFluent,
        'Projeto_ext_doacoes' : telaDoacoes
    }
   const reposImportant = ['BarraFut', "DrFluent", "Projeto_ext_doacoes"]
    

    useEffect(()=> {
        async function getRepos(){
            try{
                const response = await axios.get('https://api.github.com/users/RafaelVieiraGt/repos', {
                    headers: {
                        Authorization: apiKey
                    }
                })
                
                let responseData = response.data;

                let reposUsable = responseData.filter((data) => reposImportant.includes(data.name));


                

                const reposWithImage = reposUsable.map(repo => ({
                    ...repo,
                    image: images[repo.name] || 'URL_PADRÃO'
                }))

                setRepos(reposWithImage);
                console.log(repos)

            } catch(error) {
                console.log(error)
            }
        }

        getRepos();
        
        
    }, [])

    Aos.init()
    return(
        <div className=" w-full bg-gradient-to-r from-stone-950 via-yellow-700 to-stone-950 pt-4">
            
            <div  className=' flex-row flex justify-center items-center '>
                <img data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" alt='Imagem Ilustrativa' src={imageProjetos} className='max-w-xl imageEsq'/>
                <img data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"  alt='imagem ilustrativa' src={imageProjetos2} className='max-w-md imageDir'/>
            </div>
            <h1 data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine" className='text-4xl font-black text-white text-center mb-4 mt-4 textResponsivity'>PRINCIPAIS PROJETOS 💡</h1>
            <div className='w-full mt-10 flex justify-center  items-center gap-10 p-8 responsividade' >
                {repos.map(repo => (
                    <div key={repo.id} className='w-1/3 flex justify-center items-center flex-col cardResponsivity' data-aos='flip-right' data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <div className='cardMonitor'>
                            <h2>{(repo.name).toUpperCase()}</h2>
                            <div className='monitor'>
                                <div className='stand'></div>
                                <img src={repo.image} />
                            </div>
                            <div className='flex flex-row w-full justify-start gap-3 items-center' >
                                <span className='pl-5 text-lg font-bold spanLanguage'>Linguagem: </span>
                                <FontAwesomeIcon icon={repo.language === 'JavaScript' ? faJs : faPython} size='xl'/>
                            </div>
                            <p>{repo.description}</p>
                            <a target='blank' href={repo.svn_url}>Acessar</a>
                        </div>    
                    </div>
                ))}
                
                
            </div>
        </div>
    )
}

export default Projetos