import { connect, styled } from "frontity";
import Link from "../link";

const Nav = ({ state }) => (
  <Navigation>
    {state.theme.menu.map(([name, link]) => {
      // Check if the link matched the current page url
      let isCurrentPage
      if (state.router.link == link) {
        isCurrentPage = state.router.link == link
      } else {
        if (link !== "/") {
          isCurrentPage = state.router.link.includes(link)
        }
      };
      return (
        <div key={name}>
          <Link
            href={link}
            current={isCurrentPage ? "page" : undefined}>
            {name}
          </Link>
        </div>
      );
    })}
  </Navigation>
);

export default connect(Nav);

const Navigation = styled.nav`
  
`