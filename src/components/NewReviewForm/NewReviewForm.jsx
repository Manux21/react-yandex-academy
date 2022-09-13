import {useEffect, useReducer, useRef, useState} from "react";
import {SET_NAME, SET_RATING, SET_TEXT} from "../../store/actionTypes";


export const NewReviewForm = () => {

  // const FORM_ACTIONS = {
  //   setName: 'setName',
  //   setText: 'setText',
  //   setRating: 'setRating'
  // }

  const ref = useRef() // {current: ...}

  useEffect(() => {    //useLayoutEffect для работы с домом
    if (ref.current) {
        ref.current.focus();
    }

    return () => {}
  }, [])



  const reducer = (state, action) => {
    switch (action?.type) {
      case SET_NAME:
        return { name: action.payload.name, text:'', rating: 0 };
      case SET_TEXT:
        return { ...state, text: action.payload.text };
      case SET_RATING:
        return { ...state, rating: action.payload.rating}
      default:
        return state
    }
  }

  const action = {
    type: 'DO_SOMETHING',
    payload: {}
  }

  const initialState = {
    name: 'Tema',
    text: 'text',
    rating: 10,
  }


  const [state, dispatch] = useReducer(reducer, initialState)

  // const [name, setName] = useState('Tema')

  const onNameChange = (event) => dispatch(
    {type: SET_NAME, payload: {name: event.target.value}}
  )



  return(
    <div>
      <label>
        Name:
        <input
          ref = {ref}
          value={state.name}
          onChange={onNameChange}
          type="text" />
      </label>

      <label>
        Text
        <input type="text" />
      </label>

      <label>
        Rating
        <input type="number" />
      </label>
    </div>
  )
}