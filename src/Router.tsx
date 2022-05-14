import { Route, Routes } from 'react-router-dom';

import { NotFound } from '~/components';
import { Home } from '~/features/home';
import { StoryWriter } from '~/features/story-writer';

export const routes = {
  HOME: '/',
  NOT_FOUND: '*',
  STORY_VIEWER: '/story-viewer',
  STORY_WRITER: '/story-writer',
};

export const Router = () => (
  <Routes>
    <Route path={routes.HOME} element={<Home />} />
    <Route path={routes.STORY_VIEWER} element={<NotFound />} />
    <Route path={routes.STORY_WRITER} element={<StoryWriter />} />
    <Route path={routes.NOT_FOUND} element={<NotFound />} />
  </Routes>
);
