import React from "react";
import { Typography } from ".";

const { Title, Text, Link } = Typography

export default {
    title: 'General/Typography',
    component: Typography,
}

const Template = (props:any) => <Typography {...props} >typography</Typography>;

export const Default = Template.bind({});

export const Titles = () => (
    <React.Fragment>
      <Title level={1}>Hello world</Title>
      <Title level={2}>Hello world</Title>
      <Title level={3}>Hello world</Title>
      <Title level={4}>Hello world</Title>
      <Title level={5}>Hello world</Title>
    </React.Fragment>
  )

export const Texts = () => (
    <>
      <Text>Taib UI (default)</Text>
      <br />
      <Text type="secondary">Taib UI (secondary)</Text>
      <br />
      <Text type="success">Taib UI (success)</Text>
      <br />
      <Text type="warning">Taib UI (warning)</Text>
      <br />
      <Text type="danger">Taib UI (danger)</Text>
      <br />
      <Text disabled>Taib UI (disabled)</Text>
      <br />
      <Text mark>Taib UI (mark)</Text>
      <br />
      <Text code>Taib UI (code)</Text>
      <br />
      <Text keyboard>Taib UI (keyboard)</Text>
      <br />
      <Text underline>Taib UI (underline)</Text>
      <br />
      <Text strikethrough>Taib UI (strikethrough)</Text>
      <br />
      <Text strong>Taib UI (strong)</Text>
      <br />
      <Link href="https://Taib.io" target="_blank">
        Taib (Link)
      </Link>
    </>
  )