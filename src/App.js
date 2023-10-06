import { useCallback, useRef } from 'react';
import Menu from './Menu';
import Page from './Page';
import ScheduleHeader from './ScheduleHeader';
import ScheduleItem from './ScheduleItem';
import WhatToBring from './WhatToBring';
import './App.scss';

function App() {
  const ref = useRef(null);
  const setCurrentPage = useCallback((pageId) => {
    const listNode = ref.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelector(`#${pageId}`);
    imgNode.scrollIntoView({
      behavior: 'smooth'
    });
  },
    [ref]);

  return (
    <div className='App' ref={ref}>
      <div className='background'></div>
      <Menu setCurrentPage={setCurrentPage} />

      <Page id='Home' pageClassName='home'>
        <div className='text title'>
          <div>Idan</div>
          <div>&</div>
          <div>Omer</div>
        </div>
        <div className='text dates'>22.06 - 20.06</div>
      </Page>
      <div id='Entrance' className='img-container page'>
        <img id='welcome-img' alt='mySvgImage' />
      </div>
      <Page
        id='Schedule'
        pageClassName='schedule'
        title='Schedule'>
        <div className='schedule-container'>
          <ScheduleHeader date='חמישי - 20.06.2024' />
          <ScheduleItem emoji={'🛩️'} text='נותחים באתונה' />
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
          <ScheduleItem emoji={'👔'} text='זמן חופשי לשנוצ ולהתגנדר' />
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
          <div>Information</div>
        </div>

        <div className='useful-information-container' >
          <div className='section-container'>
            <div className='info-title'>איך מגיעים</div>
            <div className='text'>
              <div>
                ארגנו עבורכם שני שאטלים שיאספו אתכם משדה התעופה באתונה (ATH) ויביאו אתכם עד המלון. השאטלים מתוכננים לשעות:
              </div>
              <div>
                11:00 - מיועד למשקימי קום לטיסות שנוחתות בסביבות 10
              </div>
              <div>
                13:00 - מיועד לכמה טיסות שכבר ראינו שנוחתות בסביבות 12
              </div>
              <div className='side-note-container'>
                <div>
                  *יש טיסות שנוחתות יותר מאוחר, למה לא בהן?
                </div>
                <div>
                  להגיע למלון בשעה 16-17 יהיה לכם מאוחר ולא תספיקו לקלוט מה קורה וכבר אתם באירוע ערב!
                </div>
                <div>
                  חשוב לנו שיהיה לכם זמן להתאקלם, לעשות צ׳קאין כמו שצריך והכי חשוב - להיכנס לאווירה!
                </div>
              </div>
            </div>
          </div>
          <div className='separator'></div>
          <div className='section-container'>

            <div className='info-title'>אישורי הגעה</div>
            <div className='text'>
              <div>
                כמו שאתם כבר יודעים, אנחנו מחכים ומתרגשים לשמוע שסגרתם טיסות!
              </div>
              <div>
                שלחו לנו וואטסאפ עם צילום מסך של המספר טיסה והשעות הלוך חזור
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
                נעלה לשאטלים חזרה לאתונה - נסיעה של כשעה, רק מזכירים.
              </div>
              <div>
                לא נעצור אתכם אם תישארו באתונה, תעשו שופינג, תעברו לאי אחר או תחזרו ישר הביתה ❤️
              </div>
            </div>
          </div>
        </div>

      </Page>
      <div className='seperators-container'>
        <img id='seperator-3-img' alt='mySvgImage' />
        </div>
      {/* <Page
        id='Comments'
        pageClassName='hotel'>
        <div className='title'>
          <div>Comments</div>
        </div>
      </Page> */}

        <div className='thanks-container'>
        <img id='thanks-img' alt='mySvgImage' />
        </div>
    </div>
  );
}

export default App;
