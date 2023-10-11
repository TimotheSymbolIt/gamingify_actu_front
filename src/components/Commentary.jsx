import { useState } from "react";

const Commentary = ({ commentary }) => {
  return (
    <div>
      {commentary.map((comment) => {
        return (
          <p key={comment.commentary_id}>
            {comment.description}
            {comment.user_id.name}
          </p>
        );
      })}
    </div>
  );
};
// };
export default Commentary;
