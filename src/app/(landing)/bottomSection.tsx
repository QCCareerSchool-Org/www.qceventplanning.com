import type { FC, PropsWithChildren } from 'react';

export const BottomSection: FC<PropsWithChildren> = ({ children }) => (
  <section className="bg-navy text-white pb-0">
    <div className="container">
      <div className="row justify-content-center pb-s" style={{ borderBottom: '0.5px solid rgba(255,255,255,0.5)' }}>
        <div className="col-12 col-lg-9 text-center">
          {children}
        </div>
      </div>
    </div>
  </section>
);
