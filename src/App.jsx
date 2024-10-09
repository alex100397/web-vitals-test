// App.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('https://lens-m4m-scribe.hifx.in/dummy_ttfb')
    .then((res) => res.json())
    .then((data) => setMsg(data.msg))
    .catch((error) => console.log(error, 'error'))
  }, [])

  return (
      <div>
        <h1>Web Vitals Testing</h1>
        {msg ? <h2>{msg}</h2> : 'Loading api ....' }
        <button
          onClick={() => {
            console.log('Button clicked, triggering interaction.');
            setTimeout(() => {
              console.log('Time delayed');
            }, 10000);
          }}
        >
          Click me to trigger INP
        </button>
        <Link to='/inp' target="_blank">INP</Link> 
        <div style={{ height: '2000px', backgroundColor: '#fafafa' }}>
          Scroll down for layout shift
        </div>
        <div style={{ height: '100px', backgroundColor: '#ff0000', marginTop: '50px' }}>
          This element might cause a CLS issue.
        </div>
        <img src="https://via.placeholder.com/400x200" alt="large" style={{ marginTop: '50px' }} />
      </div>
  );
};

export default App;
