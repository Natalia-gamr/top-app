import { useEffect, useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4)

  return (
    <>
      <Htag tag="h3">dftrhrt</Htag>
      <Button appearance='primary' arrow="right">Еу</Button>
      <Button appearance='ghost' arrow="down">цуацйу</Button>
      <P size="L">sdgaserg</P>
      <P size="S">argre</P>
      <P>argaerw</P>
      <Tag size='S' color="red">rergergth</Tag>
      <Tag href="#" color='primary'>dhger</Tag>
      <Tag size='S'>rth</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}></Rating>
    </>
  );
}
