import { useState } from 'react'

export default function FavouriteBridge() {
  const [isFavourite, setIsFavourite] = useState(false)

  const handleClick = () => {
    setIsFavourite(!isFavourite)
    //if(isFavourite == true && user_id is != Null){
    //  Get Bridge ID
    //  insert into DB
    //}
    //else{ // provided user exists
    //  Get Bridge ID
    //  remove from DB
    //}
  }

  return (
    <>
      <button className="favourites" onClick={handleClick}>
        <img
          src={isFavourite ? 'img/favourite.png' : 'img/notfavourite.png'}
          alt={isFavourite ? 'favourite' : 'not favourite'}
        />
      </button>
    </>
  )
}
