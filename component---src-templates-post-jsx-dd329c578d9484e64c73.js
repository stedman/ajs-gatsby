(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{HPhe:function(e,a,t){"use strict";t("f3/d");var l=t("q1tI"),n=t.n(l),r=t("2Wn1"),s=function(e){var a=e.social;return n.a.createElement(n.a.Fragment,null,a.email&&n.a.createElement(r.a,{href:"mailto:"+a.email,title:"Email: "+a.email},n.a.createElement("span",{className:"icon is-medium"},n.a.createElement("i",{className:"fas fa-at fa-lg"}))),a.url&&n.a.createElement(r.a,{href:a.url,title:"Home: "+a.url},n.a.createElement("span",{className:"icon is-medium"},n.a.createElement("i",{className:"fas fa-home fa-lg"}))),a.twitter&&n.a.createElement(r.a,{href:"https://twitter.com/"+a.twitter,title:"Twitter: "+a.twitter},n.a.createElement("span",{className:"icon is-medium"},n.a.createElement("i",{className:"fab fa-twitter fa-lg"}))),a.github&&n.a.createElement(r.a,{href:"https://github.com/"+a.github,title:"GitHub: "+a.github},n.a.createElement("span",{className:"icon is-medium"},n.a.createElement("i",{className:"fab fa-github fa-lg"}))),a.linkedin&&n.a.createElement(r.a,{href:"https://www.linkedin.com/in/"+a.linkedin,title:"LinkedIn: "+a.linkedin},n.a.createElement("span",{className:"icon is-medium"},n.a.createElement("i",{className:"fab fa-linkedin fa-lg"}))))},i=t("tVXt");a.a=function(e){var a=e.person;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-96x96 has-background-grey-lighter"},n.a.createElement("img",{src:a.picUrl,alt:a.name}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-size-5"},a.name),n.a.createElement("p",{className:"subtitle is-6 has-text-weight-semibold is-marginless-bottom"},a.title),n.a.createElement("div",null,n.a.createElement(s,{social:a}))))),a.bio&&n.a.createElement("div",{className:"card-footer"},n.a.createElement("div",{className:"card-footer-item"},n.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:a.bio}})))))}},"TG/k":function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),r=t("Wbzz"),s=t("L12J"),i=t("vrFN"),c=t("HPhe"),m=(t("f3/d"),t("mBaQ")),o=t.n(m),u=function(e){var a=e.frontmatter,t=e.fields,l=o.a[""+a.venue.key],r=o.a[""+a.after.key];return n.a.createElement("div",{className:"message"},n.a.createElement("div",{className:"message-header"},"Meetup"),n.a.createElement("div",{className:"message-body"},n.a.createElement("div",{dateTime:t.date},"DATE ",n.a.createElement("span",{className:"icon has-text-grey-dark"},n.a.createElement("i",{className:"fas fa-calendar"}))," ",n.a.createElement("time",{className:"has-text-primary has-text-weight-bold",dateTime:t.dateShort},t.date)),n.a.createElement("div",null,"TIME ",n.a.createElement("span",{className:"icon has-text-grey-dark"},n.a.createElement("i",{className:"fas fa-clock"}))," ",n.a.createElement("time",{className:"has-text-primary has-text-weight-bold",dateTime:"15:30"},"7:30PM")," - ",n.a.createElement("time",{className:"has-text-primary has-text-weight-bold",dateTime:"21:00"},"9:00PM")),n.a.createElement("div",null,"LOCATION ",n.a.createElement("span",{className:"icon has-text-grey-dark"},n.a.createElement("i",{className:"fas fa-map-marker-alt"})),n.a.createElement("strong",{className:"has-text-primary"},l.name)," ",l.location&&n.a.createElement("em",null,"(",l.location,")"),n.a.createElement("div",{className:"has-offset-top"},"Afterwards, the discussion carries on at ",n.a.createElement("strong",null,r.url?n.a.createElement("a",{href:r.url,target:"_blank",rel:"nofollow noopener noreferrer"},r.name):r.name)," (",r.location,")."))))},d=t("2Wn1"),h=function(e){var a=e.sponsor,t=o.a[""+a.key];return n.a.createElement("div",{className:"tile"},n.a.createElement("div",{className:"tile is-child content"},n.a.createElement("h3",null,"Sponsor"),n.a.createElement("p",null,"Drinks and pizza for this event will be provided by the wonderful folks at ",n.a.createElement(d.a,{href:t.url},t.name),"."),a.hiring&&t.careerUrl&&n.a.createElement("p",null,t.name," is hiring. Check out their ",n.a.createElement(d.a,{href:t.careerUrl},"Career page")," for more information.")))};function p(e){var a=e.data,t=a.markdownRemark,l=a.allMarkdownRemark,m=t.fields,o=t.frontmatter,d=t.html,p=l.edges;if("meetup"===m.postTypes[0]){var E=o.speakers.map((function(e){return n.a.createElement("div",{className:"has-offset-top"},n.a.createElement(c.a,{person:e}))})),f=p.filter((function(e){return e.node.fields.slug===m.slug})).reduce((function(e,a){return{previous:a.previous?{slug:a.previous.fields.slug,title:a.previous.frontmatter.title}:null,next:a.next?{slug:a.next.fields.slug,title:a.next.frontmatter.title}:null}}),{});return n.a.createElement(s.a,null,n.a.createElement(i.a,{title:"Meetup: "+o.title+" ("+m.dateShort+")"}),n.a.createElement("div",{className:"columns is-desktop is-variable is-8-desktop"},n.a.createElement("div",{className:"column is-two-thirds"},n.a.createElement("h1",{className:"title"},o.title),n.a.createElement("div",{className:"content is-medium",dangerouslySetInnerHTML:{__html:d}}),n.a.createElement(u,{frontmatter:o,fields:m})),n.a.createElement("div",{className:"column has-offset-top"},n.a.createElement("h2",{className:"title is-sr-only"},"Speaker"),E)),n.a.createElement("div",{className:"section"},n.a.createElement(h,{sponsor:o.sponsor})),n.a.createElement("div",{className:"columns is-variable is-8 has-offset-top"},n.a.createElement("div",{className:"column"},f.previous&&n.a.createElement(r.Link,{to:f.previous.slug},"← ",f.previous.title)),n.a.createElement("div",{className:"column has-text-right"},f.next&&n.a.createElement(r.Link,{to:f.next.slug},f.next.title," →"))))}return n.a.createElement(s.a,null,n.a.createElement(FontAwesomeScript,null),n.a.createElement(i.a,{title:o.title}),n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column is-two-thirds"},n.a.createElement("h1",{className:"title"},o.title),n.a.createElement("div",{className:"content is-large",dangerouslySetInnerHTML:{__html:d}}))))}t.d(a,"default",(function(){return p})),t.d(a,"pageQuery",(function(){return E}));var E="3599370638"},mBaQ:function(e,a){e.exports={cloudflare:{name:"Cloudflare Austin",url:"https://www.cloudflare.com/",careerUrl:"https://www.cloudflare.com/careers/",location:"106 E 6th St, Austin, TX 78701, 4th Floor",note:null},frog:{name:"Frog Design",url:"https://www.frogdesign.com/studio/austin",careerUrl:"https://www.frogdesign.com/careers",location:"101 West 6th Street, Austin, TX 78701, 2nd Floor",note:null},gingerman:{name:"The Gingerman Austin",url:"http://thegingerman.com/austin/",careerUrl:null,location:"301 Lavaca Street, Austin, TX 78701",note:null},heb:{name:"H-E-B Digital",url:"https://digital.heb.com/",careerUrl:"https://digital.heb.com/join-us/",location:"2416 East Sixth Street, Austin, TX 78702",note:null},indeed:{name:"Indeed",url:"https://www.indeed.com",careerUrl:"https://www.indeed.jobs/",location:"201 West 5th St, Austin, TX 78701, 18th Floor",note:null},khoros:{name:"Khoros",url:"https://khoros.com/",careerUrl:"https://khoros.com/about/careers",location:"200 West Cesar Chavez Street, Austin, TX 78701, 3rd Floor",note:"in the Silicon Labs building on Colorado Street"},lavaca:{name:"Lavaca Street Bar",url:"https://lavacastreet.com/",careerUrl:null,location:"405 Lavaca Street, Austin, TX 78701",note:null},magento:{name:"Magento",url:"https://www.magento.com/",careerUrl:"https://adobe.wd5.myworkdayjobs.com/external_experienced",location:null,note:null},paypal:{name:"PayPal",url:"https://www.paypal.com/",careerUrl:"https://www.paypal.com/us/webapps/mpp/jobs",location:"7700 W. Parmer Lane, Austin, TX 78729",note:null},spredfast:{name:"Spredfast",url:null,careerUrl:null,location:"200 West Cesar Chavez Street, Austin, TX 78701, 3rd Floor",note:"in the Silicon Labs building on Colorado Street"},techspace:{name:"TechSpace Austin",url:"https://www.techspace.com/coworking-space-austin/central-business-district/",careerUrl:null,location:"98 San Jacinto Boulevard, Austin, TX 78701",note:null}}}}]);
//# sourceMappingURL=component---src-templates-post-jsx-dd329c578d9484e64c73.js.map