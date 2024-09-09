import React, { useState, useEffect } from "react";

function UserProfile({ name }) {
  const [userInitials, setUserInitials] = useState("");

  useEffect(() => {
    if (name) {
      setUserInitials(generateInitials(name));
    }
  }, [name]);

  return (
    <div className="flex items-center justify-center rounded-full text-white text-2xl font-bold select-none">
      {name ? (
        <div className="text-white text-4xl font-normal">{userInitials}</div>
      ) : (
        <div className="avatar">
          <div className="rounded-full">
            <img
              src="https://pixabay.com/gifs/get/gb384793a02343ba3eb78330810947c47949877134873d5be3615b263e663fec2b5bb18d132c7e9d62ed0af72211015c943ac0c09c9b758f98ecc4810cf4b73f0566398f06fb6052b5efa9a2afe2b6cab_128.gif"
              alt="Profile"
            />
          </div>
        </div>
      )}
    </div>
  );
}

function generateInitials(name) {
  const words = name.split(" ");
  const initials = words
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
  return initials;
}

export { UserProfile, generateInitials };
