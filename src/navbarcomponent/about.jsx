import React from "react";

function About() {
  return (
    <div
      style={{
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        textAlign: "center",
      }}
    >
      <h1>About Us</h1>
      <p>
        This is a woman owned solar company. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Aspernatur iste sunt sint nemo deserunt
        animi deleniti corporis, voluptatem commodi placeat eius. A magni
        voluptates similique incidunt veritatis possimus sapiente iste. Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Magnam veritatis
        cumque, voluptatibus impedit saepe quas deleniti facere atque magni
        ducimus doloribus eveniet alias et architecto placeat enim, officiis
        animi omnis? <br />
        <br />
        Images are from this{" "}
        <a href="https://signaturesolar.com/all-products/kits-bundles/">
          solar company
        </a>{" "}
        and are being used for classwork purposes!
      </p>
    </div>
  );
}

export default About;
