import Guest from "../layouts/GuestLayout"

import '../../styles/scola.css'

function Scolarite (){
    return(
        <>
        <Guest>
            <div className="mainscola">
                <div className="mainscolacontent">
                    <div className="tabgeneral">
                    <h1>FRAIS D'ECOLAGE ENSEIGNEMENT GENERAL</h1>
                <table>
                <thead>
                    <tr>
                    <th>Niveau</th>
                    <th>1er vers. <br /> 05 Nov</th>
                    <th>2ème vers. <br /> 05 Déc.</th>
                    <th>3ème vers. <br />  05 Janv.</th>
                    <th>4ème vers. <br /> 05 Fév.</th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>6ème</td>
                    <td>20 000</td>
                    <td>20 000</td>
                    <td>15 000</td>
                    <td>15 000</td>
                    <td>70 000</td>
                    </tr>
                    <tr>
                    <td>5ème</td>
                    <td>25 000</td>
                    <td>20 000</td>
                    <td>15 000</td>
                    <td>15 000</td>
                    <td>75 000</td>
                 </tr>
                    <tr>
                    <td>4ème</td>
                    <td>25 000</td>
                    <td>25 000</td>
                    <td>15 000</td>
                    <td>15 000</td>
                    <td>80 000</td>
                    </tr>
                    <tr>
                    <td>3ème</td>
                    <td>25 000</td>
                    <td>25 000</td>
                    <td>20 000</td>
                    <td>15 000</td>
                    <td>85 000</td>
                    </tr>
                    <tr>
                    <td>2nde</td>
                    <td>25 000</td>
                    <td>25 000</td>
                    <td>20 000</td>
                    <td>20 000</td>
                    <td>90 000</td>
                    </tr>
                    <tr>
                    <td>1ère</td>
                    <td>30 000</td>
                    <td>25 000</td>
                    <td>20 000</td>
                    <td>20 000</td>
                    <td>95 000</td>
                    </tr>
                    <tr>
                    <td>Tle</td>
                    <td>30 000</td>
                    <td>30 000</td>
                    <td>20 000</td>
                    <td>20 000</td>
                    <td>100 000</td>
                    </tr>
                </tbody>
                </table>
                                <div className="droit">
                                    <h2>Droit d'examen</h2>
                                    <p><span>3ème</span> 2 500f CFA / Tle : 5500 CFA</p>
                                </div>
                    </div>
                    <div className="tabtech">
                        <h1>FRAIS D'ECOLAGE ENSEIGNEMENT TECHNIQUE ET PROFESSIONNEL</h1>
                    <table>
                <thead>
                    <tr>
                    <th>Niveau</th>
                    <th>1er vers. <br /> 05 Nov</th>
                    <th>2ème vers. <br /> 05 Déc.</th>
                    <th>3ème vers. <br />  05 Janv.</th>
                    <th>4ème vers. <br /> 05 Fév.</th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                  
                
                    <tr>
                    <td>2nde / BT 1ere Année</td>
                    <td>20 000</td>
                    <td>20 000</td>
                    <td>20 000</td>
                    <td>20 000</td>
                    <td>80 000</td>
                    </tr>
                    <tr>
                    <td>1ère / BT 2e Année</td>
                    <td>25 000</td>
                    <td>20 000</td>
                    <td>20 000</td>
                    <td>20 000</td>
                    <td>85 000</td>
                    </tr>
                    <tr>
                    <td>Tle / BT 3e Année</td>
                    <td>25 000</td>
                    <td>25 000</td>
                    <td>20 000</td>
                    <td>20 000</td>
                    <td>90 000</td>
                    </tr>
                </tbody>
                    </table>
                                <div className="droit">
                                    <h2>Droit d'examen</h2>
                                    <p>Tle : 5 500f CFA / BT 3eme ANNEE : 8 000 CFA</p>
                                </div>
                    </div>

                </div>
            </div>



        </Guest>
        
        </>
    )
}
export default Scolarite