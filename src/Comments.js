import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, orderBy, query, getDocs, limit, serverTimestamp } from 'firebase/firestore';
import moment from 'moment';
const PAGE_LIMIT = 200;
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

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');

  // Function to fetch comments from Firebase
  const fetchComments = async () => {
    const commentsRef = collection(db, 'comments');
    const commentsQuery = query(commentsRef, orderBy('timestamp', 'desc'), limit(PAGE_LIMIT));
    const snapshot = await getDocs(commentsQuery);

    // const snapshot = await commentsRef.orderBy('timestamp', 'desc').get();
    const commentData = snapshot.docs.map((doc) => doc.data());
    setComments(commentData);
  };

  // Function to add a new comment to Firebase
  const addComment = async () => {
    if (newComment && name) {
      const commentsRef = collection(db, 'comments');
      await addDoc(commentsRef, {
        name,
        text: newComment,
        timestamp: serverTimestamp(),
      });
      setNewComment('');
      fetchComments();
    }
  };

  // Function to format the timestamp using moment.js
  const formatTimestamp = (timestamp) => {
    return moment(timestamp.toDate()).fromNow();
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="comments-container">
      <div>
        <input
          type="text"
          placeholder="שם בת.ז"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="כל מה שעולה לכם לראש"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={addComment}>הוסף</button>
      </div>
      <div className="comments-list">
        <div className='comments-table-wrapper'>
        <table className="comments-table">
          <tbody>
            {comments.map((comment, index) => (
              <tr key={index}>
                <td>
                  <div className="comment-title">
                    <div className="comment-name">{comment.name}</div>
                    <div className="comment-time">
                      {formatTimestamp(comment.timestamp)}
                    </div>
                  </div>
                </td>
                <td className='comment-text' >{comment.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default CommentsPage;