import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Contributing = () => (
  <Layout>
    <SEO title="Contributing" />
    <h1 className="title">Contributing</h1>
    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <div className="tile is-child box">
          <h2 className="title is-size-4 has-text-tetradic1">Host</h2>
          <div className="content">
            <p>Open your venue to the next event! Here's what makes a great event space:</p>
            <ul>
              <li>Downtown Austin location</li>
              <li>Seating for 30-40 people</li>
              <li>Projection capabilities</li>
              <li>Nearby parking</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box">
          <h2 className="title is-size-4 has-text-tetradic2">Sponsor</h2>
          <div className="content">
            <p>Keep the masses happy with pizza and drinks! The tab comes out to about $100 per event.</p>
            <p>As <strong>Sponsor</strong>, you get to promote your organization's job openings.</p>
          </div>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box">
          <h2 className="title is-size-4 has-text-tetradic3">Speaker</h2>
          <div className="content">
            <p>Drop some knowledge on your peeps! Our presentations typically run 45-60 minutes, with a Q and A session at the end.</p>
          </div>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child box">
          <h2 className="title is-size-4 has-text-primary">Organizer</h2>
          <div className="content">
            <p>Join the peeps keeping this ship afloat! Contact one of the Organizers (below) for more details.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="section">
      <h2 className="title is-size-4">Current Organizer Crew</h2>
      <ul>
        <li>loop of names here</li>
        <li>loop of names here</li>
      </ul>
    </div>
  </Layout>
);

export default Contributing;
