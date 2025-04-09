import Guest from "../layouts/GuestLayout"
import  '../../styles/contact.css'

function Contact(){
    return(
        <>
        <Guest>
            <div className="maniContact">
                <section className="contactContainer">
                    <div className="formulaire">
                        <form action="" className="form">
                            <div>
                                <input type="text"  placeholder="Nom"/>
                            </div>
                            <div>
                                <input type="text"  placeholder="Email"/>
                            </div>
                            <div>
                                <textarea name="" id="" placeholder="Message"></textarea>
                            </div>
                            <input type="submit" value='Soumettre' id="soumettre"/>
                        </form>
                    </div>
                    <div className="map">
                        <div><iframe
                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.673980715293!2d-5.2810689!3d6.8094529999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfb89132514edd3f%3A0xae87c8489d49610d!2sColl%C3%A8ge%20Aries!5e0!3m2!1sfr!2sci!4v1744124224446!5m2!1sfr!2sci"
                             width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={true}
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"/></div>
                        </div>
                    <div className="contactLeft">

                    </div>
                </section>
            </div>

        </Guest>
        
        </>
    )
}
export default Contact