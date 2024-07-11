import { useCallback, useRef, useState, useEffect } from 'react';
import Menu from './Menu';
import Page from './Page';
import ScheduleHeader from './ScheduleHeader';
import ScheduleItem from './ScheduleItem';
import WhatToBring from './WhatToBring';
import ChooseShuttle from './ChooseShuttle';
import './App.scss';
import CommentsPage from './Comments';
import thanks from './thanks.gif';

function App() {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const [marginTop, setMarginTop] = useState(0);
  const [marginBottom, setMarginBottom] = useState(0);
  const setCurrentPage = useCallback((pageId) => {
    const listNode = ref.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelector(`#${pageId}`);
    imgNode.scrollIntoView({
      behavior: 'smooth'
    });
  },
    [ref]);

  const handleImageLoad = () => {
    const image = imageRef.current;

    if (image) {
      const imageHeight = image.clientHeight;
      const viewportHeight = window.innerHeight;

      // Calculate margins to fill the viewport height
      const remainingHeight = viewportHeight - imageHeight;
      const marginTop = remainingHeight / 2;
      const marginBottom = remainingHeight / 2;

      setMarginTop(marginTop);
      setMarginBottom(marginBottom);
    }
  };

  useEffect(() => {
    // Calculate margins when the component mounts
    handleImageLoad();
  }, []);
  return (
    <div className='App' ref={ref}>
      <div className='background'></div>
      <Menu setCurrentPage={setCurrentPage} />

      <Page id='Home' pageClassName='home'>
        <div className='text title'>
          <div>Omer</div>
          <div>&</div>
          <div>Idan</div>
        </div>
        <div className='text dates'>22.06 - 20.06</div>
      </Page>
      
      <Page
        id='Updates'
        pageClassName='information'>
        <div className='title'>
          <div>Updates!</div>
        </div>

        <div className='useful-update-container' >
          <div className='section-container'>
            <div className='text'>
              {
                new Date(2024, 6, 20) - new Date() >= 0 ?
                  <div>
                    אנחנו מתרגשים ממש לפגוש את כולכם בעוד <span>{Math.round((new Date(2024, 5, 21) - new Date()) / (1000 * 60 * 60 * 24))}</span> ימים! אבל מי סופר????
                  </div>
                  :
                  <div>
                    מה?? זה כבר קרה?? אפשר שוב?
                  </div>
              }
            </div>
          </div>
          <div className='separator'></div>
          <div className='section-container'>
            <div className='text'>
              <div className='title-in-text'>
                Dress Code
              </div>
              <div>
                ערב טברנה (יום חמישי) - מוזמנים ללבוש כל גווני הלבן, בז׳ וכו׳
              </div>
              <div>
                ערב החתונה (יום שישי) - תבואו חגיגיים!
              </div>
            </div>
          </div>
          <div className='separator'></div>
          <div className='section-container'>
            <div className='text'>
            <div>
                חשוב חשוב חשוב!
              </div>
            <div>
                הזמנים של השאטלים שונו!! שימו לב לשעות ומלאו את הטופס שנדע איך אתם חוזרים! ❤️
              </div>
              <div className='submit-button' onClick={_ => setCurrentPage('Information')}>
                    תלחצו פה, נעביר אתכם ישר למקום הנכון להתעדכן בו
                </div>
            </div>
          </div>
          <div className='separator'></div>
          <div className='section-container'>
            <div className='text'>
              <div>
                אם יהיו עוד שינויים נתמודד איתם! אל חשש!
              </div>
            </div>
          </div>
        </div>

      </Page>
      <div id='Entrance' className='img-container'>
        <img id='welcome-img' alt='mySvgImage' onLoad={handleImageLoad}
          ref={imageRef}
          style={{ marginTop: `${marginTop}px`, marginBottom: `${marginBottom}px` }} />
      </div>
      <div className='thanks-container'>
        <img id='thanks-img' alt='mySvgImage' src={thanks} />
      </div>
      <Page
        id='Schedule'
        pageClassName='schedule'
        title='Schedule'>
        <div className='schedule-container'>
          <ScheduleHeader date='חמישי - 20.06.2024' />
          <ScheduleItem emoji={'🛩️'} text='נוחתים באתונה' />
          <ScheduleItem emoji={'🚌'} text='נסיעה של כשעה למלון בהסעות' />
          <ScheduleItem emoji={'🥂'} text='דרינק ראשון וצ׳ק אין' />
          <ScheduleItem emoji={'🍽️'} text='ארוחת צהריים של אחרי טיסה' />
          <ScheduleItem emoji={'🏖️'} text='זמן חופשי' />
          <ScheduleItem
            emoji={'🇬🇷'}
            text='טברנה יווניתתת'
            isLast
          />

          <div className='separator'></div>

          <ScheduleHeader date='שישי - 21.06.2024' />
          <ScheduleItem emoji={'🥞'} text='ארוחת בוקר כיפית במלון' />
          <ScheduleItem emoji={'🪩'} text='בגד ים, מוזיקה ואוזו בבריכה' />
          <ScheduleItem emoji={'🍔'} text='מנשנשים צהריים במים' />
          <ScheduleItem emoji={'🧖‍♀️'} text='זמן חופשי לשנוצ ולהתגנדר' />
          <ScheduleItem emoji={'💍'} text='מתחתניםםםםםם!!!!!!!' />
          <ScheduleItem
            emoji={'💃🏼'}
            text='אוכלים, רוקדים ומגבות באווירררררר'
            isLast
          />

          <div className='separator'></div>

          <ScheduleHeader date='שבת - 22.06.2024' />
          <ScheduleItem emoji={'☕'} text='בוקר של אחרי בבופה' />
          <ScheduleItem emoji={'🧳'} text='צ׳ק אאוט ב-11:30' />
          <ScheduleItem emoji={'🥰'} text='נשיקות חיבוקים' />
          <ScheduleItem emoji={'🚌'} text='חוזרים הביתה בהסעות' isLast />
        </div>
      </Page>
      <div className='seperators-container'>
        <img id='seperator-1-img' alt='mySvgImage' />
      </div>

      <Page
        id='WhatToBring'
        pageClassName='what-to-bring'
        title='Todo List'>
        <WhatToBring />
      </Page>
      <div className='seperators-container'>
        <img id='seperator-2-img' alt='mySvgImage' />
      </div>

      <Page
        id='Information'
        pageClassName='information'>
        <div className='title'>
          <div>Shuttles</div>
        </div>

        <div className='useful-information-container' >
          <div className='section-container'>
            <div className='info-title'>איך מגיעים</div>
            <div className='text'>
              <div>
                ארגנו עבורכם שני שאטלים שיאספו אתכם משדה התעופה באתונה (ATH) ויביאו אתכם עד המלון. השאטלים מתוכננים לשעות:
              </div>
              <div>
                10:00 - מיועד לטיסות שנוחתות בסביבות 7-9
              </div>
              <div>
                14:30 - מיועד לטיסות שנוחתות בסביבות 11-14
              </div>
            </div>
          </div>
          <div className='separator'></div>
          <div className='section-container'>

            <div className='info-title'>איך חוזרים</div>
            <div className='text'>
              <div>
                נפרד לאחר הצ׳ק אאוט מהמלון ב11:30 ביום שבת (עצוב לנו כבר מעכשיו!!!!)
              </div>
              <div>
                שני שאטלים לרשותכם! האחד, לשדה התעופה באתונה (ATH) - נסיעה של כשעה ורבע
              </div>
              <div>
                והשני לאתונה, למרכז העיר - נסיעה של כשעה ורבע גם כן
              </div>
              <div>
                תעדכנו אותנו באיזה מן השאטלים ברצונכם לעלות ובהקדם! ❤️
              </div>
            </div>
          </div>
          <div className='separator'></div>
          <div className='section-container'>
          {/* <div className='title-in-text'>מה השאטל שתרצו לחזור בו?</div> */}

            <div className='shuttle-info-title'>לאן השאטל שתרצו לחזור בו בשבת ב12:00?</div>
            <div className='text'>
              <ChooseShuttle />
            </div>
          </div>
        </div>

      </Page>

      <div className='seperators-container'>
        <img id='seperator-3-img' alt='mySvgImage' />
      </div>

      <Page
        id='Comments'
        pageClassName='comments'>
        <div className='title'>
          <div>Comments</div>
        </div>
        <CommentsPage />
      </Page>
    </div>
  );
}

export default App;
