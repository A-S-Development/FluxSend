FluxSend

FluxSend is an app intended to manipulate the two way data streaming capabilities of the WebRtc protocol layer. This app will simply allow two clients (either desktop + mobile) excluding headless clients to connect and share between themselves data. The data will be of the form PDF, Streaming Audio, Streaming Video, Image formats (jpg, img, bit)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

- https://webrtc.org/getting-started/overview - learn about streaming data through the web browser.
(clients will connect with the browser, the browser runs on your operating system, your operating system gives your browser access to the various media hardware as objects that the browser can control. You then send streaming data over the network to another webrtc capable client. If the client is not capable, then hardware media capabilities are not possible.)
)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
