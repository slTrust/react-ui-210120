import React from 'react';

interface IconProps {
  name: string
}

const Icon: React.FC<IconProps> = (props) => {
  return (<div>{props.name}</div>)
}
export default Icon;