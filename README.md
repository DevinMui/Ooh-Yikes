# Ooh Yikes

Inspired by a post on One Sentence Startup Pitches, Ooh Yikes is a Chrome extension that plays an audio file of me saying "Ooh yikes!" when the user opens an incognito window. However, due to time and frustration from Chrome's autoplay policy, I gave up half way through. 

So the extension mostly works but also really doesn't at the same time.

### How it works

The extension listens for an incognito window open. On this event, a function executes that will open a new tab on the incognito window to `google.com` in order to bypass the limitation of injecting HTML into the `chrome://` URLs. With this new tab opened, the background script calls a function to inject a content script into the page. The content script creates an HTML audio element which is set to autoplay and then play.

This is the part I couldn't figure out. When I put a `document.onload` callback in, the code would work sometimes but not all the time. I was lazy and I didn't figure it was worth this much effort for a joke so I decided to call this project off or until I feel like completing it.

### Usage

Clone this repository.

Turn on developer mode on Chrome.

Load unpacked and select the folder of the extension. 

You're set!

### License

Copyright (c) 2019 Devin Mui

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
