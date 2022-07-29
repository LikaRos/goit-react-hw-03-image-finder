import styles from './ImageGallery.module.css';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import PropTypes from 'prop-types';

const STATUS = {
  Idle: 'idle',
  Loading: 'loading',
  Error: 'error',
  Success: 'success',
};

export function ImageGallery({ images, handleChangeModalUrl }) {
  //   state = {
  //     images: [],
  //     page: 1,
  //     totalHits: null,
  //     status: STATUS.Idle,
  //     isLoadMore: false,
  //     modalImageUrl: '',
  //   };

  //   //   componentDidMount() {
  //   //     this.fetchImages();
  //   //   }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (
  //       prevState.page !== this.state.page ||
  //       prevProps.query !== this.props.query
  //     ) {
  //       setTimeout(() => {
  //         this.setState({ images: [] });
  //         this.fetchImages();
  //       }, 2000);
  //     }
  //   }

  //   fetchImages = () => {
  //     console.log('this.props.query', this.props.query);
  //     //  this.setState({ status: STATUS.Loading });
  //     service(this.state.page, this.props.query)
  //       .then(({ data }) => {
  //         this.setState({ status: STATUS.Success });
  //         this.setState(prevState => ({
  //           images: [...prevState.images, ...mapper(data.hits)],
  //         }));
  //       })

  //       .catch(() => {
  //         this.setState({ status: STATUS.Error });
  //         toast.error('Something is wrong!');
  //       });
  //     // .finally(() => this.setState({ loading: false }));
  //   };
  //   handleChangeModalUrl = Url => {
  //     this.setState({ modalImageUrl: Url });
  //   };
  //   handleLoadMore = () => {
  //     this.setState(prevState => ({ page: prevState.page + 1 }));
  //   };
  //   onCloseModal = () => {
  //     this.setState({ modalImageUrl: '' });
  //   };
  //   render() {
  //  const { images, status, isLoadMore } = this.state;
  //  if (status === STATUS.Error) {
  //    return <></>;
  //  }
  //  if (status === STATUS.Loading || status === STATUS.Idle) {
  //    return (
  //      <ul className={styles.gallery}>
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
      <ul className={styles.gallery}>
        {images.map(({ id, largeImageURL, webformatURL, tags }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            largeImageURL={largeImageURL}
            webformatURL={webformatURL}
            tags={tags}
            handleChangeModalUrl={handleChangeModalUrl}
          />
        ))}
        {/* {images.total_pages > images.page && (
          <Button
            type="button"
            textContent="Load more"
            handlerClick={this.handleLoadMore}
            //   className={classNames('btn', isLoadMore ? 'disabled' : '')}
          >
            {isLoadMore && (
              <span className="spinner-grow spinner-grow-sm mr-2" />
            )}
            Load more
          </Button>
        )}
        {this.state.modalImageUrl && (
          <Modal onClose={this.onCloseModal}>
            
            <img src={this.state.modalImageUrl} alt="" />
          </Modal>
        )} */}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  handleChangeModalUrl: PropTypes.func.isRequired,
};
