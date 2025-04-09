import { PropsWithChildren } from "react"
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/guest.css'




export default function Guest ({children} : PropsWithChildren){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return(
        <>
        <div className="mainguest">
            <div className="header">
                <div className="logo">Aries</div>
                
                <div className={`navbar ${isMenuOpen ? 'show' : '' }`}>
                    <nav>
                        <ul>
                            <li>  <Link to='/'>Accueil</Link></li>
                            <li> <Link to='/Scolarite'>A propos</Link></li>
                            <li> <Link to='/Scolarite'>Scolarité</Link></li>
                            <li> <Link to='/Actualite'>Actualité </Link></li>
                            <li> <Link to='/Galerie'>Galerie</Link></li>
                            <li> <Link to='/Contact'>Contact </Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="btnopen" onClick={handleToggleMenu}><IoMenu /></div>
            </div>
        </div>
        
        
        
        <div className="children">
            {children}
        
        </div>
        </>
    )
}