import './ContactForm.css';

const ContactForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const civility = formData.get('civility')?.toString().trim() ?? '';
    const prenom = formData.get('prenom')?.toString().trim() ?? '';
    const nom = formData.get('nom')?.toString().trim() ?? '';
    const telephone = formData.get('telephone')?.toString().trim() ?? '';
    const email = formData.get('email')?.toString().trim() ?? '';
    const adresse = formData.get('adresse')?.toString().trim() ?? '';
    const codePostal = formData.get('code-postal')?.toString().trim() ?? '';
    const ville = formData.get('ville')?.toString().trim() ?? '';
    const message = formData.get('message')?.toString().trim() ?? '';

    const lines = [
      civility && `Civilité: ${civility}`,
      prenom && `Prénom: ${prenom}`,
      nom && `Nom: ${nom}`,
      telephone && `Téléphone: ${telephone}`,
      email && `Email: ${email}`,
      adresse && `Adresse: ${adresse}`,
      codePostal && `Code postal: ${codePostal}`,
      ville && `Ville: ${ville}`,
      message && `Message: ${message}`,
    ].filter(Boolean);

    const rawMessage = lines.length
      ? `Bonjour!\n${lines.join('\n')}`
      : 'Bonjour!';

    const whatsappNumber = '41797897198'; // without leading +
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(rawMessage)}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <form className="styled-contact-form" onSubmit={handleSubmit}>
          <div className="form-field select-field full-width">
            <label htmlFor="civility">Civilité</label>
            <select id="civility" name="civility">
              <option value="">Sélectionner</option>
              <option value="mme">Madame</option>
              <option value="mr">Monsieur</option>
              <option value="autre">Autre / Préfère ne pas répondre</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="prenom">
              Prénom <span>*</span>
            </label>
            <input id="prenom" name="prenom" type="text" placeholder="Prénom" required />
          </div>

          <div className="form-field">
            <label htmlFor="nom">
              Nom <span>*</span>
            </label>
            <input id="nom" name="nom" type="text" placeholder="Nom" required />
          </div>

          <div className="form-field">
            <label htmlFor="telephone">Téléphone</label>
            <input id="telephone" name="telephone" type="tel" placeholder="Téléphone" />
          </div>

          <div className="form-field">
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input id="email" name="email" type="email" placeholder="Email" required />
          </div>

          <div className="form-field wide-field">
            <label htmlFor="adresse">Rue et numéro</label>
            <input id="adresse" name="adresse" type="text" placeholder="Rue et numéro" />
          </div>

          <div className="form-field">
            <label htmlFor="code-postal">Code postal</label>
            <input id="code-postal" name="code-postal" type="text" placeholder="Code postal" />
          </div>

          <div className="form-field">
            <label htmlFor="ville">Ville</label>
            <input id="ville" name="ville" type="text" placeholder="Ville" />
          </div>

          <div className="form-field full-width">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Votre message" rows={4} />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;