import React, {ReactElement} from "react";
import "./layout.scss";
import { scopedClassMaker } from "../classes";
import  Aside from './aside';

const sc = scopedClassMaker("fui-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {
    children:ReactElement | Array<ReactElement>
}
const Layout: React.FC<Props> = props => {
  const { className, children, ...rest } = props;
  let hasAside = false;
  if((props.children as Array<ReactElement>).length){
      (props.children as Array<ReactElement>).map(node => {
          if(node.type === Aside){
            hasAside = true;
          }
      });
  }

  return (
    <div className={sc("", { extra: [className,hasAside && 'hasAside'].join(' ') })} {...rest}>
      {children}
    </div>
  );
};

export default Layout;
