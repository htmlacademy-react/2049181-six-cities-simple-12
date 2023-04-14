import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { SortType } from '../../const';

type SortOptionsProps = {
  onSortTypeChange: (sortType: SortType) => void;
}

function SortOptions({onSortTypeChange}: SortOptionsProps): JSX.Element {

  const sortingType = useRef(null);
  const [isOpened, setOpened] = useState(false);
  const [currentSortType, setCurrentSortType] = useState(SortType.Popular);
  //TODO не очень красиво получилось с типами
  const optionsClickHandler = (evt: React.MouseEvent<HTMLElement>): void => {
    const target = evt.target as HTMLElement;
    setCurrentSortType(target.innerHTML as SortType);
    setOpened(!isOpened);
  };

  useEffect(() => {
    onSortTypeChange(currentSortType);
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpened(!isOpened)}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames({
        'places__options': true,
        'places__options--custom': true,
        'places__options--opened': isOpened
      })} onClick={optionsClickHandler} ref={sortingType}
      >
        {Object.values(SortType).map(
          (sortType) => <li className="places__option" tabIndex={0} key={sortType}>{sortType}</li>
        )}
      </ul>
    </form>
  );
}

export default SortOptions;
