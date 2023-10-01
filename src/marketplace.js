// Datos de ejemplo para los productos (matriz de 6xn)

// Función para agregar un producto a la matriz
import React, { useRef, useState } from 'react';

const Marketplace = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemImage, setItemImage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [itemBobPrice, setItemBobPrice] = useState('');

  const itemNameRef = useRef();
  const itemDescriptionRef = useRef();
  const itemImageRef = useRef();
  const itemBobPriceRef = useRef();

  const handleItemSubmit = () => {
    const newItemName = itemNameRef.current.value;
    const newItemDescription = itemDescriptionRef.current.value;
    const newItemImage = itemImageRef.current.files[0];
    const newItemBobPrice = itemBobPriceRef.current.value;

    if (!newItemName || !newItemDescription || !newItemImage || !newItemBobPrice ) {
      setErrorMsg('Todos los campos son obligatorios');
      return;
    }

    const newItem = {
      name: newItemName,
      description: newItemDescription,
      
      image: URL.createObjectURL(newItemImage),
    };

    setItems([...items, newItem]);

    itemNameRef.current.value = '';
    itemDescriptionRef.current.value = '';
    itemImageRef.current.value = '';
    setErrorMsg('');
  };

  const marklocaltot = {
    overflowY: 'auto',
  }
  const marktitlestyles = {
    background: 'linear-gradient(to right,#000066 12%, #00ffff 100%)',
    color: 'white',
    padding: '15px',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    maxHeight: '540px',
    overflowY: 'auto',
  }
  const marketplaceStyles = {
    backgroundColor: 'black',
    color: 'white',
    padding: '15px',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',

  };

  const inputStyles = {
    color:'white',
    width: '50%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '10px',
    background: '#071b5a',
    backgroundColor:'f1f1f1',
    border: "#000000",
  };

  const buttonStyles = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  const itemBoxContainerStyles = {
    maxHeight: '300px',
    overflowY: 'auto',
  };

  const itemBoxStyles = {
    border: '1px solid black',
    padding: '20px',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const navbarStyles = {
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  };

  const navItemStyles = {
    color: 'white',
    textDecoration: 'none',
    justifyContent: 'space-between',
    padding: '50px',
    
    
  };

  return (
    <div style={marklocaltot}>
      <div style={marktitlestyles}>
        <h1>Marketplace DexyDapp</h1>
        {/* Barra de navegación */}
        <div style={navbarStyles}>
          <div>
            <a style={navItemStyles} href="#">
              Sobre Nosotros
            </a>
            <a style={navItemStyles} href="#">
              Wallet
            </a>
            <a style={navItemStyles} href="#">
              DexTrustNFT
            </a>
          </div>
          <div>
            <button style={buttonStyles}>Login</button>
            <button style={buttonStyles}>SignUp</button>
          </div>
        </div>
        <div style={marketplaceStyles}>
          <h2>Agregar un Articulo</h2>
          <input
            type="text"
            placeholder="Nombre del Articulo"
            ref={itemNameRef}
            style={inputStyles}
          />

          <textarea
            placeholder="Descripción del objeto"
            ref={itemDescriptionRef}
            style={{ ...inputStyles, color:'white', height: '100px' }}
          />
          <input
            type="file"
            ref={itemImageRef}
            style={inputStyles}
          />
           <input
            type="text"
            placeholder="Precio en BOB"
            ref={itemBobPriceRef}
            style={inputStyles}
          />
          <button onClick={handleItemSubmit} style={buttonStyles}>Subir</button>
          {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
        </div>
      </div>
      <div style={marketplaceStyles}>
        <h2>Objetos en Venta</h2>
        <div style={itemBoxContainerStyles}>
          {items.map((item, index) => (
            <div key={index} style={itemBoxStyles}>
              <h3>{item.name} {item.bobPrice} </h3>
              <img src={item.image} alt={item.name} style={{ maxWidth: '100%' }} />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Marketplace;

