import { Scale } from '@theme-ui/css';
import * as CSS from 'csstype';
import { Theme, TLengthStyledSystem } from 'theme-ui';

type ThemeRadii = Scale<CSS.Property.BorderRadius<TLengthStyledSystem>> & {
  radius0: string;
  radius1: string;
  radius2: string;
  radius3: string;
  radius4: string;
  circle: string;
};

export type ScalesAndStyles = Theme & {
  radii: ThemeRadii;
};
