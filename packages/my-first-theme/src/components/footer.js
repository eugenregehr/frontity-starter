import { connect, styled } from 'frontity';

const Footer = () => {
  return (
    <FooterEl>
      <div>
        <p>© Copyright</p>
      </div>
    </FooterEl>
  )
}
export default connect(Footer);

const FooterEl = styled.footer`

`