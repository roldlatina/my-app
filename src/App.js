import './App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState } from 'react';

const options = [
  {
    value: 'black',
    label: 'Black'
  },
  {
    value: 'brown',
    label: 'Brown'
  }

];

function App() {
  const [selected, setSelected] = useState('Black');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleAdd = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Item added to cart!");
    }, 2000);

  };

  return (
    <div className="container">
      <div className="App">
        <div className="back-button-container">
          <img src="icon-left.png" alt="back" className="back-button" /> All Products
        </div>
        <div className="header">
          <div className="header-main">
            Audio-Technica ATH-MSR7
          </div>
          <div className="header-sub">
            2017 Best Headphones of the Year Award Winner
          </div>
        </div>
        <div className="tabs">
          <button className={`tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => setActiveTab(0)}>
            DESCRIPTION
          </button>
          <button className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>
            DETAILS
          </button>
        </div>
        <div className="content">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>
        <div className="price">
          <span className="price-new">
            $59.99
          </span>
          <span className="price-old">
            $89.99
          </span>
        </div>
        <div className="colors-container">
          <div className="colors-label">
            COLORS
          </div>
          <div>
            <Dropdown options={options} onChange={(e) => setSelected(e.value)} value={selected} className='dropdown' placeholder="" />
          </div>
        </div>
        <div className="divider">
        </div>
        <div>
          <button className="cta" onClick={handleAdd}>
            {
              loading ? "Loading" : 'ADD TO CART'
            }
          </button>
        </div>
      </div>
      <div className="image-container">
        <img src={`${selected}.jpg`} className="preview" alt='preview' />
      </div>
    </div>
  );
}

export default App;
