import Guest from "../layouts/GuestLayout"

import '../../styles/histo.css'

function Histo (){
    return(
        <>
        <Guest>
            <div className="mainhisto">
                <section className="banniereAbout">
                    <h1> A PROPOS DE ARIES</h1>
                    <h2>L'enseignement notre metier</h2>

                </section>
                <section className="histoire">
                    <h1>HISTORIQUE</h1>
                    <div className="histoirecontent">
                        <p>Bienvenue au Collège Aries. Situé à Djoulakro, notre établissement est bien plus qu'une simple école; c'est un centre d’apprentissage et de développement qui accompagne les élèves depuis 2015. Nous sommes dédiés à offrir une éducation de qualité, adaptée aux besoins uniques de chaque élève. Notre environnement stimulant et bienveillant favorise non seulement la réussite académique, mais également le développement personnel.
Au Collège Aries, nous croyons fermement que chaque élève est unique et mérite une attention particulière. Nos programmes académiques sont conçus pour stimuler la curiosité intellectuelle et encourager l’esprit critique. En plus de notre curriculum rigoureux, nous proposons une variété d’activités extrascolaires pour permettre aux élèves de découvrir et de développer leurs talents et passions.
Nos enseignants qualifiés et dévoués sont à l’écoute des besoins de chaque élève et travaillent en étroite collaboration avec les familles pour assurer un suivi personnalisé. Nous mettons également un point d'honneur à créer un environnement inclusif et sécurisant où chaque élève se sent valorisé et respecté.
Nous vous invitons à nous rejoindre au Collège Aries, où l’apprentissage va au-delà des salles de classe pour préparer les élèves à devenir des citoyens responsables et épanouis. Ensemble, construisons l'avenir de vos enfants dans un cadre propice à leur réussite et à leur bien-être.
                        </p>
                    </div>
                </section>
                <section className="equipe">
                    <h1>Notre équipe éducative</h1>
                    <div className="equipeContainer">
                        <div className="boxEquipe">
                            <div className="boxEquipeImage">

                            </div>
                            <div className="boxEquipeNom">
                                <h2>Nom et Prenoms</h2>
                                <h2>poste</h2>
                            </div>
                        </div>
                        <div className="boxEquipe">
                            <div className="boxEquipeImage">

                            </div>
                            <div className="boxEquipeNom">
                                <h2>Nom et Prenoms</h2>
                                <h2>poste</h2>
                                
                            </div>
                        </div>
                        <div className="boxEquipe">
                            <div className="boxEquipeImage">

                            </div>
                            <div className="boxEquipeNom">
                                <h2>Nom et Prenoms</h2>
                                <h2>poste</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="auto">
                    <div className="autoleft">
                        <h2>AUTORISATION D'OUVERTURE</h2>
                        <p>
                            1ER CYCLE N°1430 MENET/CAB/SAEEP/ DU 20 JUILLET 2014 <br />
                            2ND CYCLE N°2008 MENET/DEEP DU 14 JUILLET 2014 <br />
                            G1, G2 N°3690 MENET-FP/DEEP DU 18 JUILLET 2018 <br />
                            AB N°3838 DU 21 JUIN 2019 <br />
                            FORM.PRO. N°2021-0691 METFPA/DEEP DU 23 JUILLET 2021
                        </p>

                    </div>
                    <div className="autoright">
                        <h2>AUTORISATION DE RECONNAISSANCE</h2>
                        <p>
                            1ER CYCLE N°2108 MENET/DEEP DU 14 JUILLET 2016 <br />
                            2ND CYCLE N°1973 MEN/DEEP DU 07 JUILLET 2018</p>
                    </div>
                </section>
        
            </div>



        </Guest>
        
        </>
    )
}
export default Histo