import * as React from 'react';

import { CharacterType, fetchCharacter } from './characters';

import { Loading } from './Loading';
import { CharacterInformation } from './CharacterInformation';

interface WithCharacterProp {
  character: CharacterType;
}

function withCharacter<T extends WithCharacterProp>(
  Component: React.ComponentType<T>
) {
  // return component;
  return (props: Omit<T, keyof WithCharacterProp>) => {
    const [character, setCharacter] = React.useState<CharacterType | null>(
      null
    );
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
      setLoading(true);
      fetchCharacter().then((res) => setCharacter(res));
      setLoading(false);
    }, []);

    if (loading || character === null) return <Loading />;
    return <Component {...(props as T)} character={character} />;
  };
}

const CharaterInformationWithCharacter = withCharacter(CharacterInformation);

const Application = () => {
  return (
    <main>
      <CharaterInformationWithCharacter id={3} />
    </main>
  );
};

export default Application;
