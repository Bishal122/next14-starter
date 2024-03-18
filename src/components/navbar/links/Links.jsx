import React from 'react';
import styles from "./links.module.css"
const Links = () => {
    {
        title: "Homepage",
        path: "/",
    },
    {
        title:"About",
        path:"/about",
    },
    {
        title:"Contact",
        path:"/Contact",
    },
    {
        title:"Blog",
        path:"/blog",
    },
  return (
    <div className={styles.links}>
        {Links.map((link=>(
            <NavLink item={link} key={link.title}/>
        )))}
    </div>
  );
};

export default Links;