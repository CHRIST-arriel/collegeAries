import Guest from '../layouts/GuestLayout'
import Pro from '../../assets/pro.jpeg'
import '../../styles/actualite.css'

function Actualité (){
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
      
     
       
        </Guest>
        
        
        </>
    )
}

export default Actualité