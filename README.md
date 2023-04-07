# dnssim - DNS Traffic Simulator
Because they want to sell my DNS history, AT&T doesn't allow me to change the DNS server in the router I have to pay them to use. So I threw together this script which sends random requests -- making DNS data worthless.

## Setup
The app has no dependencies! Just use `npm run deploy`, `npm start` or `node main.js` and it should start making requests.

### Environment Variables
#### `DNS_SERVERS`
Set this to a comma-separated list of ip addresses for DNS servers to send requests to.
#### `THREADS`
Maximum number of simultaneous requests to send. Comparable to number of active devices to simulate being on your network.

## Same problem, different ISP?
If your ISP is equally evil you can simply change the line in `main.js` starting with `dns.setServers([...` to use whatever DNS servers they're shoving down your throat.