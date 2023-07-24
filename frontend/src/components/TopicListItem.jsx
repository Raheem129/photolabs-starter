import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {

  return (
    <li onClick={() => props.fetchPhotosByTopic(props.id)}
      className="topic-list__item">
      {props.title}
    </li>
  );
};


TopicListItem.defaultProps = {
  "id": "1",
  "slug": "topic-1",
  "label": "Nature"
};
export default TopicListItem;