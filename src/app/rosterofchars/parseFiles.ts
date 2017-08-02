export class ParseFiles {

  parseMyData(fighters, object, ret) {
    if (object.link.substr((object.link.length - 4), 4) === 'json') {
      this.parseMyJSON(fighters, ret);
      return true;
    }
    if (object.link.substr((object.link.length - 3), 3) === 'xml') {
      this.parseMyXML(fighters, ret);
      return true;
    }
    if (object.link.substr((object.link.length - 3), 3) === 'csv') {
      this.parseMyCSV(fighters, ret);
      return true;
    }
  }

  findFighter(fighter, newFighterName) {
    return fighter.name === newFighterName;
  }

  parseMyJSON(fighters, json) {
    json.fighters.forEach(newFighter => {
      const founded = fighters.find((fighter) => this.findFighter(fighter, newFighter.name));
      if (founded) {
        founded['game'] = `${founded['game']}, Street Fighter V`;
      }
      if (!(founded)) {
        fighters.push({ name: newFighter.name.trim(), game: 'Street Fighter V' });
      }
    });
  }

  parseMyXML(fighters, xml) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'text/xml');
    for (const char in xmlDoc.getElementsByTagName('char')) {
      if (xmlDoc.getElementsByTagName('char')[char].nodeName === 'char') {
        const mewFighterName = xmlDoc.getElementsByTagName('char')[char].textContent;
        const founded = fighters.find((fighter) => this.findFighter(fighter, mewFighterName));
        if (founded) {
          founded['game'] = `${founded['game']}, Tekken 7`;
        }
        if (!(founded)) {
          fighters.push({ name: mewFighterName.trim(), game: 'Tekken 7' });
        }
      }
    }
  }

  parseMyCSV(fighters, csv) {
    const fightersArray = csv.split(';');
    fightersArray.forEach((newFighter) => {
      const founded = fighters.find((fighter) => this.findFighter(fighter, newFighter));
      if (founded) {
        founded['game'] = `${founded['game']}, Mortal Kombat X`;
      }
      if (!(founded)) {
        fighters.push({ name: newFighter.trim(), game: 'Mortal Kombat X' });
      }
    });
  }

}
