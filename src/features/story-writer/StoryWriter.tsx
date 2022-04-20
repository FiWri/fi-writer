import { Container } from 'theme-ui';
import { Tiptap } from './components/Tiptap';

export const StoryWriter = () => {
  return (
    <Container
      className="story-writer"
      sx={{
        padding: '1.5em',
        border: 'thick',
        color: 'text',
        borderRadius: 'sketchy0',
      }}
    >
      <Tiptap />
    </Container>
  );
};
