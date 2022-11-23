import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h3">Text</Htag>
      <Button appearance='primary' arrow="right">Еу</Button>
      <Button appearance='ghost' arrow="down">цуацйу</Button>
    </div>
  );
}
