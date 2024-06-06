import React from "react";

const businessOwners = [
  { name: "Maria Rodriguez", email: "maria@example.com" },
  { name: "Yan Zhang", email: "yan@example.com" },
];
function Contact() {
  return (
    <div className="contact-header">
      <h1>Contact Info</h1>
      <h2>Business Owners</h2>
      <ul className="ullist">
        {businessOwners.map((owner, index) => (
          <li key={index}>
            <strong>{owner.name}</strong> - {owner.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
