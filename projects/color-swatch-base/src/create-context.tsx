import * as React from 'react';

export function createContext<T extends {} | null>() {
  const context = React.createContext<T | null>(null);

  const useContext = () => {
    const c = React.useContext(context);
    if (!c) throw new Error('no context');
    return c;
  };

  return [useContext, context.Provider] as const;
}
