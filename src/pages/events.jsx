import React from 'react';
import useFetchProducts from '../hooks/useFetchProducts';

import Layout from './_layout';
import Loader from '../components/Loader/Loader';

const EventsPage = () => {
  const { data: events, loader } = useFetchProducts('/events');
  console.log('events:', events);

  return (
    <Layout pageId="events">
      <section id="banner">
        <h1>EVENTOS DE MARVEL</h1>
      </section>

      <div className="container">
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
                key={event.id}
              >
                <span className="go btn btn--red">IR AL EVENTO</span>
                <picture>
                  <img src={image} alt={event.title} />
                </picture>
                <h2 className="title">{event.title}</h2>
              </a>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default EventsPage;
