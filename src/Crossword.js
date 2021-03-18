import React from 'react';

import Crossword from '@jaredreisinger/react-crossword';

const data = {
    
        across: {
          1: {
            clue: 'one plus one',
            answer: 'TWO',
            row: 0,
            col: 0,
          },
          2: {
              clue: 'a random word',
              answer: 'eagle',
              row:2,
              col:2,
          }
        },
        down: {
          2: {
            clue: 'three minus two',
            answer: 'ONE',
            row: 0,
            col: 2,
          },
        },
      }


export default function MyPage() {
  return <Crossword data={data} />;
}
   

