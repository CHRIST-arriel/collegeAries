import Guest from '../layouts/GuestLayout'
import Pro from '../../assets/pro.jpeg'
import '../../styles/actualite.css'
import Dev from'../../assets/dev.jpeg'
import Tech from'../../assets/tech.jpeg'
import Jour from'../../assets/jour.jpeg'


function Actualite (){
    return (
        <>
        <Guest>
        <div className='chou'>
            <h1>Actualité Aries</h1>
        </div>
     <div className="bel">
       <h1>PROGRAMME DE L'ANNEE SCOLAIRE 2024-2025</h1>

        <img src={Pro} alt="" />
      </div>
      
    
     <div className='section'>
        <h1>SECTION DE L'ENSEIGNEMENT GENERAL</h1>
        <img src={Dev}/>
      </div>
      <div className='sectiontech'>
        <h1>SECTION DE L'ANNEE DE FORMATION</h1>
        <img src={Tech} height={600}/>
      </div>
        <div className='sectionun'>
          <div className='sectionleft'>
           <img src={Jour} height={350}/>
         </div>
         <div className='sectionright'>
           <h4>JOURNEE PORTE OUVERTE</h4>
           <p>la journée portes ouvertes se tiendra le 25 mars 2025. c'est occasion pour les parents et les future élèves de decouvrir notre établissement et nos programmes</p>
         </div>
        </div>
      
      
     
       
        </Guest>
        
        
        </>
    )
}

export default Actualite