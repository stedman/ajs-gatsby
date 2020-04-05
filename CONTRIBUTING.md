# Contributing

## Adding a new meetup post

### Setup local environment

1. Make sure you have all the things needed for modern [Node](https://node.js) development.
2. Fork the [Austin JavaScript GitHub](https://github.com/austinjavascript/austinjavascript.github.io/) repo to your org.
3. Clone your repo to your local box, replacing `{my-username}` with your username.

     ```sh
     git clone https://github.com/{my-username}/austinjavascript.github.io.git
     cd austinjavascript.github.io
     ```

4. Install the npm packages.

     ```sh
     npm Install
     ```

5. Start [Gatsby](https://gatsbyjs.org) up to view the site locally even as changes are made.

     ```sh
     npm run develop
     ```

### Create new file

To create a new meetup or blog post, duplicate the `/src/posts/2020-04-01-meetup-draft.md` file in the same directory. Change the date part of the file name to the desired meeting date.

> IMPORTANT: For files in the `/src/posts/` directory, the file name defines the post *date*, *type*, and *subtype*. A source file with format `{date}-{type}-{subtype}.md` (*date*: `YYYY-MM-DD`) will generate a slug of format `/post/{type}/{subtype}/{date}/` (*date*: `YYYY/MM/DD`).
>
> For meetups:
>
> * Set the post *date* to the event date
> * Set the post *type* to "meetup".
> * Remove the ["draft"] *subtype* to allow the post to be visible on live site (file format `YYYY-MM-DD-meetup.md`)

### Add meetup details and content

Open the [Markdown](https://commonmark.org/) file and notice the file structure. It loosely follows conventions used in Jekyll and other Markdown-based static-site generators.

```yaml
---
{YAML frontmatter}
---

{Markdown content}
```

* The *{YAML frontmatter}* contains all the variables that will be used by a magical template (`/src/templates/post.jsx`) to generate posts. It has the format:

    ```yaml
    ---
    title: {presentation title}
    speakers:
      - name: {full name - REQUIRED}
        title: {professional title}
        picUrl: {twitter image URL}
        bio: {short bio blurb}
        url: {homepage url}
        twitter: {profile name}
        github: {profile name}
        linkedin: {profile name}
        email: {email address}
    sponsor:
      key: {key to sponsor data found in `/src/content/organizations.yaml` - REQUIRED}
      hiring: {is the sponsor actively recruiting? (true/false)}
    venue:
      key: {key to host venue data found in `/src/content/organizations.yaml` - REQUIRED}
    after:
      key: {key to "after party" data found in `/src/content/organizations.yaml`}
    ---
    ```

    > Note: `speakers` is a YAML array, so each `name` should be preceded by a dash. For example:
    >
    > ```yaml
    > speakers:
    >   - name: Pat Anser
    >     title: Developer Extraordinaire at Austin JavaScript
    >     ...
    >   - name: Dale Andhill
    >     title: Another Developer
    >     ...
    > ```

    The `sponsor`, `venue`, and `after` key values can be found in or added to `/src/content/organizations.yaml`. The format for that YAML file is:

    ```yaml
    {key - REQUIRED}:
      name: {full name of organization - REQUIRED}
      url: {URL to org homepage}
      careerUrl: {URL to org career page}
      location: {full street address + floor and/or room}
      note: {additional notes}
    ```

* The *{Markdown content}* follows the [CommonMark spec](https://commonmark.org/help/) for creating formatted HTML from plain text. Some tips for content:

  * Provide context for presentation. What was the problem, solution, drama?
  * Hyperlink all the things! ...and use Markdown syntax (e.g., `[Gatsby](https://gatsbyjs.org)`). This gets transformed by the compiler into proper external links.

## Publishing your meetup post

```sh
npm run deploy
```
