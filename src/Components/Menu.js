import React from 'react'
import {
  MenuGroup,
  MenuList,
  MenuItem,
  MenuListItem,
  Layout,
  Logo,
  PlaneIcon,
  Divider,
  Footer,
  FooterList,
} from '@paygreen/paygreen-ui'
import { Link } from 'gatsby'

export default function Menu() {
  return (
    <Layout>
      <MenuGroup>
        <MenuItem>
          <Link to="/produits">Produits</Link>
        </MenuItem>
        <MenuList>
          <MenuListItem>La</MenuListItem>
        </MenuList>
      </MenuGroup>
    </Layout>
  )
}
