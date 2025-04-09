import '../../styles/footer.css'


export default function Guest (){
    return(
        <>
        <div className='mainfooter'>
                <div className="footer-content">
                    {/* Coordonnées */}
                    <div className="footer-section">
                        <h3>Contactez-nous</h3>
                      <div className='infos'>
                        <p>Collège Aries</p>
                        <p> Yamoussoukro </p>
                        <p>Tél: 01 23 45 67 89</p>
                        <p>Email: contact@college-example.fr</p>
                      </div>
                    </div>

                    {/* Liens rapides */}
                    <div className="footer-section">
                        <h3>Liens utiles</h3>
                        <ul>
                            <li><a href="/actualites">Actualités</a></li>
                            <li><a href="/emploi-du-temps">Emploi du temps</a></li>
                            <li><a href="/vie-scolaire">Vie scolaire</a></li>
                            <li><a href="/ent">ENT</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Réseaux sociaux */}
                    <div className="footer-section">
                        <h3>Suivez-nous</h3>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook">Facebook</a>
                            <a href="#" aria-label="Twitter">Twitter</a>
                            <a href="#" aria-label="Instagram">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Collège Example - Tous droits réservés</p>
                </div>
           </div>
        
        
        
        
        </>
    )
}