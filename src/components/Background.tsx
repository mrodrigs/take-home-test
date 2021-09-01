import { Container, Image } from 'styles/components/Background';

const Background: React.FC = ({ children }) => (
  <>
    <Container>
      <Image alt="Blob picture" src="/assets/images/blob.svg" />
    </Container>
    {children}
  </>
);

export default Background;
