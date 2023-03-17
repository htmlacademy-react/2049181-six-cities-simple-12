type MarkProps = {
  classType: string;
}

function Mark({classType}: MarkProps): JSX.Element {

  return (
    <div className={`${classType}__mark`}>
      <span>Premium</span>
    </div>
  );
}

export default Mark;
