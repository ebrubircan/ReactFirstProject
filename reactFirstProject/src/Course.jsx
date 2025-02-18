import React from 'react';
function Course(props) {
    const { image, title, description } = props
    return (
        <div>
            <img src={image} alt='' />
            <div>{title}</div>
            <div>{description}</div>
        </div>
  );
}

export default Course;