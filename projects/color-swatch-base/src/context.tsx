import * as React from 'react';
import { reducer, AdjustmentAction } from './reducer';
import { RGBColorType } from './types';
import { createContext } from './create-context';

type RGBContextType = {
  dispatch: React.Dispatch<AdjustmentAction>;
  rgb: RGBColorType;
};

export const [useRGBContext, RGBProvider] =
  createContext<RGBContextType | null>();

export const RGBContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [rgb, dispatch] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0
  });

  return <RGBProvider value={{ dispatch, rgb }}>{children}</RGBProvider>;
};
