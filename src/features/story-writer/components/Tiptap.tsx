import { css as createClassName } from '@emotion/css';
import { Box, Button, Flex, Image } from '@theme-ui/components';
import { useThemeUI } from '@theme-ui/core';
import { css as transformStyleObject } from '@theme-ui/css';
import { Editor, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import logo from '../images/fiwri-outline.png';

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <Flex
      className="tiptap-menu"
      sx={{
        flexWrap: 'wrap',
      }}
    >
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        bold
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        italic
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        strike
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        code
      </Button>
      <Button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </Button>
      <Button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </Button>
      <Button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        paragraph
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        h1
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        h3
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        h4
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        h5
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        h6
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        bullet list
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        ordered list
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        code block
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        blockquote
      </Button>
      <Button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </Button>
      <Button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </Button>
      <Button onClick={() => editor.chain().focus().undo().run()}>undo</Button>
      <Button onClick={() => editor.chain().focus().redo().run()}>redo</Button>
    </Flex>
  );
};

export const Tiptap = () => {
  const { theme } = useThemeUI();

  const editorStyle = transformStyleObject({
    backgroundColor: ({ colors }) => colors?.muted,
    marginTop: '1em',
    padding: '0.5em',
    border: 'thick',
    color: 'text',
    borderRadius: 'sketchy0',
  })(theme);

  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: createClassName(editorStyle),
      },
    },
    content: `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you???d probably expect from a text editor. But wait until you see the lists:
      </p>
      <ul>
        <li>
          That???s a bullet list with one ???
        </li>
        <li>
          ??? or two list items.
        </li>
      </ul>
      <p>
        Isn???t that great? And all of that is editable. But wait, there???s more. Let???s try a code block:
      </p>
      <pre><code class="language-css">body {
  display: none;
}</code></pre>
      <p>
        I know, I know, this is impressive. It???s only the tip of the iceberg though. Give it a try and click a little bit around. Don???t forget to check the other examples too.
      </p>
      <blockquote>
        Wow, that???s amazing. Good work, boy! ????
        <br />
        ??? Mom
      </blockquote>
    `,
  });

  return (
    <Box className="tiptap">
      <MenuBar editor={editor} />
      <EditorContent className="editor-content" editor={editor} />
      <Image
        src={logo}
        className="fiwri-logo"
        alt="logo"
        sx={{
          height: '40vmin',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};
