import { Container } from 'theme-ui';

import { Tiptap } from './components/Tiptap';

export const StoryWriter = () => {
  return (
    <Container
      className="story-writer"
      sx={{
        padding: '1.5em',
        variant: 'customBorderStyles.default',
      }}
    >
      <Tiptap />
    </Container>
  );
};
