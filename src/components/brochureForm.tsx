'use client';

import type { ChangeEventHandler, FC } from 'react';
import { useId, useState } from 'react';

type Props = {
  action: string;
  testGroup: number;
  countryCode: string;
  provinceCode: string | null;
  buttonText?: string;
  buttonClassName?: string;
};

export const BrochureForm: FC<Props> = ({ action, testGroup, countryCode, provinceCode, buttonText = 'Get the Catalog', buttonClassName = 'btn btn-primary' }) => {
  const id = useId();
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ emailAddress, setEmailAddress ] = useState('');

  const handleFirstNameChange: ChangeEventHandler<HTMLInputElement> = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange: ChangeEventHandler<HTMLInputElement> = e => {
    setLastName(e.target.value);
  };

  const handleEmailAddressChange: ChangeEventHandler<HTMLInputElement> = e => {
    setEmailAddress(e.target.value);
  };

  return (
    <form action={action} method="post">
      <input type="hidden" name="school" value="QC Event School" />
      <input type="hidden" name="testGroup" value={testGroup} />
      <input type="hidden" name="countryCode" value={countryCode} />
      <input type="hidden" name="provinceCode" value={provinceCode ?? ''} />
      <div className="mb-3">
        <label htmlFor={`${id}firstName`} className="form-label">Name</label>
        <input onChange={handleFirstNameChange} value={firstName} type="text" name="firstName" id={`${id}firstName`} className="form-control" autoComplete="given-name" />
      </div>
      <input onChange={handleLastNameChange} value={lastName} type="hidden" name="lastName" id={`${id}lastName`} />
      <div className="mb-3">
        <label htmlFor={`${id}emailAddress`} className="form-label">Email</label>
        <input onChange={handleEmailAddressChange} value={emailAddress} type="email" name="emailAddress" id={`${id}emailAddress`} className="form-control" required autoComplete="email" />
      </div>
      <div className="mb-3">
        <div className="form-check">
          <input type="checkbox" name="emailOptIn" id={`${id}emailOptIn`} className="form-check-input" value="Yes" />
          <label htmlFor={`${id}emailOptIn`} className="form-check-label small">
            I agree to receive additional emails from QC, including promotions, course launches, special offers and more. Unsubscribe anytime!
          </label>
        </div>
      </div>
      <button className={buttonClassName}>{buttonText}</button>
    </form>
  );
};
