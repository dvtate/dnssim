const os = require('os');
const dns = require('dns');

const genDomain = require('./site_generator');
const knownSites = require('./known_sites');

// AT&T DNS servers
dns.setServers([ '68.94.156.1', '68.94.157.1' ]);

let requestsSent = 0;

const spacepad = '                                                                               ';
function randLookup() {
    const domain = genDomain();
    process.stdout.write(`\r[${requestsSent++}] dig ${domain}${spacepad}`);
    dns.resolveAny(domain, err => {
        // if (err)
        //     console.error(`\nERROR: lookup ${domain}:`);

        // If server is busy, slow down
        if (os.loadavg()[0] > 0.5)
            setTimeout(randLookup, 1000);
        else
            randLookup();
    });
}

// Spawn threads
const nThreads = process.env.THREADS || 10;
for (let i = 0; i < nThreads; i++)
    randLookup();
console.log(`Spawned ${nThreads} random lookup threads`);


function knownLookup() {
    const domain = knownSites[Math.floor(Math.random() * knownSites.length)];
    // process.stdout.write(`\r[${requestsSent++}] dig ${domain}${}`);
    requestsSent++;
    dns.resolveAny(domain, err => {
        // if (err)
        //     console.error(`\nERROR: known ${domain}:`);

        setTimeout(knownLookup, 5000);
    });
}

knownLookup();
console.log('Spawned 1 known lookup thread');