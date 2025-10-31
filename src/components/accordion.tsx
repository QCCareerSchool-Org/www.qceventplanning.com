import type { FC, PropsWithChildren } from 'react';
import { Accordion as BootstrapAccordion } from 'react-bootstrap';

type Props = {
  title: string;
  open?: boolean;
  className?: string;
};

export const Accordion: FC<PropsWithChildren<Props>> = ({ title, children, open, className }) => (
  <BootstrapAccordion className={className} defaultActiveKey={open ? '0' : undefined}>
    <BootstrapAccordion.Item eventKey="0">
      <BootstrapAccordion.Header><span className="lead fw-bold" dangerouslySetInnerHTML={{ __html: title }} /></BootstrapAccordion.Header>
      <BootstrapAccordion.Body>
        {children}
      </BootstrapAccordion.Body>
    </BootstrapAccordion.Item>
  </BootstrapAccordion>
);
