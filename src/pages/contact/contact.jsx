import React from "react";
import  "./sass/mobile.scss" 

function Contact() {
  return (
    <div className="contact-pages">
      <section className="map-container">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15176.378886299766!2d-92.920578!3d18.0208072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd9a79f80bc11%3A0x4a2a9166943b7c21!2sINSTITUTO%20DE%20ESTUDIOS%20IDEEN!5e0!3m2!1ses-419!2smx!4v1712336979705!5m2!1ses-419!2smx"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="contact-form">
        <article>
          <section className="information-container">
            <h1>Información</h1>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
          </section>
          <section className="form-container">
            <h1>Formulario</h1>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
          </section>
        </article>
      </section>
    </div>
  );
}

export default Contact;
