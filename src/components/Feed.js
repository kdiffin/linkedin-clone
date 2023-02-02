import {
  CalendarViewDayOutlined,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { firebaseDb } from "../firebase";
import "./css-files/Feed.css";
import FlipMove from "react-flip-move";
import InputOption from "./InputOption";
import Post from "./Post";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

  useEffect(() => {
    //access posts and use onSnapshot, onSnapshot basically means that
    //whenever the db is changed in any sort of form, the it triggers the function
    //then we can access all the messages using (snapshot) and then set our posts state accordingly
    //we access all the messages and map them out in posts array
    // (doc) => console.log(doc) and then go to QueryDocumentSnapshot ->  _delegate -> _document -> data -> value -> mapValue -> fields

    firebaseDb
      .collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    if (input.length > 1 || !" " || !"  ") {
      firebaseDb.collection("posts").add({
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoURL || "",
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } else {
      alert("stop");
    }

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Submit a post"
            />
            <button type="submit" onClick={sendPost}>
              send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption
            title="Photo"
            Icon={Image}
            color="#70B5F9"
            className={"feed__inputOption"}
          />
          <InputOption
            title="Subscriptions"
            Icon={Subscriptions}
            color="#E7A33E"
            className={"feed__inputOption"}
          />
          <InputOption
            title="Events"
            Icon={EventNote}
            color="#C0CBCD"
            className={"feed__inputOption"}
          />
          <InputOption
            title="Schedule"
            Icon={CalendarViewDayOutlined}
            color="#7FC15E"
            className={"feed__inputOption"}
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
