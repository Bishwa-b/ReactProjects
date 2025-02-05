import React from 'react';

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (212) 555-1212',
    email: 'itsmyrealname@example.com',
    isFavorite: false,
  });
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */
  let starIcon = contact.isFavorite
    ? 'src/assets/star-filled.png'
    : 'src/assets/star.png';

  let altMsg = contact.isFavorite ? 'Filled star icon' : 'Empty star icon';

  let ariaLabel = contact.isFavorite
    ? 'Remove from favorites'
    : 'Add to favorites';

  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <main>
      <article className="card">
        <img
          src="src/assets/profile.png"
          className="avatar"
          alt="User profile picture of John Doe"
        />
        <div className="info">
          <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label={ariaLabel}
            className="favorite-button"
          >
            <img src={starIcon} alt={altMsg} className="favorite" />
          </button>
          <h2 className="name">{contact.firstName + ' ' + contact.lastName}</h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
