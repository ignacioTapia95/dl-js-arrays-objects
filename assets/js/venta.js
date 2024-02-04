const propiedades_venta= [
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pet: false
    },
    {
        nombre: "Apartamento acogedor en la montaña",
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        ubicacion: "789 Mountain Road,Summit Peaks, CA 23456",
        habitaciones: 2,
        baños: 1,
        costo: 1200,
        smoke: true,
        pet: true
    },
    {
        nombre: "Penthouse de lujo con terraza panorámica",
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
        habitaciones: 3,
        baños: 3,
        costo: 4500,
        smoke: false,
        pet: true
    },
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pet: false
    }
]

function cardGenerator(property) {
    const card = `
    <div class="col-md-4 mb-4">
    <div class="card">
      <img
        src="${property.src}"
        class="card-img-top"
        alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">
            ${property.nombre}
        </h5>
        <p class="card-text">
            ${property.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${property.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${property.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${property.baños} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${property.costo}</p>
        
        ${property.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
        
        ${property.pet ? '<p class="text-success"><i class="fa-solid fa-dog"></i> Se permiten mascotas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'}

      </div>
    </div>
    </div>

    `
    return card
}

for (property of propiedades_venta) {
    document.getElementById("propiedades_venta").innerHTML += cardGenerator(property);
}