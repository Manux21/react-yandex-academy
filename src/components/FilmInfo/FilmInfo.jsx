


export const FilmInfo = ({title, genre, seasonsCount}) => {
  return (
    <>
      <p>{title || 'Unknown Film'}</p>
      {Boolean(genre) && <p>{genre}</p>}
      <p>{seasonsCount > 0 ? `Количество сезонов ${seasonsCount}`: 'Нет сезонов' }</p>
    </>
  )
}