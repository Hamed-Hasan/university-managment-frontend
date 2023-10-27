import React from "react";
import { Menu } from "antd";
import { Link as ScrollLink } from "react-scroll";


interface LeftMenuProps {
  mode: "horizontal" | "vertical" | "inline"; 
}

const LeftMenu = ({ mode }: LeftMenuProps)  => {
  return (
    <Menu className="menu-items" mode={mode}>
      <li>
        <ScrollLink
          className="menu-item" 
          to="courses"
          spy={true}
          smooth={true}
          duration={2500}
          offset={-80}
        >
          Courses
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          className="menu-item"
          to="categories"
          spy={true}
          smooth={true}
          duration={2500}
          offset={170}
        >
          Categories
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          className="menu-item" 
          to="students"
          spy={true}
          smooth={true}
          duration={2500}
          offset={320}
        >
          Students
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          className="menu-item"
          to="news"
          spy={true}
          smooth={true}
          duration={2500}
          offset={-70}
        >
          News
        </ScrollLink>
      </li>
    </Menu>
  );
};

export default LeftMenu;