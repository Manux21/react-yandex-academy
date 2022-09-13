import './App.css';
import {FilmDetails} from "./components/FilmDetails/FilmDetails";
import {useMemo} from 'react'

export const App = () => {


  const filmDetails = {
    id: 'asdjnw12312',
    title: 'The Simpsons',
    seasonsCount: 33,
    genre: 'Comedy',
    similar: [
      {
        id: 'sadasdadas',
        title:  'South Park'
      }
    ],
    reviews: [
      {
        id: 'xc754vcx5',
        author: 'SP',
        text: 'Самый лучший мультфильм',
        rating: '10',
      }
    ]
  }

  const filmRating = useMemo(() => {
    Math.floor(
      filmDetails.reviews.reduce((sum, review) => {
        return sum + review.rating
      }, 0) / filmDetails.reviews.length
    )
  }, [filmDetails.reviews]);


  return (
    <div>
      <header/>
      <FilmDetails
        title={filmDetails.title}
        seasonsCount={filmDetails.seasonsCount}
        genre={filmDetails.genre}
        rating={filmRating}
      />
      {/*<Reviews/>*/}
      {/*<Recomendations/>*/}
      <footer/>

    </div>
  );
}

export default App;
