import React from 'react'
import { Link } from 'gatsby'
import { Dot, Card, Text, Title } from '@paygreen/paygreen-ui'

export default function Home() {
  return (
    <div>
      <Title align="center">Transformez le paiement sur votre plateforme</Title>
      <Card>
        <Link to="/tarifs">Tarifs</Link>
        <Text>
          A simple example of use for the component <strong>Card</strong>.
        </Text>
      </Card>
    </div>
  )
}
