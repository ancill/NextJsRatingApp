import { Button, Htag, Tag } from '../components';
import { Paragraph } from '../components/Paragraph/Paragraph';

export default function Home(): JSX.Element {



  return (
    <div>
      <Htag tag='h2'>Hello</Htag>
      <Button appearance='primary' arrow='right'>Hello</Button>
      <Button appearance='ghost' arrow='down'>ho</Button>
      <Paragraph size='l'>this is paragraph</Paragraph>
      <Tag color='green' >Hello</Tag>
      <Tag color='red' >Hello</Tag>
      <Tag color='gray' >Hello</Tag>
      <Tag color='primary' >Hello</Tag>
      <Tag href='http://Google.com' >Hello</Tag>
    </div>
  );
}
