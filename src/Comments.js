import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, orderBy, query, getDocs, limit, serverTimestamp } from 'firebase/firestore';
import moment from 'moment';

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
    const commentsQuery = query(commentsRef, orderBy('timestamp', 'desc'), limit(50));
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
          placeholder="תנו שם"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          rows="4"
          cols="50"
          placeholder="כל מה שעולה לכם לראש"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button onClick={addComment}>Add Comment</button>
      </div>
      <div className="comments-list">
        <ul className="comments-ul">
          {comments.map((comment, index) => (
            <li key={index} className="comment-item">
              {/* <strong>{comment.name}:</strong> {comment.text} */}
              {/* <p className="comment-name">{comment.name}:</p>
              <p className="comment-time">
                  {formatTimestamp(comment.timestamp)}
                </p>
              <p className="comment-text">{comment.text}</p> */}

              <div className="comment-content">
                <p className="comment-name">{comment.name}</p>
                <p className="comment-time">
                  {formatTimestamp(comment.timestamp)}
                </p>
                <p className="comment-text">{comment.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentsPage;