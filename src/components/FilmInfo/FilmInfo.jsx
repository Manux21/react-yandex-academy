


export const FilmInfo = ({title, genre, seasonsCount, rating}) => {
  return (
    <>
      <p>{title || 'Unknown Film'}</p>
      {Boolean(genre) && <p>{genre}</p>}
      <p>{seasonsCount > 0 ? `Количество сезонов ${seasonsCount}`: 'Нет сезонов' }</p>
      <p>{rating}</p>
    </>
  )
}