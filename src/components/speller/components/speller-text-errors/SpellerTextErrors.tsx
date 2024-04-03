import { TextErrors } from '@/models/text-errors';
import React, { FC, memo } from 'react';
import './speller-text-errors.scss';

export interface SpellerTextErrorsProps {
  errors: TextErrors[];
}

export const SpellerTextErrors: FC<SpellerTextErrorsProps> = memo(({ errors }) => {
  return (
    <ul className="speller-text-errors">
      Обнаружены ошибки в тексте:
      {errors.map(({ col, row, pos, s, word }) => (
        <li key={`${col}-${row}-${pos}`}>
          Слово: <i>{word}</i>. Возможно вы имели в виду: {s.join(', ')}
        </li>
      ))}
    </ul>
  );
});
