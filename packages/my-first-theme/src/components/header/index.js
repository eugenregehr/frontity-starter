import { connect, styled } from "frontity";

import Link from "../link";
import Nav from "./nav";

const Header = () => {

  return (
    <Wrapper>
      <LogoLink href={'/'} nav>
        <span>Logo</span>
      </LogoLink>
      <Nav />
    </Wrapper>
  )

}

export default connect(Header)


const LogoLink = styled(Link)`
  cursor: pointer;
`
const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a{
    display: block;
  }
`