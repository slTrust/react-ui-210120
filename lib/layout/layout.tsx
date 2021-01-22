import React, {ReactElement} from "react";
import "./layout.scss";
import {scopedClassMaker} from '../helpers/classes';
import  Aside from './aside';

const sc = scopedClassMaker("fui-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {
    children:ReactElement | Array<ReactElement>
}
const Layout: React.FC<Props> = props => {
  const { className, ...rest } = props;
  const children = props.children as Array<ReactElement>;
  const hasAside = 'length' in children &&
      children.reduce((result,node)=> result || node.type ===Aside,false);
  return (
    <div className={sc({"":true,hasAside}, { extra: className })} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;
export { Layout };
export { default as Header } from './header';
export { default as Content } from './content';
export { default as Footer } from './footer';
export { default as Aside } from './aside';
