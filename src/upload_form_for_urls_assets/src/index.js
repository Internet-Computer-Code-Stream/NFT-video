import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as upload_form_for_urls_idl, canisterId as upload_form_for_urls_id } from 'dfx-generated/upload_form_for_urls';

const agent = new HttpAgent();
const upload_form_for_urls = Actor.createActor(upload_form_for_urls_idl, { agent, canisterId: upload_form_for_urls_id });

// For use only when developing with a replica running locally
agent.fetchRootKey();

document.getElementById("clickMeBtn").addEventListener("click", async () => {
    const name = document.getElementById("name").value.toString();
    await upload_form_for_urls.create(name);

    // After 3 seconds, update the data and render a new UI
    setTimeout(async function () {

        // Add a new item to the data
        app.data.urls = await upload_form_for_urls.readAll();

        // Render an updated UI
        app.render();

    }, 3000);
});

var UrlList = function (options) {
    this.elem = document.querySelector(options.selector);
    this.data = options.data;
    this.template = options.template;
};

UrlList.prototype.render = function () {
    this.elem.innerHTML = this.template(this.data);
};

var app = new UrlList({
    selector: '#app',
    data: {
        heading: 'My URLs',
        urls: []
    },
    template: function (props) {
        return `
        <h1>${props.heading}</h1>
        <ul>
            ${props.urls.map(function (url) {
            // Only works if the links is formatted for YouTube's web application.
            return `<iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/${url.split("=")[1]}" frameborder="0"></iframe>`;
        }).join('')}
        </ul>`;
    }
});

// Render the initial UI
app.render();
