import { connect, styled } from "frontity";
import FLink from "@frontity/components/link";

const Link = ({ href, children }) => {
  return (
    <>
      <FLink link={href}>
        {children}
      </FLink>
    </>
  )
}

export default connect(Link)
