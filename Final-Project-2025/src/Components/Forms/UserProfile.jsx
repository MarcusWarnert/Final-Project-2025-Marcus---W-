/*import React from 'react';
import { useState, useEffect } from "react";

export default function UserProfile() {
 const [user, setUser] = useState(null);

 useEffect(() => {
 fetch()
   .then((response) => response.json())
  .then((data) => setUser(data));
 }, []); // The empty dependency array ensures the effect runs only once

 return (
 <div>
  {user ? (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  ) : (
    <p>Loading...</p>
  )}
 </div>
 );
}
*/

import React, { useRef } from 'react';

function FocusInput() {
 const inputRef = useRef(null);

 const handleFocus = () => {
 if (inputRef.current) {
   inputRef.current.focus();
 }
 };

 return (
 <div>
   <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
   <button onClick={handleFocus}>Focus Input</button>
 </div>
 );
}
export default FocusInput;