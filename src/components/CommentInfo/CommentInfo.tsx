import React from 'react';

import { Comment } from '../../types/Comment';

interface CommentInfoProps {
  comment: Comment;
}

export const CommentInfo: React.FC<CommentInfoProps> = ({
  comment: {
    name,
    email,
    body,
  },
}) => {
  const mailLink = `mailto:${email}`;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>
        {' by '}
        <a
          className="CommentInfo__email"
          href={mailLink}
        >
          {email}
        </a>
      </div>

      <div className="CommentInfo__body">
        {body}
      </div>
    </div>
  );
};