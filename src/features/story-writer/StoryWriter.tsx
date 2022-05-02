import { Container } from 'theme-ui';

import { Tiptap } from './components/Tiptap';

export const StoryWriter = () => {
  return (
    <Container
      className="story-writer"
      sx={{
        padding: '1.5em',
        variant: 'customBorder.default',
      }}
    >
      <Tiptap />
    </Container>
  );
};
