type UserModel = {
  name: string;
  isVerified: boolean;
  accountId: number;
};

type NameTagProps = {
  user: UserModel;
  salutation: string;
};

const NameTag = ({ user, salutation }: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>{salutation}</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{user.name}</p>
      </section>
      <footer />
    </main>
  );
};

type WithUserProp = { user: UserModel };

function withUser<T extends WithUserProp>(Component: React.ComponentType<T>) {
  const currentUser: UserModel = {
    name: 'Binah',
    isVerified: true,
    accountId: 88
  };

  return (props: Omit<T, keyof WithUserProp>) => {
    return <Component {...(props as T)} user={currentUser} />;
  };
}

const NameTagWithUser = withUser(NameTag);

const Application = () => <NameTagWithUser salutation="hi niggers" />;

export default Application;
