import Card from "../components/card";

function Accessories() {
  const people = [
    {
      name: "Juan",
      image: "https://e7.pngegg.com/pngimages/518/64/png-clipart-person-icon-computer-icons-user-profile-symbol-person-miscellaneous-monochrome-thumbnail.png"
    },
    {
      name: "Maria",
      image: "https://e7.pngegg.com/pngimages/518/64/png-clipart-person-icon-computer-icons-user-profile-symbol-person-miscellaneous-monochrome-thumbnail.png"
    },
    {
      name: "Pedro",
      image: "https://e7.pngegg.com/pngimages/518/64/png-clipart-person-icon-computer-icons-user-profile-symbol-person-miscellaneous-monochrome-thumbnail.png"
    }
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Props React</h2>

      <div className="products-container">
        {people.map((person, index) => (
          <Card
            key={index}
            name={person.name}
            image={person.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Accessories;