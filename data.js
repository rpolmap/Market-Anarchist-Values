// ======================================================================
// MAValues shared data: categories, values, ideologies, people, popup menu
// ======================================================================

const categoryNames = {
    culture: "Culture", property: "Property", ip: "Intellectual Property",
    capital: "Capital and Wealth", workplace: "Workplace Structure",
    tactic: "Tactic", price: "Price determination"
};

// Categories and their values (exactly as specified) + short descriptions
const categoryValues = {
    culture: [
        { name: "Progressive", desc: "Society should keep moving forward and leave outdated traditions behind in favour of greater liberty." },
        { name: "Moderate", desc: "Progress is welcome, but cultural bonds and inherited customs still matter and should be preserved." },
        { name: "Conservatve", desc: "Social change should be slowed or resisted; tradition and established norms are worth defending." },
        { name: "Traditionalist", desc: "Society should return to the lifestyle and values of our ancestors." }
    ],
    property: [
        { name: "Georgism", desc: "Unused natural land belongs to everyone equally; those who hold it exclusively owe the community for that privilege." },
        { name: "Lockean Homesteading", desc: "Unowned land becomes property by mixing your labour with it, and ownership then stays with you, even if you stop using it." },
        { name: "Constructive Occupancy", desc: "Abandoned land can be re-homesteaded by someone else, even if it is still claimed by an owner who does not use it." },
        { name: "Occupancy & Use", desc: "Property is legitimate only while you actually occupy and use it; absentee landlords have no valid claim." }
    ],
    ip: [
        { name: "Anti-IP", desc: "Ideas are not scarce, so nobody should be able to restrict what others produce or use. Patents and copyrights are illegitimate." },
        { name: "Propertiary IP", desc: "Creators own what they create and others should not copy it without the creator's consent." }
    ],
    capital: [
        { name: "Freed Markets", desc: "Today's capitalism is a product of statism and causes inequality; removing state privilege lets free markets spread wealth and power." },
        { name: "Full Capitalism", desc: "Capitalism is simply voluntary exchange between individuals; big companies would adapt or collapse in a free society, and their owners are legitimate." },
        { name: "Cronyism", desc: "Powerful companies may rely on the state to protect themselves and restrict their rivals." }
    ],
    workplace: [
        { name: "Hierarchial", desc: "The current boss-and-employee workplace structure should be kept." },
        { name: "Horizontal Self-Employment", desc: "Workers are their own bosses, working independently or in flat co-operatives and collectively hiring and firing within their sector." },
        { name: "Democratic Workplace", desc: "Workers should democratically elect their bosses every few years." },
        { name: "Unionism", desc: "Worker unions are preferable to individual labour; workers bargain and organise collectively." }
    ],
    tactic: [
        { name: "Counter Economics", desc: "Starve the state by trading in the black and grey market and ignoring its rules and taxes." },
        { name: "Revolution", desc: "The state must be overthrown directly rather than slowly starved or reformed." },
        { name: "Democracy", desc: "Use the present political landscape: popularise the ideas through elections and the democratic system." }
    ],
    price: [
        { name: "Supply & Demand", desc: "Prices are set by buyers and sellers through the market." },
        { name: "Labor Input", desc: "Prices should be determined by how much labour is put into a product." }
    ]
};

// Quick lookup: value name -> description
const valueDescriptions = {};
for (const k in categoryValues) categoryValues[k].forEach(v => valueDescriptions[v.name] = v.desc);

// Ideologies. A profile value can be an array = several acceptable positions.
const ideologies = [
    { name: "Rothbardianism", color: "#3b82f6", group: "Anarcho Capitalism",
      desc: "Anarcho-capitalism in the tradition of Murray Rothbard: natural-law property rights, strict Lockean homesteading, and private firms in a fully free market.",
      profile: { culture: "Moderate", property: "Lockean Homesteading", ip: "Anti-IP", capital: "Full Capitalism", workplace: "Hierarchial", tactic: "Counter Economics", price: "Supply & Demand" } },
    { name: "Hoppeanism", color: "#8b5cf6", group: "Anarcho Capitalism",
      desc: "Anarcho-capitalism in the tradition of Hans-Hermann Hoppe: private property with a strongly traditionalist view of culture and social order.",
      profile: { culture: "Traditionalist", property: "Lockean Homesteading", ip: "Anti-IP", capital: "Full Capitalism", workplace: "Hierarchial", tactic: "Counter Economics", price: "Supply & Demand" } },
    { name: "Left Rothbardianism", color: "#ef4444", group: "Left-Wing Market Anarchism",
      desc: "Keeps Rothbardian homesteading and market exchange but pairs them with progressive culture, freed markets and independent, self-managed work.",
      profile: { culture: "Progressive", property: ["Lockean Homesteading", "Constructive Occupancy"], ip: "Anti-IP", capital: "Freed Markets", workplace: "Horizontal Self-Employment", tactic: "Counter Economics", price: "Supply & Demand" } },
    { name: "Mutualism", color: "#14b8a6", group: "Left-Wing Market Anarchism",
      desc: "Market anarchism built on occupancy-and-use property, worker associations and the idea that prices should reflect the labour put into goods.",
      profile: { culture: ["Progressive", "Moderate"], property: "Occupancy & Use", ip: "Anti-IP", capital: "Freed Markets", workplace: ["Democratic Workplace", "Unionism"], tactic: ["Democracy", "Counter Economics"], price: "Labor Input" } },
    { name: "Geoanarchism", color: "#f59e0b", group: "Left-Wing Market Anarchism",
      desc: "Market anarchism that treats land as a common inheritance: unused natural land belongs to everyone equally, as in Georgism.",
      profile: { culture: "Moderate", property: "Georgism", ip: "Anti-IP", capital: "Freed Markets", workplace: "Horizontal Self-Employment", tactic: "Counter Economics", price: "Supply & Demand" } },
    { name: "Agorism", color: "#ec4899", group: "Tactical",
      desc: "A strategy-first ideology: build a stateless society through counter-economics, trading on the black market until the state is starved.",
      profile: { culture: "Moderate", property: "Occupancy & Use", ip: "Anti-IP", capital: "Freed Markets", workplace: "Horizontal Self-Employment", tactic: "Counter Economics", price: "Supply & Demand" } }
];

// The three ideology groups shown on the Ideologies screen
const ideologyGroups = [
    { name: "Anarcho Capitalism", color: "#3b82f6",
      desc: "Stateless society organised around private property, full capitalism and voluntary exchange, with hierarchical firms seen as legitimate." },
    { name: "Left-Wing Market Anarchism", color: "#ef4444",
      desc: "Markets without a state, combined with a critique of today's capitalism, concern for equality, and more worker-friendly and land-friendly property norms." },
    { name: "Tactical", color: "#ec4899",
      desc: "Ideologies defined mainly by how to reach a free society (the strategy) rather than by a particular property or workplace system." }
];

// People shown in results
const people = [
    { name: "Hans-Hermann Hoppe", color: "#8b5cf6",
      desc: "Austrian-school economist and philosopher; anarcho-capitalist known for his argumentation ethics and traditionalist social views.",
      profile: { culture: "Traditionalist", property: "Lockean Homesteading", ip: "Anti-IP", capital: "Full Capitalism", workplace: "Hierarchial", tactic: "Counter Economics", price: "Supply & Demand" } },
    { name: "Murray Rothbard", color: "#3b82f6",
      desc: "Economist and political theorist who founded modern anarcho-capitalism, combining Austrian economics with natural-rights property theory.",
      profile: { culture: "Moderate", property: "Lockean Homesteading", ip: "Anti-IP", capital: "Full Capitalism", workplace: "Hierarchial", tactic: ["Democracy", "Counter Economics"], price: "Supply & Demand" } },
    { name: "SEK3", color: "#ec4899",
      desc: "Samuel Edward Konkin III, founder of agorism and the theory of counter-economics as a path to a stateless society.",
      profile: { culture: "Progressive", property: "Lockean Homesteading", ip: "Anti-IP", capital: "Freed Markets", workplace: "Horizontal Self-Employment", tactic: "Counter Economics", price: "Supply & Demand" } },
    { name: "Proudhon", color: "#14b8a6",
      desc: "Pierre-Joseph Proudhon, the first self-declared anarchist and father of mutualism, famous for \"property is theft\" and for worker associations.",
      profile: { culture: "Conservatve", property: "Occupancy & Use", ip: "Anti-IP", capital: "Freed Markets", workplace: ["Democratic Workplace", "Unionism"], tactic: "Democracy", price: "Labor Input" } },
    { name: "Benjamin Tucker", color: "#f59e0b",
      desc: "American individualist anarchist and editor of Liberty; defended mutual banking, the labour theory of value and the \"cost the limit of price\" principle.",
      profile: { culture: "Moderate", property: "Occupancy & Use", ip: ["Anti-IP", "Propertiary IP"], capital: "Freed Markets", workplace: "Horizontal Self-Employment", tactic: "Counter Economics", price: "Labor Input" } },
    { name: "Ludwig von Mises", color: "#22c55e",
      desc: "Leading Austrian-school economist and classical liberal who defended free markets and economic calculation, though he was not an anarchist.",
      profile: { culture: "Moderate", property: "Lockean Homesteading", ip: "Propertiary IP", capital: "Full Capitalism", workplace: "Hierarchial", tactic: "Democracy", price: "Supply & Demand" } }
];

// ---------------- Popup menu (click a value / ideology / person) ----------------
function openInfo(title, subtitle, desc, color) {
    closeInfo();
    const overlay = document.createElement('div');
    overlay.className = 'info-overlay';
    overlay.id = 'info-overlay';
    overlay.innerHTML = `
        <div class="info-menu" role="dialog" aria-modal="true">
            <div class="info-bar" style="background:${color || 'var(--accent-soft)'}"></div>
            <button class="info-close" aria-label="Close">&times;</button>
            <div class="info-title"></div>
            ${subtitle ? '<div class="info-sub"></div>' : ''}
            <p class="info-desc"></p>
        </div>`;
    overlay.querySelector('.info-title').textContent = title;
    if (subtitle) overlay.querySelector('.info-sub').textContent = subtitle;
    overlay.querySelector('.info-desc').textContent = desc;
    overlay.addEventListener('click', e => { if (e.target === overlay) closeInfo(); });
    overlay.querySelector('.info-close').addEventListener('click', closeInfo);
    document.body.appendChild(overlay);
}
function closeInfo() {
    const o = document.getElementById('info-overlay');
    if (o) o.remove();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeInfo(); });

const openValueInfo = (name, catKey) => openInfo(name, catKey ? categoryNames[catKey] : "Value", valueDescriptions[name] || "", null);
const openIdeologyInfo = name => {
    const i = ideologies.find(x => x.name === name);
    if (i) return openInfo(i.name, "Ideology · " + i.group, i.desc, i.color);
    const g = ideologyGroups.find(x => x.name === name);
    if (g) openInfo(g.name, "Ideology group", g.desc, g.color);
};
const openPersonInfo = name => {
    const p = people.find(x => x.name === name);
    if (p) openInfo(p.name, "Person", p.desc, p.color);
};

// Theme toggle (shared)
(function () {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('data-theme', localStorage.getItem('theme') || 'dark');
    if (themeToggle) themeToggle.addEventListener('click', () => {
        const next = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
})();
