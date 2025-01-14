import { Section, Cell, Image, List, Input, ColorInput, Slider, IconContainer, Button, Timeline } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

import tonSvg from './ton.svg';
import icAppSvg from './ic_app.svg';
import { text } from 'stream/consumers';

const TIMELINE_ITEMS = [
  {
    header: '1',
    description: 'Phone Verification',
  },
  {
    header: '2',
    description: 'OTP Verification',
  },
  {
    header: '3',
    description: 'Document Verification',
  },
  {
    header: '4',
    description: 'Face Verification',
  },
  {
    header: '5',
    description: 'Review Information',
  },
];

export const IndexPage: FC = () => {
  return (
    <List>
      <Section header="Mobile Banking">
        <Cell
            before={<Image src={icAppSvg} style={{ backgroundColor: '#ffffff' }}/>}
            description='Verification your phone number'
            subtitle="Create New Account" >
        </Cell>
        <Input header="Phone Number" placeholder="Please enter your number"  status='focused'/>
       
      </Section>
      <Section header="Timeline">
      <Timeline  active={1} horizontal={true}>
        {TIMELINE_ITEMS.map((item, index) => (
          <Timeline.Item key={index} header={item.header}>
            {item.description}
          </Timeline.Item>
        ))}
      </Timeline>
      <Button size="m" mode='white' stretched>SUBMIT  </Button>
    </Section>
    </List>
  );
};
