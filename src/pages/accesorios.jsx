import Card from "../components/card";

function Accesorios() {
  const personas = [
    {
      nombre: "Juan",
      imagen: "https://e7.pngegg.com/pngimages/518/64/png-clipart-person-icon-computer-icons-user-profile-symbol-person-miscellaneous-monochrome-thumbnail.png"
    },
    {
      nombre: "Maria",
      imagen: "https://e7.pngegg.com/pngimages/518/64/png-clipart-person-icon-computer-icons-user-profile-symbol-person-miscellaneous-monochrome-thumbnail.png"
    },
    {
      nombre: "Pedro",
      imagen: "https://e7.pngegg.com/pngimages/518/64/png-clipart-person-icon-computer-icons-user-profile-symbol-person-miscellaneous-monochrome-thumbnail.png"
    }
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Props React</h2>

      <div className="products-container">
        {personas.map((persona, index) => (
          <Card
            key={index}
            nombre={persona.nombre}
            imagen={persona.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default Accesorios;