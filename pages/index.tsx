import { Button, Htag } from '../components';
import { Paragraph } from '../components/Paragraph/Paragraph';

export default function Home(): JSX.Element {

  return (
    <div>
      <Htag tag='h2'>Hello</Htag>
      <Button appearance='primary' arrow='right'>Helo</Button>
      <Button appearance='ghost' arrow='down'>ho</Button>
      <Paragraph size='l'>this is paragraph</Paragraph>
    </div>
  );
}
