import styled, { css } from 'styled-components';
import { getCSSUnit } from '../utils/getCSSUnit';
type PanelKind = 'regular' | 'secondary';

export interface PanelProps {
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  padding?: React.CSSProperties['padding'];
  kind?: PanelKind;
  withSections?: boolean;
}

export const Panel = styled.div<PanelProps>`
  position: relative;
  width: ${({ width }) => (width ? getCSSUnit(width) : undefined)};
  height: ${({ height }) => (height ? getCSSUnit(height) : undefined)};
  background-color: ;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px;
  gap: 12px;
  border-radius: 30px;
  cursor: pointer;
  color: white;
  overflow: hidden;

  ${({ withSections, kind }) => {
    const contentBackground = kind === 'secondary' ? 'linear-gradient(45deg,#476892,#59355D)' : 'linear-gradient(45deg,#3D3949,#6772A4)';
    const border = kind === 'secondary' ? '2px solid #e81cff' : '';

    return css`
      .btn {
  --border-color: linear-gradient(-45deg, #ffae00, #7e03aa, #00fffb);
  --border-width: .125em;
  --curve-size: .5em;
  --blur: 30px;
  --bg: #080312;
  --color: #afffff;
  color: var(--color);
    /* use position: relative; so that BG is only for .btn */
  position: relative;
  isolation: isolate;
  display: inline-grid;
  place-content: center;
  padding: .5em 1.5em;
  font-size: 17px;
  border: 0;
  text-transform: uppercase;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, .6);
  clip-path: polygon(
            /* Top-left */
            0% var(--curve-size),

            var(--curve-size) 0,
            /* top-right */
            100% 0,
            100% calc(100% - var(--curve-size)),

            /* bottom-right 1 */
            calc(100% - var(--curve-size)) 100%,
            /* bottom-right 2 */
            0 100%);
  transition: color 250ms;
}

.btn::after,
.btn::before {
  content: '';
  position: absolute;
  inset: 0;
}

.btn::before {
  background: var(--border-color);
  background-size: 300% 300%;
  animation: move-bg7234 5s ease infinite;
  z-index: -2;
}

@keyframes move-bg7234 {
  0% {
    background-position: 31% 0%
  }

  50% {
    background-position: 70% 100%
  }

  100% {
    background-position: 31% 0%
  }
}
    `;
  }}
`;
