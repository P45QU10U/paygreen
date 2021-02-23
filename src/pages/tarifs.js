import React from 'react'
import { Link } from 'gatsby'
import {
  Dot,
  Card,
  Text,
  Title,
  PlaneIcon,
  Divider,
  Breadcrumb,
  Box,
  ArrowRightIcon,
  Footer,
  FooterList,
} from '@paygreen/paygreen-ui'

const elemsBread = [
  { url: '/', label: 'Accueil' },
  { url: '/tarifs', label: 'tarifs' },
]

export default function Tarifs() {
  return (
    <div>
      <Breadcrumb elements={elemsBread} />
      <Box>
        <Title underline>Une tarification transparente et flexible</Title>
      </Box>
      <Card>
        <PlaneIcon iconSize="lg" hasBackground />
        <Link to="/">Home</Link>
        <Text>Les tarifs</Text>
      </Card>
      <Divider text="Rejoignez nos 6000+ clients" />
      <Footer>
        <FooterList>
          <Link to="bla">Bla</Link>
        </FooterList>
      </Footer>
    </div>
  )
}
