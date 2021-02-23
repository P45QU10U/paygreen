import React from 'react'
import { Card, Text, Title } from '@paygreen/paygreen-ui'

export default function Home() {
  return (
    <div>
      <Card>
        <Title align="center">
          Hello <strong>World</strong>!
        </Title>

        <Text>
          A simple example of use for the component <strong>Card</strong>.
        </Text>
      </Card>
    </div>
  )
}
