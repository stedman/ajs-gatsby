import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import People from '../components/people';

const Contributing = () => (
  <Layout>
    <SEO title="Contributing" />
    <div className="columns is-variable is-8-desktop">
      <div className="column is-two-thirds">
        <div className="content">
          <h1>Contributing</h1>
          <p>There are plenty of ways to get involved in your Austin JavaScript community.</p>
        </div>

        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <h2 className="title is-size-4 has-text-primary">Presenter</h2>
              <div className="content">
                <p>Drop some knowledge on your peeps or brush up on your speaking skills. Presentations typically run 30-50 minutes, with a Q and A session at the end.</p>
                <p>Can you do that? Sure you can! Let us know if you need help.</p>
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
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <h2 className="title is-size-4 has-text-tetradic1">Host</h2>
              <div className="content">
                <p>Show off your amazing workspace at the next event! Here's what makes a great event space:</p>
                <ul>
                  <li>Downtown Austin location</li>
                  <li>Video projection capabilities</li>
                  <li>Seating for 30-40 people</li>
                  <li>Place for food and drinks</li>
                  <li>Nearby parking</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <h2 className="title is-size-4 has-text-tetradic3">Crew</h2>
              <div className="content">
                <p>Join the peeps keeping this ship afloat! Here are a few things we usually need help on:</p>
                <ul>
                  <li>Maintaining the <a href="https://github.com/austinjavascript/austinjavascript.github.io" target="_blank" rel="nofollow noopener noreferrer">website</a></li>
                  <li>Recruiting speakers</li>
                  <li>Welcoming folks at the venue entrance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="column has-offset-top-3">
        <div className="content">
          <h2 className="is-sr-only">Organizers</h2>
          <p>If you are interested in contributing, please contact one of our friendly Organizers:</p>
        </div>

        <People include="organizers" />
      </div>
    </div>
  </Layout>
);

export default Contributing;
