const card = document.querySelector(".container_card");
const btn = document.querySelector(".btn");
let allcards = '';

const propiedades_venta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: ' 123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    bathroom: 4,
    costo: 5.000,
    smoke: false,
    pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: ' 789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        bathroom: 1,
        costo: 1.200,
        smoke: true,
        pets: true
        },
        {
            nombre: 'Penthouse de lujo con terraza panorámica',
            src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
            descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
            ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
            habitaciones: 3,
            bathroom: 3,
            costo: 4.500,
            smoke: false,
            pets: true
            },
            {
              nombre: 'Amplio apartamento',
              src: 'https://i2-prod.dailyrecord.co.uk/incoming/article11999299.ece/ALTERNATES/s615b/Birkdale-showhome-at-Earls-Green_intJPG.jpg',
              descripcion: 'Hermosa casa rural alejada de la ciudad con 5900m2 y llego de tranquilidad',
              ubicacion: 'Purranque 3838, las condes',
              habitaciones: 3,
              bathroom: 3,
              costo: 800000,
              smoke: false,
              pets: true
              },
              {
                nombre: 'Centrico departamento en Santiago',
                src: 'https://th.bing.com/th/id/R.b91cef70079f82d64920b7d795681960?rik=OFP2FVic3xLu6Q&riu=http%3a%2f%2f4.bp.blogspot.com%2f_giLbT7n3OXM%2fSntj-9fj30I%2fAAAAAAAAA2s%2fGWSQpjng7jw%2fw1200-h630-p-k-no-nu%2fapartamento-elegante.jpg&ehk=arMR7J1reTx0IrVLZIBdaULOBjhY%2feI9c0MYdPk4rhA%3d&risl=&pid=ImgRaw&r=0',
                descripcion: 'Centrico departamento a pasos del mall y de hospitales',
                ubicacion: 'Las Camelias 10805,Santiago',
                habitaciones: 5,
                bathroom: 4,
                costo: 750.000,
                smoke: false,
                pets: false
                },
                {
                  nombre: 'Casa ubicada en condominio las terrazas',
                  src: 'https://fernandavazquez.com.ar/wp-content/uploads/2020/07/5.jpg',
                  descripcion: 'Condominio con ubicacion privilegiada en zona residencial.',
                  ubicacion: 'Av. Los Mastiles,los Angeles',
                  habitaciones: 4,
                  bathroom: 3,
                  costo: 500.000,
                  smoke: true,
                  pets: true
                  },
                  {
                    nombre: 'Edificio Altavista 3',
                    src: 'https://www.tecnocasa.com.co/wp-content/uploads/2018/08/proyectos_gestor_80efec6f81e0358f24b64d54aea4c4ee-53-848x530.jpg',
                    descripcion: 'Hermoso departamente a solo 5 minutos del centro.',
                    ubicacion: 'Av. Gregorio Marañon 2350,Viña del mar',
                    habitaciones: 1,
                    bathroom: 1,
                    costo: 450.000,
                    smoke: false,
                    pets: true
                    },
    ];

    for (let index = 0; index < 3; index++) {
      allcards += `
        <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src="${propiedades_venta[index].src}"
            class="card-img-top"
            alt="Imagen del departamento"
          />
          <div class="card-body">
            <h5 class="card-title">
              ${propiedades_venta[index].nombre}
            </h5>
            <p class="card-text">
            ${propiedades_venta[index].descripcion}
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i> ${propiedades_venta[index].ubicacion}
            </p>
            <p>
              <i class="fas fa-bed"></i> ${propiedades_venta[index].habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${propiedades_venta[index].bathroom} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedades_venta[index].costo * 1000}</p>
            <div class="container-fumar">
            ${
              propiedades_venta[index].smoke
                ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
            }
            </div>
            <div class="container-mascotas">
            ${
              propiedades_venta[index].pets
                ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
            }
            </div>
          </div>
        </div>
      </div>
          `;
    }

    btn.addEventListener("click", ()=>{
      allcards = '';
      for (const venta of propiedades_venta) {
        allcards += `
        <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src="${venta.src}"
            class="card-img-top"
            alt="Imagen del departamento"
          />
          <div class="card-body">
            <h5 class="card-title">
              ${venta.nombre}
            </h5>
            <p class="card-text">
              ${venta.descripcion}
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}
            </p>
            <p>
              <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${venta.bathroom} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${venta.costo * 1000}</p>
            <div class="container-fumar">
              ${
                venta.smoke?`<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`:`<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
              }
            </div>
            <div class="container-mascotas">
            ${
              venta.pets?`<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`:`<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`
            }
            </div>
          </div>
        </div>
      </div>
          `
      }
      card.innerHTML = allcards;
    })
card.innerHTML=allcards;
