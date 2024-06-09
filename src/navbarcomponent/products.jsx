import React, { useState } from "react";
import Modal from "react-modal";

function Products() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);

  function openModal(product) {
    setSelectedProduct(product);
    setModalIsOpen(true);
    setQuantity(1);
    setShowConfirmation(false);
  }

  function closeModal() {
    setModalIsOpen(false);
    setSelectedProduct(null);
    setQuantity(1);
    setShowConfirmation(false);
  }
  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleSubmit() {
    // Perform any necessary actions with the selected product and quantity
    setShowConfirmation(true);
  }

  const products = [
    {
      id: 1,
      name: "Full Pallet (31 Solar Panels) - 16.9kW Pallet",
      description:
        "MBB cell technology ensures improved anti-microcracking performance with balanced interior stress and a grid pattern current path, reducing costs.",
      photo:
        "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/640w/products/3700/3950/bec65ff4-a7c2-45f2-b109-e3826e54ae7b__11070.1697474934.jpg?c=1",
      alt: "Solar Panels",
      price: 500,
    },
    {
      id: 2,
      name: "Portable Solar Battery Generator",
      description:
        "Designed for adventurers who demand reliable power solutions, the Anker SOLIX F2600 is a robust yet portable powerhouse. With its exceptional capacity of 2560Wh, versatile charging options, and durable construction, it is the perfect companion for off-grid adventures, emergency preparedness, and outdoor events.",
      photo:
        "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/640w/products/5139/5652/Anker_F2600_Kit_Signature_Solar_4__20892.1711137520.png?c=1",
      alt: "Portable Solar Generator",
      price: 1000,
    },
    {
      id: 3,
      name: "WallMount Indoor Batteries",
      description:
        "The WallMount Indoor 280Ah batteries are ideal for low-voltage residential indoor energy storage applications. The batteries use lithium iron phosphate cells with the highest safety performance and an intelligent Battery Management System (BMS) that can monitor and record the voltage of each cell along with the current, voltage, and temperature of the module in real-time. The BMS also contains a passive balance function and an advanced battery control method, both of which improve the performance of the battery pack.",
      photo:
        "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/640w/products/5513/6153/Indoor_Battery_Kit___16211.1715287148.png?c=1",
      alt: "Solar Powered Batteries",
      price: 2000,
    },
    {
      id: 4,
      name: "Dual-Zone Powered Cooler",
      description:
        "Meet the Anker EverFrost, the portable cooler designed to elevate your outdoor experience. With its 299Wh battery, it keeps your food and drinks chilled for up to 42 hours, ensuring freshness throughout your journey. And when paired with the Anker SOLIX 100W Foldable Solar Panel, you have a reliable power solution wherever you roam.",
      photo:
        "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/640w/products/5145/5665/Anker_Cooler_50_Bundle__96759.1711393278.png?c=1",
      alt: "Cooler with Solar Panel",
      price: 2500,
    },
    {
      id: 5,
      name: "Solar Air Conditioner",
      description:
        "The EG4 Solar AC is one of the most innovative ductless heat pump/air conditioners available; reduce your electric bill and keep your home the temperature you want with this energy-efficient appliance. Featuring the ability to plug directly into solar panels, this system accepts DC power from their PV array without the need for an intermediary device during the day or can draw AC power from the grid at night or during overcast days. Users of the EG4 Solar Mini-Split AC can save money when compared to conventional central air conditioning systems. Pair this unit with a small string of solar panels to immediately begin heating and cooling your property.",
      photo:
        "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/640w/products/5438/6050/EG4_MINI_SPLIT_KIT_2__31684.1713970230.png?c=1",
      alt: "Air Conditioner with Solar Panel",
      price: 800,
    },
    {
      id: 6,
      name: "Mobile Solar Kit",
      description:
        "Embark on a journey of off-the-grid living with this kit designed for your RV adventures, guaranteeing energy independence through cutting-edge EG4 technology. Supported by Texas-based lifetime assistance, this kit provides reliable energy wherever your journeys take you. Experience the freedom of the open road with the EG4 3kW Off-Grid Inverter and Grape Solar 200W Monocrystalline Solar Panels, effortlessly fueling your RV for exceptional on-road performance.This kit is designed for: Medium size RVs, fifth wheels.",
      photo:
        "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/1280x1280/products/4093/4417/Mobile_Kit_-_E000_1__86558.1700688219.png?c=1",
      alt: "Mobile Solar Kit",
      price: 3000,
    },
  ];

  return (
    <div className="card-layout">
      {products.map((product) => (
        <div key={product.id} className="card">
          <h4>{product.name}</h4>
          <img src={product.photo} alt={product.alt} width={200} />
          <button
            onClick={() => openModal(product)}
            style={{
              display: "block",
              margin: "0 auto",
              padding: "4px",
            }}
          >
            Learn More
          </button>
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Product Details"
      >
        <div className="modal-content">
          <img src={selectedProduct?.photo} alt={selectedProduct?.name} />
          <div>
            <h2>{selectedProduct?.name}</h2>
            <p>{selectedProduct?.description}</p>
            <p>Price: ${selectedProduct?.price}</p>
            <div className="quantity-input">
              <button onClick={decreaseQuantity}>-</button>
              <input type="number" value={quantity} readOnly />
              <button onClick={increaseQuantity}>+</button>
            </div>
            <p>
              Total Price: $
              {selectedProduct
                ? (selectedProduct.price * quantity).toFixed(2)
                : 0}
            </p>
            {showConfirmation && <p>Order submitted successfully!</p>}
            <button onClick={handleSubmit}>Submit/Review Order</button>
          </div>
        </div>
        <br />
        <button
          onClick={closeModal}
          style={{
            display: "block",
            margin: "0 auto",
            padding: "2px",
            minWidth: "100px",
          }}
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default Products;
