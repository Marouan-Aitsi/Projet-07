import './Tags.css';

function Tags(tagProps) {
      return (
            <div className='tags'>
                  {
                        tagProps.tags && tagProps.tags.map((tag, index) => {
                              return <div className='tag' key={'tag' + index}><span>{tag}</span></div>
                        })
                  }
            </div>
      );
};

export default Tags;
