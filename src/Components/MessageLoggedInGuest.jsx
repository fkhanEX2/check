import React from 'react';

export function MessageLoggedInGuest (props) {
    return(
      <>
        <h1>Please Log In First</h1>
        <button onClick={props.buttonClickFunc}>Log In</button>
      </>
    )
}

// export default MessageLoggedInGuest;