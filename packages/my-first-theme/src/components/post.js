import { useRef, useEffect, useState } from "react";
import { connect, loadable, styled } from "frontity";

const Component = loadable(props => import(`./modules/${props.page}`), { ssr: false })

const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const postExist = post.acf.flexible_content && post.acf.flexible_content.length > 0;

  return (
    <SinglePost>
      {postExist && post.acf.flexible_content.map((item, index) => (
        <div key={index}>
          <Component page={item.acf_fc_layout} acfData={item} />
        </div>
      ))}
    </SinglePost>
  )
}

export default connect(Post);

const SinglePost = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
`