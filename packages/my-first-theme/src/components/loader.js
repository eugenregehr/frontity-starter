import { styled, connect } from "frontity";

const Loading = () => {
  console.log('test');

  return (
    <Container>
      <div className={"lds-facebook"}><div></div><div></div><div></div></div>
    </Container>
  )
};

export default connect(Loading);

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
 
  .lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #000;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-of-type(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-of-type(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-of-type(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}

`