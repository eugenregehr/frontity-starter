import { connect, Global, styled } from "frontity";
import Switch from "@frontity/components/switch";

import { GlobalStyles } from '../styles/global-styles';
import Loading from "./loader";
import Header from "./header";
import Posts from "./posts";
import Post from "./post";
import Footer from "./footer";
import Error from "./error";


const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Global styles={GlobalStyles} />
      <Container>
        <Header />
        <div className={'main'}>
          <Switch>
            <Loading when={data.isFetching} />
            <Posts when={data.isArchive} />
            <Post when={data.isPostType} />
            <Error when={data.isError} />
          </Switch>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default connect(Root);

const Container = styled.div`
  padding: 0 1.5rem;
  background: #fff;
  min-height: 100vh;
  min-height: -webkit-fill-available;
`