import React from 'react';

import s from './style.module.scss';

interface ISearchBer {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<ISearchBer> = ({ value, onChange }) => {
  return (
    <div className={s.root}>
      <input className={s.searchBat} type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBar;
