import { Container } from 'theme-ui';
import { defaultBorderStyles } from '../../themes/fiwri/borders';
import { Tiptap } from './TipTap/Tiptap';

export const StoryWriter = () => {
  return (
    <Container
      className="story-writer"
      sx={{
        padding: '1.5em',
        ...defaultBorderStyles,
      }}
    >
      <Tiptap />
    </Container>
  );
};
