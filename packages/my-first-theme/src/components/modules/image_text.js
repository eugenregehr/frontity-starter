import { connect, styled } from "frontity";
import Image from "../images/acf-media";

const ImageText = ({ acfData }) => {

  return (
    <ImageTextWrapper>
      <Image className={"image"} source={acfData.image} />
      <p dangerouslySetInnerHTML={{ __html: acfData.text }} />
    </ImageTextWrapper>
  )
}

export default connect(ImageText);

const ImageTextWrapper = styled.div`
  max-width: 40rem; 
  margin: auto;
  .image{
    margin-bottom: 2rem;

  }
`