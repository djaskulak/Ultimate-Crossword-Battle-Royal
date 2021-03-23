import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import Crossword from '@jaredreisinger/react-crossword';
const data = {
  across: {
    1: {
      clue: 'haircuts with layers',
      answer: 'SHAGS',
      row: 0,
      col: 0,
    },
    2: {
        clue: 'Indiana Basketball player',
        answer: 'PACER',
        row:1,
        col:0,
    },
    3: {
      clue: 'Botanical Specimen whose fronds resemble a flightless birds plumes',
        answer: 'OSTRICHFERN',
        row:2,
        col:0,
    },
    4: {
      clue: 'Part of a grocery list',
        answer: 'ITEM',
        row:3,
        col:0,
    },
    5: {
      clue: 'Prince Williams mum, familiarly',
        answer: 'LADYDI',
        row:4,
        col:0,
    },
  },
  down: {
    1: {
      clue: 'Become inedible',
      answer: 'SPOIL',
      row: 0,
      col: 0,
          },
    2: {
      clue: '_ la vista!',
      answer: 'HASTA',
      row: 0,
      col: 1,
          },
    3: {
      clue: 'Played a role',
      answer: 'ACTED',
      row: 0,
      col: 2,
          },
    4: {
      clue: 'Like unwashed hands, perhaps',
      answer: 'GERMY',
      row: 0,
      col: 3,
          },
    5: {
      clue: '_ Lanka',
      answer: 'SRI',
      row: 0,
      col: 4,
          },
        },
      }
export default function MyPage() {
  const crossword = useRef();
  return <Crossword data={data} />;
}
