import type { FC } from 'react';

import type { Employee } from './data';
import { ImageCircle } from '@/components/imageCircle';

export const EmployeeColumn: FC<Employee> = ({ src, imagePositionX, imagePositionY, name, heading, description }) => (
  <div className="col-12 col-lg-6">
    <div className="mb-3">
      <ImageCircle src={src} alt={name} size={200} imagePositionX={imagePositionX} imagePositionY={imagePositionY} />
    </div>
    <h3 className="h6">{heading}</h3>
    <p className="small mb-0">{description}</p>
  </div>
);
