import Guest from "../layouts/GuestLayout"
import { motion } from "framer-motion"
import Im1 from'../../assets/Im1.jpeg'
import { GiBookAura, GiBookmarklet } from "react-icons/gi";
import '../../styles/home.css'



function Home (){
    return(
        <>
        <Guest>
            <div className="maihome">
                <section className="banniere">
                    <div className="bannierecontent">
                        <motion.div
                        initial={{opacity:0 , y:100}}
                        whileInView={{opacity:1 , y:0}}
                        viewport={{once:true}}
                        transition={{duration:1}}
                        style={{width:'100'}}>
                            <h1>BIENVENUE AU COLLEGE ARIES , UN LIEU D'APPRENTISSAGE ET D'EPANOUISSEMENT</h1>
                        </motion.div>
                            <div className="decouvrir"> Decouvrir</div>
                        
                    </div>
                
                </section>
                <section className="directeur"> 
                    <h1> Mot Du Directeur</h1>
                  <div className="directeurcontent">
                    <div className="directeurtexte">
                    Cette rentrée scolaire 2024-2025 me donne l'opportunité de remercier les parents d'élèves qui nous ont fait confiance et d'exhorter les élèves dans leur ensemble à privilégier le travail afin d'assurer non seulement leur avenir mais aussi la relève des cadres. Félicitations aux enseignants et aux encadreurs qui avec abnégation abattent un travail impressionnant qui font les excellents résultats que nous connaissons. Bonne rentrée 2024-2025.
                    </div>
                    <div className="directeurimage">
                      <div className="imgbox"> </div>
                    </div>
                  </div>
                </section>
                <section className="Apropos">
                   <h1> A Propos de Nous </h1>
                  <div className="Aproposcontent">
                      <div className="Aproposleft">
                        <motion.div
                          initial={{opacity:0 , x:150}}
                          whileInView={{opacity:1 , x:0}}
                          viewport={{once: true}}
                          transition={{duration: 2}}
                          style={{width:'100%'}}
                        >
                          <div className="boxtofone">
                            <img src={Im1} alt="" />
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{opacity:0 , x:-150}}
                          whileInView={{opacity:1 , x:0}}
                          viewport={{once: true}}
                          transition={{duration: 2}}
                          style={{width:'100%'}}
                        >
                          <div className="boxtoftwo">
                            <img src={Im1} alt="" />
                          </div>
                          </motion.div> 
                      </div>
                      <div className="Aproposright">
                        <div className="Aproposrighttop">
                          <h2>Presentation</h2>
                          <p>Bienvenue dans l'espace "À propos" du Collège Aries. Situé à Dioulakro , notre établissement 
                             est un centre d'apprentissage et de développement qui accompagne les élèves depuis 2015 .
                             Nous proposons un enseignement de qualité, adapté aux besoins de chaque élève, dans un environnement 
                             stimulant et bienveillant.
                          </p>
                        </div>
                        <div className="Aproposrightbottom">
                          <div className="mission">
                            <div className="missiontop">
                              <div className="missionicon"> 
                              <div className="iconcontent"><GiBookAura /></div>
                              </div>
                              <div className="missiontexte"> 
                                <h3>Vision</h3>
                                <p>Former des citoyens éclairés, responsables et ouverts sur le monde.</p>
                              </div>
                            </div>
                            <div className="missionbottom">
                              <div className="missionicon">
                                 <div className="iconcontent"><GiBookmarklet /></div>
                              </div>
                              <div className="missiontexte">
                              <h3>Mission</h3>
                              <p> Offrir une éducation équilibrée qui combine excellence académique et éthique.</p>
                              
                              </div>
                            </div>
                          </div>
                         
                        </div>
                      </div>
                  </div>
                </section>
                <section className="formation">
                  <h1>Nos Formations</h1>
                  <div className="formationContainer">
                  <div className="code">
                            <div className="codecontent">
                                <div className="codebox">
                                  <h1 id="ens">ENSEIGNEMENT GENERAL </h1>
                                  <h1> de la 6ème à la  Tle</h1>
                                  <h1>CODE : 039733</h1>
                                </div>
                                <div className="codeboxtwo">
                                  <h1 id="ens">ENSEIGNEMENT TECHNIQUE </h1>
                                    <h1> G1 G2 AB </h1>
                                  <h1>CODE : 039733</h1>
                                </div>
                                <div className="codeboxthree">
                                  <h1 id="ens">ENSEIGNEMENT PROFESSIONNEL </h1>
                                    <h1> SECRETARIAT ET COMPTABILITE </h1>
                                    <h1>CODE : 039733</h1>
                                </div>
                            </div>
                          </div>

                  </div>
                </section>
               
                <section className="pourquoi">
                     <h1>Pourquoi Choisir le College Aries ?</h1>
                  <div className="pourquoicontent">
                    <div className="pourquoibox">
                       <div className="boximage">
                       </div>
                       <div className="boxtexte">
                          <p>Une pedagogie innovante</p>
                       </div>
                       
                    </div>
                    <div className="pourquoibox">
                        <div className="boximage">
                       </div>
                       <div className="boxtexte">
                          <p>Une vie scolaire riche en activité parascolaire</p>
                       </div>
                    </div>
                    <div className="pourquoibox">
                      <div className="boximage">
                      </div>
                      <div className="boxtexte">
                         <p>Un cadre securisant et moderne</p>
                      </div>
                      
                    </div>
                  </div>
                </section>
                
                
            </div>

          

        </Guest>
        
        
        
        
        </>
    )
}
export default Home