## FLUXSEND

FluxSend is an app intended to manipulate the two way data streaming capabilities of the WebRtc protocol layer. This app will simply allow two clients (either desktop + mobile) excluding headless clients to connect and share between themselves data. The data will be of the form PDF, Streaming Audio, Streaming Video, Image formats (jpg, img, bit)

## Getting Started

First, run:

```bash
    npm install
```

Second, In a seperate terminal tab run the docker DB:

```bash
    docker compose up
```

Third, Install Certificate Authority In Your Browser/OS

1. On Mac
   - Double click the rootCA.crt file and provide admin crdentials if required
   - Follow the Link if above does not work
   - https://support.apple.com/en-in/guide/keychain-access/kyca2431/mac
2. On Windows
   - Double-click the .crt file to open it in the Windows certificate manager.
   - When you open the certificate, click on the Install Certificate button.
   - Choose Local Machine (to install the certificate for all users) or Current User (only for your user account) and click Next.
   - Select Place all certificates in the following store and choose Trusted Root Certification Authorities.
   - Click Next and then Finish to complete the process.
   - Confirm the Installation
   - A dialog box will pop up confirming that the import was successful. Click OK.
   - Restart Chrome
   - Once restarted, Chrome will now trust the SSL certificate, and you should not receive any security warnings for your locally signed certificates.

Fourth, Run the scripts to create the SSL Certificate

1. set the script as an executable with the comand below

```bash
chmod +x ssl.sh
```

2. Run the following to create a SSL certificate

```bash
    ./ssl.sh localhost
```

Fifth, run the development server:

```bash
    npm run dev-server
```

<!-- Sixth, In a third tab run the custom server to connect with backend services:

```bash
    npm run dev-server
``` -->

Open [https://localhost:3001/](https://localhost:3001/) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Tools

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- https://webrtc.org/getting-started/overview - learn about streaming data through the web browser.

(clients will connect with the browser, the browser runs on your operating system, your operating system gives your browser access to the various media hardware as objects that the browser can control. You then send streaming data over the network to another webrtc capable client. If the client is not capable, then hardware media capabilities are not possible.)
)

- [Postgres DB + Docker](https://hub.docker.com/_/postgres)

This project uses docker to host a shared db. A docker container runs locally through docker hub and the container makes available PG, such that no developer local computer secondary storage is in use.

to connect via docker container: `psql -U user`

```bash
Docker Terminology

Container - cloudOS environment

Image - terminal instructions to run software in the Container OS environment

Volume - cloud based storage of data

```

NEXT JS - Custom Server
Next JS uses Node under the hood, but is lightweight node, a custom server
on Next JS can be implemented to grant access to backed server actions such as capturing user information via postgres, enabling websockets on the backend to
facilitate data transfer on the frontend. (Not entirely sure about that last use case, however I digress.)

- [OpenSSL Documentation](https://devopscube.com/create-self-signed-certificates-openssl/) - learn about setting up Self Signed Certificates with OpenSSL

## Because we are using Custom server, Vercel can't host this part

https://www.youtube.com/watch?v=HIb4Ucs_foQ

## Deploy Next JS on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
