import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';
import { ColorInputs } from './ColorInputs';
import { ColorSliders } from './ColorSliders';

import { toRGB } from './utilities';
import { reducer } from './reducer';
import { useRGBContext } from './context';

const Application = () => {
  // const [rgb, dispatch] = React.useReducer(reducer, {
  //   red: 0,
  //   green: 0,
  //   blue: 0
  // });

  const { rgb, dispatch } = useRGBContext();

  return (
    <main style={{ borderColor: toRGB(rgb) }}>
      <ColorSwatch {...rgb} />
      <ColorInputs {...rgb} />
      <ColorSliders {...rgb} />
    </main>
  );
};

export default Application;
