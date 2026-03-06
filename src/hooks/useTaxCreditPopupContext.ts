import { useContext } from 'react';

import { TaxCreditPopupContext } from '@/providers/taxCreditPopupProvider';

export const useTaxCreditPopupContext = (): [ show: boolean, toggle: () => void ] => {
  const context = useContext(TaxCreditPopupContext);
  if (context === undefined) {
    throw Error('useTaxCreditPopupContext must be used within a TaxCreditPopupProvider');
  }
  return context;
};
