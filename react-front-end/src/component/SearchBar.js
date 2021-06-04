import React from 'react';
import { useHistory } from 'react-router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './Component_Style/SearchBar.jsx';

export default function SearchBar(props) {
  const [searchInputValue, setSearchInputValue] = React.useState('');
  const history = useHistory();
  const classes = useStyles();

  return (
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(event) => {
          event.preventDefault();
          props.filteredSearch(searchInputValue);
          setTimeout(() => {
            history.push('/searchResults');
          }, 350);
          setSearchInputValue('');
        }}
      >
        <TextField
          rows={1}
          className={classes.textField}
          value={searchInputValue}
          variant="outlined"
          size="small"
          onChange={(e) => setSearchInputValue(e.target.value)}
          label="Search"
          InputLabelProps={{
            style: {
              opacity: 0.7,
              fontWeight: 600,
              color: 'lavender',
            },
          }}
          data-nav-type="focal"
          InputProps={{ className: classes.searchField }}
          placeholder="Search"
        />
        <Button
          variant="outlined"
          color="default"
          type="submit"
          value="Submit"
          className={classes.searchButton}
        >
          <span role="img" alt="aria-label">
            {' '}
            Search 🏄
          </span>
        </Button>
      </form>
    </div>
  );
}
