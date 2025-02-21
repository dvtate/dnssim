const os = require('os');
const dns = require('dns');

const genDomain = require('./site_generator');
const knownSites = require('./known_sites');

dns.setServers(
    process.env.DNS_SERVERS
    ? process.env.DNS_SERVERS.split(',')
    : [ '68.94.156.10', '68.94.157.10' ] // AT&T DNS servers
);

let requestsSent = 0;

const spacepad = '                                                            ';
function randLookup() {
    const domain = genDomain({ minLength: 3, maxLength: 20 });
    process.stdout.write(`\r[${requestsSent++}] resolve ${domain}${spacepad}`);
    dns.resolveAny(domain, err => {
        if (err && err.code !== 'ENOTFOUND')
            console.error(`\rERROR: lookup ${domain}:`, err.code, '                                   ');

        // If server is busy, slow down
        if (os.loadavg()[0] > 1)
            setTimeout(randLookup, 1000);
        else if (process.env.DELAY_MS)
	    setTimeout(randLookup, parseInt(process.env.DELAY_MS));
        else
            randLookup();
    });
}

// Spawn threads
const nThreads = process.env.THREADS || 1;
for (let i = 0; i < nThreads; i++)
    randLookup();
console.log(`\nSpawned ${nThreads} random lookup threads`);


function knownLookup() {
    const domain = knownSites[Math.floor(Math.random() * knownSites.length)];
    // process.stdout.write(`\r[${requestsSent++}] dig ${domain}${}`);
    requestsSent++;
    dns.resolveAny(domain, err => {
        if (err)
            console.error(`\rERROR: known ${domain}:`, err);

        setTimeout(knownLookup, 5000);
    });
}

knownLookup();
console.log('\nSpawned 1 known lookup thread');
