import React from 'react';

function MessageLoggedInAdmin (props) {
    return(
      <>
        <h1>Your Inbox Is Here</h1>
        <button onClick={props.buttonClickFunc}>Log Out</button>
      </>
    )
}

export default MessageLoggedInAdmin;