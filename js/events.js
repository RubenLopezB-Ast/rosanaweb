fetch('data/events.json')
  .then(response => response.json())
  .then(events => {

    const container = document.getElementById('events-container');

    events.forEach((event, index) => {

      const isLeft = index % 2 === 0;

      const borderClass = isLeft
        ? 'border-right border-primary'
        : '';

      const alignClass = isLeft
        ? 'event-left align-items-md-end'
        : 'event-right align-items-md-start';

      container.innerHTML += `

        <div class="col-md-6 ${borderClass} mb-5">

          <div class="event-content d-flex flex-column align-items-center ${alignClass}">

            <img
              class="img-event-custom mb-2"
              src="${event.imagen}"
              alt="${event.alt}"
            >

            <h4 class="mb-3">${event.titulo}</h4>

            <p class="mb-2">${event.ciudad}</p>

            <p class="mb-0">${event.hora}</p>

            <div class="event-divider"></div>

          </div>

        </div>

      `;
    });

  })
  .catch(error => console.error('Error cargando eventos:', error));