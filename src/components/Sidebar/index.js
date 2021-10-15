import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Pizza</SidebarLink>
        <SidebarLink to='/'>NOS NAANS</SidebarLink>
        <SidebarLink to='/'>NOS SANDWICHES</SidebarLink>
        <SidebarLink to='/'>NOS TACOS</SidebarLink>
        <SidebarLink to='/'>NOS BOISSONS Special</SidebarLink>

      </SidebarMenu>
      
    </SidebarContainer>
  );
};

export default Sidebar;
