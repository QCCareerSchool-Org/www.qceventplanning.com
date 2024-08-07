'use client';

import type { ChangeEventHandler, FC } from 'react';
import { useCallback, useId, useState } from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

import styles from './index.module.scss';
import DownloadIcon from '@/components/download.svg';

type Props = {
  successLocation: string;
  listId: number;
  countryCode: string;
  provinceCode: string | null;
  buttonText?: string;
  buttonClassName?: string;
  placeholders?: boolean;
  gclid?: string;
  msclkid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
};

export const BrevoForm: FC<Props> = props => {
  const id = useId();
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ emailAddress, setEmailAddress ] = useState('');
  const [ token, setToken ] = useState<string>();
  const [ refreshReCaptcha ] = useState(false);

  const handleFirstNameChange: ChangeEventHandler<HTMLInputElement> = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange: ChangeEventHandler<HTMLInputElement> = e => {
    setLastName(e.target.value);
  };

  const handleEmailAddressChange: ChangeEventHandler<HTMLInputElement> = e => {
    setEmailAddress(e.target.value);
  };

  const handleVerify = useCallback((t: string): void => {
    setToken(t);
  }, []);

  return (
    <form action="/leads" method="post" className={styles.brochureForm}>
      <input type="hidden" name="g-recaptcha-response" value={token} />
      <input type="hidden" name="successLocation" value={props.successLocation} />
      <input type="hidden" name="listId" value={props.listId} />
      <input type="hidden" name="countryCode" value={props.countryCode} />
      <input type="hidden" name="provinceCode" value={props.provinceCode ?? ''} />
      {props.gclid && <input type="hidden" name="gclid" value={props.gclid} />}
      {props.msclkid && <input type="hidden" name="msclkid" value={props.msclkid} />}
      {props.utmSource && <input type="hidden" name="utmSource" value={props.utmSource} />}
      {props.utmMedium && <input type="hidden" name="utmMedium" value={props.utmMedium} />}
      {props.utmCampaign && <input type="hidden" name="utmCampaign" value={props.utmCampaign} />}
      {props.utmContent && <input type="hidden" name="utmSource" value={props.utmContent} />}
      {props.utmTerm && <input type="hidden" name="utmSource" value={props.utmTerm} />}
      <div className="mb-3">
        {!props.placeholders && <label htmlFor={`${id}firstName`} className="form-label">Name</label>}
        <input onChange={handleFirstNameChange} value={firstName} type="text" name="firstName" id={`${id}firstName`} className="form-control" placeholder={props.placeholders ? 'Name' : undefined} autoComplete="given-name" autoCapitalize="words" />
      </div>
      <input onChange={handleLastNameChange} value={lastName} type="hidden" name="lastName" id={`${id}lastName`} />
      <div className="mb-3">
        {!props.placeholders && <label htmlFor={`${id}emailAddress`} className="form-label">Email <span className="text-primary">*</span></label>}
        <input onChange={handleEmailAddressChange} value={emailAddress} type="email" name="emailAddress" id={`${id}emailAddress`} className={`form-control ${styles.emailAddressInput}`} placeholder={props.placeholders ? 'Email *' : undefined} required autoComplete="email" autoCapitalize="none" />
      </div>
      <div className="mb-3">
        <div className="form-check">
          <input type="checkbox" name="emailOptIn" id={`${id}emailOptIn`} className="form-check-input" />
          <label htmlFor={`${id}emailOptIn`} className="form-check-label small">
            I agree to receive additional emails from QC, including <span className="d-none d-md-inline">promotions, </span>special offers<span className="d-none d-md-inline"> and more</span>. Unsubscribe anytime!
          </label>
        </div>
      </div>
      <button className={`${styles.button} ${props.buttonClassName ?? 'btn btn-primary'}`}><span className="text-navy"><DownloadIcon height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span>{props.buttonText ?? 'Get Your Free Catalog'}</button>
      <GoogleReCaptcha onVerify={handleVerify} refreshReCaptcha={refreshReCaptcha} />
    </form>
  );
};
