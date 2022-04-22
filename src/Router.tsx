import { Route, Routes } from 'react-router-dom';

import { NotFound } from '~/components';
import { DemoFeature } from '~/features/demo-feature';
import { Home } from '~/features/home';
import { StoryViewer } from '~/features/story-viewer';
import { StoryWriter } from '~/features/story-writer';

export const routes = {
  DEMO_FEATURE: '/demo-feature',
  ROOT: '/',
  NOT_FOUND: '*',
  STORY_VIEWER: '/story-viewer',
  STORY_WRITER: '/story-writer',
};

export const Router = () => (
  <Routes>
    <Route path={routes.ROOT} element={<Home />} />
    <Route path={routes.DEMO_FEATURE} element={<DemoFeature />} />
    <Route path={routes.STORY_VIEWER} element={<StoryViewer />} />
    <Route path={routes.STORY_WRITER} element={<StoryWriter />} />
    <Route path={routes.NOT_FOUND} element={<NotFound />} />
  </Routes>
);
