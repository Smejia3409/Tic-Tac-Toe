import "./style/message.css";
import { useState } from "react";

const Message = (displayType, ftn) => {
  const [view, setView] = useState(displayType);
  return (
    <div className="message" style={{ display: view }}>
      <div className="message-console">
        <button
          className="reset-btn"
          onClick={() => {
            setView("none");
            ftn();
          }}
        >
          Reset h
        </button>
      </div>
    </div>
  );
};

export default Message;
