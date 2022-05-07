import { Theme, TLengthStyledSystem } from '@theme-ui/core';
import { Scale } from '@theme-ui/css';
import * as CSS from 'csstype';

type ThemeRadii = Scale<CSS.Property.BorderRadius<TLengthStyledSystem>> & {
  radius0: string;
  radius1: string;
  radius2: string;
  radius3: string;
  radius4: string;
  circle: string;
};

type ThemeBorders = Scale<CSS.Property.Border> & {
  thick: string;
  thin: string;
};

export type ScalesAndStyles = Theme & {
  radii: ThemeRadii;
  borders: ThemeBorders;
};
