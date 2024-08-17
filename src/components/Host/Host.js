import './Host.css'

function Host(host) {

      return (
            <div className="host">
                  <p className='hostName'>{host.name}</p>
                  <img className='hostImg' src={host.img} alt="hostImg" />
            </div>
      );
};

export default Host;