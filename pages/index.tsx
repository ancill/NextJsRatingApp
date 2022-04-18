import { Button, Htag } from '../components';

export default function Home(): JSX.Element {

  return (
    <div>
      <Htag tag='h2'>Hello</Htag>
      <Button appearance='primary'>Helo</Button>
      <Button appearance='ghost'>ho</Button>
    </div>
  );
}
