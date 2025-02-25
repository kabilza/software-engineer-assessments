import './PartyLinks.css';

const PARTIES = [
  { name: 'Hippo Party', url: 'https://en.wikipedia.org/wiki/Hippopotamus' },
  { name: 'Giraffe Party', url: 'https://en.wikipedia.org/wiki/Giraffe' },
  { name: 'Tiger Party', url: 'https://en.wikipedia.org/wiki/Tiger' },
  { name: 'Zebra Party', url: 'https://en.wikipedia.org/wiki/Zebra' },
  { name: 'Meerkat Party', url: 'https://en.wikipedia.org/wiki/Meerkat' },
  { name: 'Pelican Party', url: 'https://en.wikipedia.org/wiki/Pelican' },
]

function PartyLinks() {
  return (
    // <ul className="Party-links">
    //   {PARTIES.map((party) =>
    //     (<li className="Party-link-button" key={party.name}>
    //       <a href={party.url}>{party.name}</a>
    //     </li>)
    //   )}
    // </ul>
    <div className='Party-links-container'>
      {PARTIES.map((party) =>
      (<a className="Party-links-button" href={party.url} key={party.name}>
        {party.name}
      </a>))}
    </div>
  );
}

export default PartyLinks;
