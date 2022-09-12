import {useCount} from "../hooks/useCount";
import {FilmInfo} from "../FilmInfo/FilmInfo";


export const FilmDetails = ({ title, genre, seasonsCount }) => {
  let [count,increment,decrement] = useCount(0);
  return (
    <div>
      <FilmInfo
        title={title}
        genrre={genre}
        seasonsCount={seasonsCount}
      />
      <div>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}