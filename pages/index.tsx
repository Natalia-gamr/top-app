import { GetStaticProps } from "next";
import { useState } from "react";
import { Button, Htag, Input, P, Rating, Tag, Textarea } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h3">Заголовок</Htag>
      <Button appearance='primary' arrow="right">кнопка</Button>
      <Button appearance='ghost' arrow="down">кнопка</Button>
      <P size="L">параграф</P>
      <P size="S">параграф</P>
      <P>параграф</P>
      <Tag size='S' color="red">Tag</Tag>
      <Tag href="#" color='primary'>Tag</Tag>
      <Tag size='S'>Tag</Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
      <Input placeholder="test"></Input>
      <Textarea placeholder="textarea"></Textarea>
    </>
  );
}

export default withLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };

};


interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}


