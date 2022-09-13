


export const Reviews = ({reviews}) => {
  return (
    <div>
      {
        Boolean(reviews.length) && reviews.map(review => (
          <div>
            <span>{review.author}</span>
            <span>{review.text}</span>
            <span>{review.rating}</span>
          </div>
        ))
      }
    </div>
  )
}