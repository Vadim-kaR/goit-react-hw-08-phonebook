import { InputTitle, Inpute } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterByContactName } from 'redux/contacts/contactsSlice';
import { getFilterName } from 'redux/contacts/contactsSelectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterName);

  const setFilterName = e => {
    dispatch(filterByContactName(e.currentTarget.value));
  };

  return (
    <label>
      <InputTitle>Filter</InputTitle>
      <Inpute type="text" value={filter} onChange={setFilterName} />
    </label>
  );
};

export { Filter };
