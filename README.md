# dnsspam
Because they want to sell your DNS history, AT&T doesn't allow me to change the DNS server in the router I have to pay them to use. So I changed the dns servers on all my machines and threw together this script which sends random requests -- making raw DNS data worthless.

## Setup
The app has no dependencies! Just use `npm run deploy`, `npm start` or `node main.js` and it should start making requests.

## Same problem, different ISP?
If your ISP is equally evil you can simply change the line in `main.js` starting with `dns.setServers([...` to use whatever DNS servers they're shoving down your throat.
