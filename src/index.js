import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
     <ApprovalCard>
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        messageText="i'm a virgin"
        srcAvatar={faker.image.animals()}
      />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
            author="Alex"
            timeAgo="Today at 2:00AM"
            messageText="me too"
            srcAvatar={faker.image.animals()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
            author="Jane"
            timeAgo="Today at 5:00PM"
            messageText="good job!"
            srcAvatar={faker.image.animals()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
