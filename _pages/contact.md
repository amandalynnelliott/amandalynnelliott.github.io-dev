---
layout: page
title: Contact
permalink: /contact/
caption: "*handshake* Nice to meet you!"
---

<form id="contact_form" action="https://formspree.io/aelliottart@gmail.com" method="POST" enctype="multipart/form-data">
    <div class="row">
        <label for="name">Your name</label><br />
        <input id="name" class="name" name="name" type="text" value="" /><br />
    </div>
    <div class="row">
        <label for="email">Your email</label><br />
        <input id="email" class="email" name="email" type="text" value="" /><br />
    </div>
    <div class="row">
        <label for="message">Your message</label><br />
        <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
    </div>
    <input id="submit_button" type="submit" value="Send Message" />
</form>
