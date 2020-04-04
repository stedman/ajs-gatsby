import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import People from '../components/people';

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="columns is-variable is-8-desktop">
      <div className="column is-two-thirds">
        <div className="content is-medium">
          <h1>What is this?</h1>

          <p>Austin JavaScript is a community that meets to discuss JavaScript and the open web. The group started back in 2009, and it’s been going strong ever since. We cover a range of topics, including:</p>

          <ul>
            <li>The JavaScript language</li>
            <li>New features of the web platform</li>
            <li>JavaScript app frameworks</li>
            <li>Frontend ops</li>
            <li>Testing your code</li>
            <li>Running JavaScript in native apps</li>
            <li>Running JavaScript on the server</li>
            <li>Running JavaScript on other peoples sites</li>
            <li>Cryptography</li>
            <li>How CSS colors got their names</li>
          </ul>

          <p>If you’d like to get more details on the topics, take a look at the <a href="/post/">post archives</a>.</p>

          <h2>How does it usually work?</h2>

          <p>We typically meet on the 3<sup>rd</sup> Tuesday of each month downtown. We’ll have a speaker or two, open things up for questions and discussion, and then head to a nearby watering hole to continue the festivities.</p>

          <h2>Anything else I should know?</h2>

          <p>Yes! We’ve work hard to build a community of people that treats each other with <em>excellence</em>. We’ve formalized what this means into our <a href="/code-of-conduct/">Code of Conduct</a>.</p>
        </div>
      </div>

      <div className="column">
        <div className="has-offset-top-3">
          <div className="content">
            <h2>People</h2>
            <p>Austin JavaScript is made possible by the hard work and goodwill of many people, but there are a few in particular that you should feel free to reach out to if you’ve got any questions:</p>
          </div>
          <People />
        </div>
      </div>
    </div>

  </Layout>
);

export default About;
