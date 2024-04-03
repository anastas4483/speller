import React, { ChangeEvent, FC, memo } from 'react';
import './app-textarea.scss';

interface AppTextareaProps {
  value: string;
  onChange: (value: string) => void;
}

export const AppTextarea: FC<AppTextareaProps> = memo(({ value, onChange }) => {

  const onChangeInner = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <textarea
      value={value}
      onChange={onChangeInner}
    />
  );
});
