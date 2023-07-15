type PrimaryBtnProps = {
  primary: boolean;
  secondary?: never;
  destructive?: never;
};

type SecondaryBtnProps = {
  secondary: boolean;
  primary?: never;
  destructive?: never;
};

type DestructiveBtnProps = {
  destructive: boolean;
  secondary?: never;
  primary?: never;
};

type ButtonUtilityProps =
  | PrimaryBtnProps
  | SecondaryBtnProps
  | DestructiveBtnProps;

type ButtonOwnProps<E extends React.ElementType = React.ElementType> =
  ButtonUtilityProps & {
    children: string;
    as?: E;
  };

type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps>;

const createClassNames = (classes: { [key: string]: boolean }): string => {
  let classNames = '';
  for (const [key, value] of Object.entries(classes)) {
    if (value) classNames += key + ' ';
  }
  return classNames.trim();
};

const defaultElement = 'button';

function Button<E extends React.ElementType = typeof defaultElement>({
  children,
  primary = false,
  secondary = false,
  destructive = false,
  as
}: ButtonProps<E>) {
  const classNames = createClassNames({ primary, secondary, destructive });
  const TagName = as || defaultElement;
  return <TagName className={classNames}>{children}</TagName>;
}

const Application = () => {
  return (
    <main>
      <Button primary as="a" href="/">
        Primary
      </Button>
      <Button secondary>Secondary</Button>
      <Button destructive>Destructive</Button>
    </main>
  );
};

export default Application;
