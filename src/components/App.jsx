import { Component } from 'react';
// import classNames from 'classnames';
import '../index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Modal } from './Modal/Modal';

import { service } from 'ServiceApi/service';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { toast } from 'react-toastify';
import { Button } from './Button/Button';
// import { ImageGalleryItemSkeleton } from './ImageGalleryItem/ImageGalleryItemSkeleton';

const STATUS = {
  Idle: 'idle',
  Loading: 'loading',
  Error: 'error',
  Success: 'success',
};
export class App extends Component {
  state = {
    images: [],
    page: 1,
    totalHits: null,
    status: STATUS.Idle,
    isLoadMore: false,
    modalImageUrl: '',
    query: '',
  };

  //   componentDidMount() {
  //     this.fetchImages();
  //   }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    console.log('this.statequery', this.state.query);
    //  this.setState({ status: STATUS.Loading });
    service(this.state.page, this.state.query)
      .then(({ data }) => {
        this.setState({ status: STATUS.Success });
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        }));
      })
      .catch(() => {
        this.setState({ status: STATUS.Error });
        toast.error('Something is wrong!');
      });
    // .finally(() => this.setState({ loading: false }));
  };
  handleChangeModalUrl = Url => {
    this.setState({ modalImageUrl: Url });
  };
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  onCloseModal = () => {
    this.setState({ modalImageUrl: '' });
  };
  handleSubmit = search => {
    if (search === this.state.query) {
      return;
    }
    //  console.log(query);
    this.setState({ images: [] });
    this.setState({ query: search });
  };

  //   handleToggle = () => {
  //     this.setState(prevState => {
  //       return { isModalOpen: !prevState.isModalOpen };
  //     });
  //   };

  render() {
    const { isModalOpen, query } = this.state;
    const { images, status, isLoadMore } = this.state;
    //  if (status === STATUS.Error) {
    //    return <></>;
    //  }
    //  if (status === STATUS.Loading || status === STATUS.Idle) {
    //    return (
    //      <ul className="gallery">
    //        {[...Array(4)].map((_, index) => (
    //          <ImageGalleryItemSkeleton key={index} />
    //        ))}
    //      </ul>
    //    );
    //  }
    //  if (!images?.length) {
    //    return <p>No data</p>;
    //  }

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          query={this.state.query}
          images={images}
          handleChangeModalUrl={this.handleChangeModalUrl}
        />
        {/* {images.total_pages > images.page && ( */}
        <Button
          className="loadMoreBtn"
          type="button"
          textContent="Load more"
          handlerClick={this.handleLoadMore}
          // className={classNames('btn', isLoadMore ? 'disabled' : '')}
        >
          {isLoadMore && <span className="spinner-grow spinner-grow-sm mr-2" />}
          Load more
        </Button>
        {/* )} */}
        {this.state.modalImageUrl && (
          <Modal onClose={this.onCloseModal}>
            <img src={this.state.modalImageUrl} alt="" />
          </Modal>
        )}
        {/* <div className="">
            {isModalOpen && <Modal onClose={this.handleToggle} />}
          </div> */}
        <ToastContainer />
      </>
    );
  }
}
