import React from 'react'
import Questions from './Questions'
const QuestionList = ({questionsList}) => {
  return (
    <>
        {
          questionsList.map((questions) => (
            <Questions question={questions} key={questions._id}/>
          ))
        }
    </>
  )
}

export default QuestionList