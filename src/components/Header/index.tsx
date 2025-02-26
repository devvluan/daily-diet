import {
  Container,
  ImageProfile,
  BackButton,
  LogoIcon,
  DailyText,
  DietText,
  DailyContainer,
} from "./styles";

export function Header() {
  const imgProfile = "https://avatars.githubusercontent.com/u/93952637?v=4";
  return (
    <Container>
      <BackButton>
        <LogoIcon />
        <DailyContainer>
          <DailyText>Daily</DailyText>
          <DietText>Diet</DietText>
        </DailyContainer>
      </BackButton>
      <ImageProfile source={{ uri: imgProfile }} />
    </Container>
  );
}
