import React, { Component } from 'react';

interface Beer {
  name: string;
  description: string;
  image_url: string;
}

interface AppState {
  searchTerm: string;
  beers: Beer[];
}

class App extends Component<NonNullable<unknown>, AppState> {
  constructor(props: NonNullable<unknown>) {
    super(props);
    this.state = {
      searchTerm: localStorage.getItem('searchTerm') ?? '',
      beers: localStorage.getItem('beers') ? JSON.parse(localStorage.getItem('beers')!) : []
    };
  }

  componentDidMount() {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      this.setState({ searchTerm: savedSearchTerm });
      return
    }
    this.fetchBeers();
  }

  fetchBeers = async () => {
    let url = 'https://api.punkapi.com/v2/beers?page=1';
    if (this.state.searchTerm) {
      url += `&beer_name=${this.state.searchTerm.trim()}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ beers: data });
    localStorage.setItem('searchTerm', this.state.searchTerm);
    localStorage.setItem('beers', JSON.stringify(data))
  };

  handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const newSearchTerm = formData.get('search') as string;
    this.setState({ searchTerm: newSearchTerm.trim() }, () => {
      this.fetchBeers();
    });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('searchTerm', event.target.value)
  }

  render() {
    return (
      <>
        <div className='search'>
          <form className='search__form' onSubmit={this.handleSearch}>
            <input
              type="text"
              name="search"
              defaultValue={this.state.searchTerm}
              onChange={this.handleChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className='products'>
          {this.state.beers.map((beer) => (
            <div className='products__item' key={beer.name}>
              <h3>{beer.name}</h3>
              <img className='products__img' src={beer.image_url} alt={beer.name} />
              <p className='products__desc'>{beer.description}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
