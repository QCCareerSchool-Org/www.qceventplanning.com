import styles from './page.module.css';
import type { PageComponent } from '@/app/serverComponent';

const BrevoTestPage: PageComponent = () => (
  <section>
    <div className="container">
      <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css" />
      <div className="sib-form" style={{ textAlign: 'center', backgroundColor: '#EFF2F7' }}>
        <div id="sib-form-container" className="sib-form-container">
          <div id="sib-container" className={`${styles.sibContainer} sib-container--large sib-container--vertical`} style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,1)', maxWidth: 540, borderRadius: 3, borderWidth: 1, borderColor: '#C0CCD9', borderStyle: 'solid' }}>
            <form id="sib-form" method="POST" action="https://7eeb77d8.sibforms.com/serve/MUIFAAxZZ2lw3zCbcBRWn3qogPogbvWODiCehaVyJKpuP2yTY0dN4VxayczkrNrq27GwKoPEpai5UaAphKu25if3MBm_2Qz9C10IAtS2fiHzEwqkoJig5uKV-ydQjTFnuooFH_4m-fg3eAsnbjayCimlBmMxngVDHwkXICjIbiPlpcASZmqyLbhSCmLLfr2afW70CzmWDv55tODd">
              <div style={{ padding: '8px 0' }}>
                <div className="sib-form-block" style={{ fontSize: 32, textAlign: 'left', fontWeight: 700, fontFamily: 'Helvetica, sans-serif', color: '#3C4858', backgroundColor: 'transparent' }}>
                  <p>Newsletter</p>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div className="sib-form-block" style={{ fontSize: 16, textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#3C4858', backgroundColor: 'transparent' }}>
                  <div className="sib-text-form-block">
                    <p>Subscribe to our newsletter and stay updated.</p>
                  </div>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div className="sib-input sib-form-block">
                  <div className="form__entry entry_block">
                    <div className="form__label-row ">
                      <label className="entry__label" style={{ fontWeight: 700, textAlign: 'left', fontSize: 16, fontFamily: 'Helvetica, sans-serif', color: '#3c4858' }} htmlFor="EMAIL" data-required="*">Enter your email address to subscribe</label>
                      <div className="entry__field">
                        <input className="input " type="text" id="EMAIL" name="EMAIL" autoComplete="off" placeholder="EMAIL" data-required="true" required />
                      </div>
                    </div>
                    <label className="entry__error entry__error--primary" style={{ fontSize: 16, textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: 3, borderColor: '#ff4949' }} />
                    <label className="entry__specification" style={{ fontSize: 12, textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#8390A4' }}>
                      Provide your email address to subscribe. For e.g abc@xyz.com
                    </label>
                  </div>
                </div>
              </div>
              <div style={{ padding: '8px 0' }}>
                <div className="sib-form-block" style={{ textAlign: 'left' }}>
                  <button className="sib-form-block__button sib-form-block__button-with-loader" style={{ fontSize: 16, textAlign: 'left', fontWeight: 700, fontFamily: 'Helvetica, sans-serif', color: '#FFFFFF', backgroundColor: '#3E4857', borderRadius: 3, borderWidth: 0 }} form="sib-form" type="submit">
                    <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                      <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                    </svg>
                    SUBSCRIBE
                  </button>
                </div>
              </div>
              <input type="text" name="email_address_check" value="" className="input--hidden" />
              <input type="hidden" name="locale" value="en" />
              <input type="hidden" name="html_type" value="simple" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BrevoTestPage;
