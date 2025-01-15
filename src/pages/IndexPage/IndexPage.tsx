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
    // <center >
    //     <Image
    //           src={icAppSvg}
    //           alt="appicon"
    //           width={250}
    //           height={250}
    //      />
         
    //      <span>Mobile Banking</span>
    // </center>
    // <Page back={false} >
    //   <List  align-items="center" >
    //     <Section
    //       style={{ backgroundColor: '#ffffff' ,textAlign: 'center'}}
    //       header="Create New Account"  
    //       //footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
    //     >
    //     </Section>
    //     <Section   align-items="center">   
    //         <Cell   
    //           before={<Image src={icAppSvg} style={{ backgroundColor: '#ffffff' }}/>}
    //           subtitle="Please enter your phone number"//  style={{ backgroundColor: '#ffffff' }}
            
    //        >
    //           Mobile Banking  
    //         </Cell>

    //     </Section>
        
    //     <Section
    //     style={{ backgroundColor: '#ffffff' }}
    //       header="Application Launch Data" 
    //       footer="These pages help developer to learn more about current launch information"
          
    //     >
    //       <Link to="/init-data">
    //         <Cell subtitle="User data, chat information, technical data">Init Data</Cell>
    //       </Link>
    //       <Link to="/launch-params">
    //         <Cell subtitle="Platform identifier, Mini Apps version, etc.">Launch Parameters</Cell>
    //       </Link>
    //       <Link to="/theme-params">
    //         <Cell subtitle="Telegram application palette information">Theme Parameters</Cell>
    //       </Link>
    //     </Section>
    //   </List>
    // </Page>
  );
};
