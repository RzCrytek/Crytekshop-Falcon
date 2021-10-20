import React from 'react';
import useFetchProducts from '../hooks/useFetchProducts';

import Layout from './_layout';
import Loader from '../components/Loader/Loader';

const EventsPage = () => {
  const { data: events, loader } = useFetchProducts('/events');
  console.log('events:', events);

  return (
    <Layout pageId="events">
      <div className="container">
        <div className="options">
          <h2>LISTA DE EVENTOS DE MARVEL</h2>

          <div className="events-box">
            {loader && <Loader />}
            {events.map((event) => {
              const image = `${event.thumbnail.path}.${event.thumbnail.extension}`;
              const link = event.urls[0]?.url ?? '!#';

              return (
                <a
                  className="event"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  data-title="VER EVENTO"
                  key={event.id}
                >
                  <picture>
                    <img src={image} alt={event.title} />
                  </picture>
                  <h2 className="title">{event.title}</h2>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventsPage;
