import { styled } from '../styles/stitches';
import NavigationBar from './NavigationBar';

export const Landing = () => {
  return (
    <Container>
      <NavigationBar />
      <BackgroundImage src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/d1dd26146775103.62b6056f8415b.jpg" />
    </Container>
  );
};

export default Landing;

const Container = styled('div', {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  background: '#15151E',
});

const BackgroundImage = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
