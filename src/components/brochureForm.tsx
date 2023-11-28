'use client';

import type { ChangeEventHandler, FC } from 'react';
import { useId, useState } from 'react';

type Props = {
  action: string;
  buttonText?: string;
};

export const BrochureForm: FC<Props> = ({ action, buttonText = 'Get the Catalog' }) => {
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
      <div className="mb-3">
        <label htmlFor={`${id}firstName`} className="form-label">Name</label>
        <input onChange={handleFirstNameChange} value={firstName} type="text" name="firstName" id={`${id}firstName`} className="form-control" autoComplete="given-name" />
      </div>
      <input onChange={handleLastNameChange} value={lastName} type="hidden" name="lastName" id={`${id}lastName`} />
      <div className="mb-3">
        <label htmlFor={`${id}emailAddress`} className="form-label">Email</label>
        <input onChange={handleEmailAddressChange} value={emailAddress} type="email" name="emailAddress" id={`${id}emailAddress`} className="form-control" required autoComplete="email" />
      </div>
      <button className="btn btn-primary">{buttonText}</button>
    </form>
  );
};
