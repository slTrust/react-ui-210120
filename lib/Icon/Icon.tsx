import React from "react";
import '../importIcons';
import './icon.scss'
interface IconProps {
  name: string;
}

const Icon: React.FC<IconProps> = props => {
  return (
    <span>
      <svg  className="fui-icon">
        <use xlinkHref={`#${props.name}`} />
      </svg>
    </span>
  );
};
export default Icon;
