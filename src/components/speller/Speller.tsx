import { AppTextarea } from '@/components/common/app-textarea/AppTextarea';
import { SpellerTextErrors, SpellerTextErrorsProps } from '@/components/speller/components/speller-text-errors/SpellerTextErrors';
import { WorkerService } from '@/utils/worker-service';
import React, { useCallback, useEffect, useState } from 'react';
import './speller.scss';

export const Speller = () => {

  const [value, setValue] = useState('');
  const [errors, setErrors] = useState<SpellerTextErrorsProps['errors']>([]);

  const onMessage = (msg: SpellerTextErrorsProps['errors']) => {
    setErrors(msg);
  };

  useEffect(() => {
    WorkerService.setOnMessage(onMessage);
    return () => WorkerService.terminate();
  }, []);

  const checkText = (text: string) => {
    WorkerService.postMessage(text);
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
