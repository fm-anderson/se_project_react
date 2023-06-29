import { useContext } from 'react';
import './ItemCard.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function ItemCard({ item, handleSelectedCard, handleLike }) {
  const { isLoggedIn, currentUser } = useContext(CurrentUserContext);

  const isLiked = item.likes.some((user) => {
    return user === currentUser?._id;
  });

  const handleLikeClick = () => {
    handleLike(item._id, isLiked);
  };

  return (
    <div className="card">
      <img
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={() => handleSelectedCard(item)}
      />
      <div className="card__name-container">
        <p className="card__name">{item.name}</p>
        {isLoggedIn && (
          <button
            onClick={handleLikeClick}
            className={
              isLiked
                ? 'card__like-button card__like-button_active'
                : 'card__like-button'
            }
          ></button>
        )}
      </div>
    </div>
  );
}
