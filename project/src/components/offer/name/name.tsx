type NameProps = {
  title: string;
}

function Name({title}: NameProps): JSX.Element {

  return (
    <div className="property__name-wrapper">
      <h1 className="property__name">
        {title}
      </h1>
    </div>
  );
}

export default Name;
