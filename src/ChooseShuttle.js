import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, getDoc, updateDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDQk4hyBImS1NK9_IVgdKw20L67EzLftnY",
    authDomain: "idan-and-omer.firebaseapp.com",
    databaseURL: "https://idan-and-omer-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "idan-and-omer",
    storageBucket: "idan-and-omer.appspot.com",
    messagingSenderId: "257683271123",
    appId: "1:257683271123:web:c0a4addee2fa2037185326",
    measurementId: "G-68HM7LSLW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function ChooseShuttle() {
    const [submitted, setSubmitted] = useState(false);
    const [nameInputValue, setNameTodoInputValue] = useState('');
    const [shuttleWayValue, setShuttleWayValue] = useState('');
    const [inputError, setInputError] = useState('');
    const [selectError, setSelectError] = useState('');

    const fetchAnswer = async () => {
        const shuttleId = localStorage.getItem('shuttleId');
        if (shuttleId) {
            const shuttleData = await get(shuttleId);
            if (shuttleData) {
                setSubmitted(true);
                setNameTodoInputValue(shuttleData.name);
                setShuttleWayValue(shuttleData.way);
            }
        }
    };

    const regret = () => {
        setSubmitted(false);
    };

    const submit = async () => {
        if (!nameInputValue) {
            setInputError('לא צריך להסתבך, שימו את השם האמיתי שלכם');
        } else {
            setInputError('');
        }

        if (!shuttleWayValue) {
            setSelectError('מה זה? ככה לימדו אותך למלא טופס?');
        } else {
            setSelectError('');
        }

        if (nameInputValue && shuttleWayValue) {
            await updateOrAdd();
        }
    };
    useEffect(() => {
        fetchAnswer();
    }, []);

    if (!submitted) {
        return (<div className='add-shuttle-container'>
            <div><input
                className='add-name-input'
                type='text'
                placeholder='שם ומשפחה'
                onChange={(e) => setNameTodoInputValue(e.target.value)}
                value={nameInputValue}
            />
                {inputError && <span style={{ color: 'red' }}>{inputError}</span>}
            </div>
            <div>
                <label>
                    <select name="shuttleWay" value={shuttleWayValue}
                        onChange={(e) => setShuttleWayValue(e.target.value)}
                    >
                        <option value="">לאן בא לי לחזור?</option>
                        <option value="athens">להמשיך לחגוג באתונה</option>
                        <option value="airport">לשדה והביתה</option>
                        <option value="earlier">הולכים מוקדם יותר מהשאטלים</option>
                    </select>
                </label>
                {selectError && <span style={{ color: 'red' }}>{selectError}</span>}</div>
            <div className='submit-button' onClick={submit}>
                הוסף
            </div>
        </div>);
    } else {
        return (
            <div className='add-shuttle-container'>
                <div>שמרנו את התשובה! יעזור מאוד אם השם יהיה אמיתי כדי שבאמת נבין מי זה מי</div>
                <div className='submit-button' onClick={regret}>
                    בא לכם לתקן? לחצו
                </div>
            </div>);
    }

    async function updateOrAdd() {
        console.log(`Name: ${nameInputValue}, shuttle: ${shuttleWayValue}`);
        const shuttleId = localStorage.getItem('shuttleId');
        const shuttlesRef = collection(db, 'shuttles');
        const shuttleData = {
            name: nameInputValue,
            way: shuttleWayValue,
            timestamp: serverTimestamp(),
        };
        let shuttleReference = undefined;
        // Check if exists
        if (shuttleId) {
            shuttleReference = await get(shuttleId);
        }
        // If exists update
        if (shuttleId && shuttleReference) {
            const docRef = doc(shuttlesRef, shuttleId);
            await updateDoc(docRef, shuttleData);
        } else { // Else add
            const shuttle = await addDoc(shuttlesRef, shuttleData);
            localStorage.setItem('shuttleId', shuttle.id);
        }
        setSubmitted(true);
    }

    async function get(shuttleId) {
        const shuttlesRef = collection(db, 'shuttles');
        const docRef = doc(shuttlesRef, shuttleId);
        const snapshop = await getDoc(docRef);
        return snapshop.data();
    }
}

export default ChooseShuttle;
