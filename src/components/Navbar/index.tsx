import React, { useState } from "react";
import Image from "next/image";
import { Layout, Button, Drawer } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";
import Logo from "@/assets/um-nav-logo.png";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { isLoggedIn } from "@/services/auth.service";
import { redirect } from "next/navigation";


const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  const handleProfileClick = () => {
    if (isLoggedIn()) {
      return redirect("/profile");
    } else {
      return redirect("/login");
    }
  };

  return (
    <nav className="navbar">
      <Layout>
        <Layout.Header className="nav-header">
          <div className="container mx-auto px-8">
            <div className="logo">
              <h3 className="brand-font -mt-11 -ml-9">
                <ScrollLink
                  className="menu-item"
                  to="courses"
                  spy={true}
                  smooth={true}
                  duration={2500}
                  offset={-960}
                >
                  <Image src={Logo} width={150} height={150} alt="Logo" />
                </ScrollLink>
              </h3>
            </div>
            <div className="navbar-menu">
              <div className="leftMenu lg:ml-[25%]">
                <LeftMenu mode={"horizontal"} />
              </div>
              <Button
                className="menuButton lg:invisible"
                type="text"
                onClick={showDrawer}
              >
                <MenuOutlined style={{ color: "white" }} />
              </Button>

              <div className="rightMenu relative lg:left-[5%]">
                {/* <RightMenu mode={"horizontal"} /> */}
                <Link href="/profile" >
                <button
          className="ml-4 inline-flex text-white bg-transparent border-0 py-2 px-6 focus:outline-none rounded text-lg header-button"
          onClick={handleProfileClick}
        >
          Profile
        </button>
                </Link>
              </div>

              <Drawer
                title={"Brand Here"}
                placement="right"
                closable={true}
                onClose={showDrawer}
                visible={visible}
                style={{ zIndex: 99999 }}
              >
                <LeftMenu mode="inline" />
                <RightMenu mode="inline" />
              </Drawer>
            </div>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};

export default Navbar;
