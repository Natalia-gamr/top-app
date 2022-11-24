import { Button, Htag, P, Tag } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h3">Text</Htag>
      <Button appearance='primary' arrow="right">Еу</Button>
      <Button appearance='ghost' arrow="down">цуацйу</Button>
      <P size="L">sdgaserg</P>
      <P size="S">argre</P>
      <P>argaerw</P>
      <Tag size='S' color="red">rergergth</Tag>
      <Tag href="#" color='primary'>dhger</Tag>
      <Tag size='S'>rth</Tag>
    </div>
  );
}
