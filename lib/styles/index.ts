import { css as emotionCss, SerializedStyles } from '@emotion/react';
import type { CSSInterpolation } from '@emotion/serialize';

export type ComponentStyles = Record<string, SerializedStyles>;

export function css(...args: CSSInterpolation[]): SerializedStyles {
  return emotionCss(...args);
}
