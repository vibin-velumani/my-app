import React, { useState } from 'react';

function LikeButton({ video }) {
  const [likes, setLikes] = useState(video.likes || 0);

  return (
    <button onClick={() => setLikes(likes + 1)}>
      Like {likes}
    </button>
  );
}

export default LikeButton;