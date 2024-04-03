import { Requests } from '@/api/requests';
import { AppTextarea } from '@/components/common/app-textarea/AppTextarea';
import { SpellerTextErrors, SpellerTextErrorsProps } from '@/components/speller/components/speller-text-errors/SpellerTextErrors';
import React, { useCallback, useState } from 'react';
import './speller.scss';

export const Speller = () => {

  const [value, setValue] = useState('');
  const [errors, setErrors] = useState<SpellerTextErrorsProps['errors']>([]);

  const checkText = (text: string) => {
    Requests.checkText(text)
      .then((res) => {
        setErrors(res.data);
      });
  };

  const onChange = useCallback((value: string) => {
    setValue(value);
    checkText(value);
  }, [checkText]);

  return (
    <div className="speller">
      <AppTextarea
        value={value}
        onChange={onChange}
      />
      {errors.length > 0 && <SpellerTextErrors errors={errors} />}
    </div>
  );
};
