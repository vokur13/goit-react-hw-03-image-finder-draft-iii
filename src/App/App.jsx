import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'css/styles.css';
// import { Box } from 'components/Box';
// import { Button } from 'components/Button';
import { Searchbar } from 'components/Searchbar';
import { fetchGallery } from '../services/ImageGalleryAPI';
import { Loader } from 'components/Loader';
import { ImageGallery } from 'components/ImageGallery';

// import { Modal } from 'components/Modal';

export class App extends Component {
  state = {
    gallery: [],
    loader: false,
    error: false,
  };

  //   async componentDidMount() {
  //     const response = await fetchGallery();
  //     this.setState({ gallery: response.data.hits });
  //   }

  getGallery = async ({ query }) => {
    try {
      this.setState({ loader: true });
      const wall = await fetchGallery(query);
      this.setState(state => ({
        gallery: [...state.gallery, ...wall],
        // gallery: state.gallery.concat(wall),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    } finally {
      this.setState({ loader: false });
    }
  };

  render() {
    const { loader, gallery, error } = this.state;
    return (
      <>
        {loader && <Loader />}
        <Searchbar onSubmit={this.getGallery} />
        {error && (
          <p>Sorry, something goes wrong, reload page and try again please</p>
        )}
        {gallery.length > 0 ? <ImageGallery data={gallery} /> : null}
        {gallery.length > 0 && <button type="button">Load more</button>}
      </>
    );
  }
}

// =====================================================

// export class App extends Component {
//   state = { searchQuery: '' };

//   handleSearchbarSubmit = searchQuery => {
//     this.setState({ searchQuery });
//   };

//   render() {
//     return (
//       <>
//         <Searchbar onSubmit={this.handleSearchbarSubmit} />
//         <ImageGalleryAPI searchQuery={this.state.searchQuery} />
//         <ToastContainer position="top-center" autoClose={3000} />
//       </>
//     );
//   }
// }
