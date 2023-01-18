

const tldWeights = {
    com: 100,
    tk: 2,
    net: 12,
    org: 10,
    info: 6,
    io: 5,
    dev: 3,
    biz: 1,
    gg: 2,
    xyz: 4,
    work: 1,
    app: 1,
    ml: 1,
    ai: 1,
    us: 1,
    // 'co.uk': 1,
    // 'co.jp': 1,
    tv: 1,
    club: 1,
    live: 1,
    ga: 1,
    space: 1,
    online: 1,
    earth: 1,
    me: 2,
    co: 1,
    to: 1,
    ca: 1,
    edu: 2,
    page: 1,
    fm: 1,
    am: 1,
    eu: 1,
};

const tldPicker = [].concat(
    ...Object.entries(tldWeights)
        .map(([k, v]) => new Array(v).fill(k)));

// Note that last char cannot be start or end of domain
const domainChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-';

const prefixes = [
    'attsux',
    'not4sale',
    'goaway',
    'letmechangedns',
    'givemedns',
    'trashrouter',
];

function generateDomain(options = {}) {
    const minLength = options.minLength || 1;
    const maxLength = options.maxLength || 20;
    const len = Math.floor(Math.random() * (maxLength - minLength) + minLength);

    let ret = '';
    if (Math.random() > 0.5)
        ret += prefixes[Math.floor(Math.random() * prefixes.length)];

    ret += domainChars[Math.floor(Math.random() * (domainChars.length - 1))];
    for (let i = 1; i < len - 1; i++)
        ret += domainChars[Math.floor(Math.random() * domainChars.length)];
    ret += domainChars[Math.floor(Math.random() * (domainChars.length - 1))];

    ret += '.' + tldPicker[Math.floor(Math.random() * tldPicker.length)];
    return ret;
}

module.exports = generateDomain;