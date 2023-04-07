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

## Legal
### ISP
The volume of requests shouldn't be significantly higher than what would be generated from regular browsing activty and nowhere near enough to contribute to a DDoS. The purpose of the requests is only to mitigate the damage done by your willful violation of our privacy rights (as evidenced by language used on your website). Your support team says that in order to use a different DNS service one must change the DNS settings on all devices on the network (instead of the router we're required to use) but in reality many devices don't support such advanced network configuration settings (and doing so would degrade performance), so the best solution is just to generate fake requests so that the requests sent from unprotected devices are burried in bogus requests and authenticity cannot be verified. Your actions are introducing serious security risks to American consumers as DNS data can be used to, for example, find vulnerable IoT devices on a network.

### User
I do not recommend using this with a DNS server that you don't control or modifying the code to use multiple threads. If you're really paranoid about security I'd combine this with a VPN .