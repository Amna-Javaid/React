import "./Card.css"

function Card() {
  return (
    <div className="card">
      <img 
        src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
        alt="Book"
        className="card-image"
      />

      <h2 className="card-title">HARRY POTTER</h2>

      <p className="card-description">
        Harry Potter is a globally renowned fantasy series by J.K. Rowling
        following an orphaned boy who discovers on his 11th birthday that
        he is a wizard. He attends Hogwarts School of Witchcraft and Wizardry.
      </p>

      <button className="card-button">BUY</button>
    </div>
  )
}

export default Card