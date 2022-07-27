import { styled } from '../styles/stitches';
import Logo from '../styles/assets/Logo';
import Link from 'next/link';

export const NavigationBar = () => {
  return (
    <Container>
      <Left>
        <LogoWrapper>
          <Link href="">
            <Logo />
          </Link>
        </LogoWrapper>
        <Options>
          <NavOption>Races</NavOption>
          <NavOption>Standing</NavOption>
          <NavOption>Drivers</NavOption>
          <NavOption>Teams</NavOption>
        </Options>
      </Left>
      <Right>
        <FormulaFamily>
          <FormulaFamilyText>F1™</FormulaFamilyText>
          <FormulaFamilyText>F2™</FormulaFamilyText>
          <FormulaFamilyText>F3™</FormulaFamilyText>
        </FormulaFamily>
        <NavOption>Sign In</NavOption>
        <NavOption>Subscribe</NavOption>
      </Right>
    </Container>
  );
};

export default NavigationBar;

const Container = styled('div', {
  height: '200px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'absolute',
});

const LogoWrapper = styled('div', {
  margin: '0 72px 0 72px',
  cursor: 'pointer',
});

const Left = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const Right = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginRight: '72px',
});

const Options = styled('div', {});

const NavOption = styled('a', {
  marginRight: '48px',
  color: 'white',
  cursor: 'pointer',
  fontFamily: 'Titillium Web, sans-serif',

  '&:hover': {
    opacity: '90%',
  },
});

const FormulaFamily = styled('div', {
  position: 'absolute',
  top: 30,
  right: 92,
});

const FormulaFamilyText = styled('a', {
  marginRight: '48px',
  color: 'white',
  cursor: 'pointer',
  fontFamily: 'formula2',

  '&:hover': {
    opacity: '90%',
  },
});

const Menu = styled('div', {});
