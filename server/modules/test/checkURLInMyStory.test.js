const expect = require('chai').expect
const checkURL = require('../filter/checkURL');

describe('checkURLInMyStory', () => {
    describe ('base cases for .com', () => {
        it('should return true when https://www.tires.com in story field', () => {
            expect(checkURL('https://www.tires.com')).to.be.true;
        });
        it('should return true when https://www.tires.com in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. https://www.tires.com is a great site that I love.')).to.be.true;
        });
        it('should return true when www.tires.com in story field', () => {
            expect(checkURL('www.tires.com')).to.be.true;
        });
        it('should return true when www.tires.com in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. www.tires.com is a great site that I love.')).to.be.true;
        });
        it('should return true when tires.com in story field', () => {
            expect(checkURL('tires.com')).to.be.true;
        });
        it('should return true when tires.com in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. tires.com is a great site that I love.')).to.be.true;
        });
        it('should return true when .com in story field', () => {
            expect(checkURL('.com')).to.be.true;
        });
        it('should return true when .com in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. .com is a great site that I love.')).to.be.true;
        });
        it('should return false when com in story field', () => {
            expect(checkURL('com')).to.be.false;
        });
        it('should return false when com in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. com is a great site that I love.')).to.be.false;
        });
    })
    describe ('base cases for .net', () => {
        it('should return true when https://www.tires.net in story field', () => {
            expect(checkURL('https://www.tires.net')).to.be.true;
        });
        it('should return true when https://www.tires.net in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. https://www.tires.net is a great site that I love.')).to.be.true;
        });
        it('should return true when www.tires.net in story field', () => {
            expect(checkURL('www.tires.net')).to.be.true;
        });
        it('should return true when www.tires.net in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. www.tires.net is a great site that I love.')).to.be.true;
        });
        it('should return true when tires.net in story field', () => {
            expect(checkURL('tires.net')).to.be.true;
        });
        it('should return true when tires.net in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. tires.net is a great site that I love.')).to.be.true;
        });
        it('should return true when .net in story field', () => {
            expect(checkURL('.net')).to.be.true;
        });
        it('should return true when .net in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. .net is a great site that I love.')).to.be.true;
        });
        it('should return false when net in story field', () => {
            expect(checkURL('net')).to.be.false;
        });
        it('should return false when net in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. net is a great site that I love.')).to.be.false;
        });
    });
    describe ('base cases for .de', () => {
        it('should return true when https://www.tires.de in story field', () => {
            expect(checkURL('https://www.tires.de')).to.be.true;
        });
        it('should return true when https://www.tires.de in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. https://www.tires.de is a great site that I love.')).to.be.true;
        });
        it('should return true when www.tires.de in story field', () => {
            expect(checkURL('www.tires.de')).to.be.true;
        });
        it('should return true when www.tires.de in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. www.tires.de is a great site that I love.')).to.be.true;
        });
        it('should return true when tires.de in story field', () => {
            expect(checkURL('tires.de')).to.be.true;
        });
        it('should return true when tires.de in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. tires.de is a great site that I love.')).to.be.true;
        });
        it('should return true when .de in story field', () => {
            expect(checkURL('.de')).to.be.true;
        });
        it('should return true when .de in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. .de is a great site that I love.')).to.be.true;
        });
        it('should return false when de in story field', () => {
            expect(checkURL('de')).to.be.false;
        });
        it('should return false when de in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. de is a great site that I love.')).to.be.false;
        });
    });
    describe ('base cases for .cn', () => {
        it('should return true when https://www.tires.cn in story field', () => {
            expect(checkURL('https://www.tires.cn')).to.be.true;
        });
        it('should return true when https://www.tires.cn in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. https://www.tires.cn is a great site that I love.')).to.be.true;
        });
        it('should return true when www.tires.cn in story field', () => {
            expect(checkURL('www.tires.cn')).to.be.true;
        });
        it('should return true when www.tires.cn in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. www.tires.cn is a great site that I love.')).to.be.true;
        });
        it('should return true when tires.cn in story field', () => {
            expect(checkURL('tires.cn')).to.be.true;
        });
        it('should return true when tires.cn in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. tires.cn is a great site that I love.')).to.be.true;
        });
        it('should return true when .cn in story field', () => {
            expect(checkURL('.cn')).to.be.true;
        });
        it('should return true when .cn in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. .cn is a great site that I love.')).to.be.true;
        });
        it('should return false when cn in story field', () => {
            expect(checkURL('cn')).to.be.false;
        });
        it('should return false when cn in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. cn is a great site that I love.')).to.be.false;
        });
    });
    describe ('base cases for .uk', () => {
        it('should return true when https://www.tires.uk in story field', () => {
            expect(checkURL('https://www.tires.uk')).to.be.true;
        });
        it('should return true when https://www.tires.uk in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. https://www.tires.uk is a great site that I love.')).to.be.true;
        });
        it('should return true when www.tires.uk in story field', () => {
            expect(checkURL('www.tires.uk')).to.be.true;
        });
        it('should return true when www.tires.uk in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. www.tires.uk is a great site that I love.')).to.be.true;
        });
        it('should return true when tires.uk in story field', () => {
            expect(checkURL('tires.uk')).to.be.true;
        });
        it('should return true when tires.uk in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. tires.uk is a great site that I love.')).to.be.true;
        });
        it('should return true when .uk in story field', () => {
            expect(checkURL('.uk')).to.be.true;
        });
        it('should return true when .uk in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. .uk is a great site that I love.')).to.be.true;
        });
        it('should return false when uk in story field', () => {
            expect(checkURL('uk')).to.be.false;
        });
        it('should return false when uk in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. uk is a great site that I love.')).to.be.false;
        });
    });
    describe ('base cases for .in', () => {
        it('should return true when https://www.tires.in in story field', () => {
            expect(checkURL('https://www.tires.in')).to.be.true;
        });
        it('should return true when https://www.tires.in in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. https://www.tires.in is a great site that I love.')).to.be.true;
        });
        it('should return true when www.tires.in in story field', () => {
            expect(checkURL('www.tires.in')).to.be.true;
        });
        it('should return true when www.tires.in in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. www.tires.in/greatTires is a great site that I love.')).to.be.true;
        });
        it('should return true when tires.in in story field', () => {
            expect(checkURL('tires.in')).to.be.true;
        });
        it('should return true when tires.in in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. tires.in is a great site that I love.')).to.be.true;
        });
        it('should return true when .in in story field', () => {
            expect(checkURL('.in')).to.be.true;
        });
        it('should return true when .in in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. .in is a great site that I love.')).to.be.true;
        });
        it('should return false when in in story field', () => {
            expect(checkURL('in')).to.be.false;
        });
        it('should return false when in in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. in is a great site that I love.')).to.be.false;
        });
    });
    describe ('base cases for .org', () => {
        it('should return false when https://www.tires.org in story field', () => {
            expect(checkURL('https://www.tires.org')).to.be.false;
        });
        it('should return false when https://www.tires.org in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. https://www.tires.org is a great site that I love.')).to.be.false;
        });
        it('should return false when www.tires.org in story field', () => {
            expect(checkURL('www.tires.org')).to.be.false;
        });
        it('should return false when www.tires.org in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. www.tires.org/greatTires is a great site that I love.')).to.be.false;
        });
        it('should return false when tires.org in story field', () => {
            expect(checkURL('tires.org')).to.be.false;
        });
        it('should return false when tires.org in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. tires.org is a great site that I love.')).to.be.false;
        });
        it('should return false when .org in story field', () => {
            expect(checkURL('.org')).to.be.false;
        });
        it('should return false when .org in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. .org is a great site that I love.')).to.be.false;
        });
        it('should return false when org in story field', () => {
            expect(checkURL('org')).to.be.false;
        });
        it('should return false when org in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. org is a great site that I love.')).to.be.false;
        });
    });
});

describe('checkURLInMyStory', () => {
    describe ('whack after .com', () => {
        it('should return true when https://www.tires.com/greatTires in story field', () => {
            expect(checkURL('https://www.tires.com/greatTires')).to.be.true;
        });
        it('should return true when https://www.tires.com/greatTires in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. https://www.tires.com/greatTires is a great site that I love.')).to.be.true;
        });
        it('should return true when www.tires.com/greatTires in story field', () => {
            expect(checkURL('www.tires.com/greatTires')).to.be.true;
        });
        it('should return true when www.tires.com/greatTires in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. www.tires.com/greatTires is a great site that I love.')).to.be.true;
        });
        it('should return true when tires.com/greatTires in story field', () => {
            expect(checkURL('tires.com/greatTires')).to.be.true;
        });
        it('should return true when tires.com/greatTires in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. tires.com/greatTires is a great site that I love.')).to.be.true;
        });
    });
    describe ('whack after .net', () => {
        it('should return true when https://www.tires.net/greatTires in story field', () => {
            expect(checkURL('https://www.tires.net/greatTires')).to.be.true;
        });
        it('should return true when https://www.tires.net/greatTires in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. https://www.tires.net/greatTires is a great site that I love.')).to.be.true;
        });
        it('should return true when www.tires.net/greatTires in story field', () => {
            expect(checkURL('www.tires.net/greatTires')).to.be.true;
        });
        it('should return true when www.tires.net/greatTires in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. www.tires.net/greatTires is a great site that I love.')).to.be.true;
        });
        it('should return true when tires.net/greatTires in story field', () => {
            expect(checkURL('tires.net/greatTires')).to.be.true;
        });
        it('should return true when tires.net/greatTires in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. tires.net/greatTires is a great site that I love.')).to.be.true;
        });
    });
    describe ('whack after .de', () => {
        it('should return true when https://www.tires.de/greatTires in story field', () => {
            expect(checkURL('https://www.tires.de/greatTires')).to.be.true;
        });
        it('should return true when https://www.tires.de/greatTires in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. https://www.tires.de/greatTires is a great site that I love.')).to.be.true;
        });
        it('should return true when www.tires.de/greatTires in story field', () => {
            expect(checkURL('www.tires.de/greatTires')).to.be.true;
        });
        it('should return true when www.tires.de/greatTires in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. www.tires.de/greatTires is a great site that I love.')).to.be.true;
        });
        it('should return true when tires.de/greatTires in story field', () => {
            expect(checkURL('tires.de/greatTires')).to.be.true;
        });
        it('should return true when tires.de/greatTires in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. tires.de/greatTires is a great site that I love.')).to.be.true;
        });
    });
    describe ('whack after .cn', () => {
        it('should return true when https://www.tires.cn/greatTires in story field', () => {
            expect(checkURL('https://www.tires.cn/greatTires')).to.be.true;
        });
        it('should return true when https://www.tires.cn/greatTires in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. https://www.tires.cn/greatTires is a great site that I love.')).to.be.true;
        });
        it('should return true when www.tires.cn/greatTires in story field', () => {
            expect(checkURL('www.tires.cn/greatTires')).to.be.true;
        });
        it('should return true when www.tires.cn/greatTires in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. www.tires.cn/greatTires is a great site that I love.')).to.be.true;
        });
        it('should return true when tires.cn/greatTires in story field', () => {
            expect(checkURL('tires.cn/greatTires')).to.be.true;
        });
        it('should return true when tires.cn/greatTires in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. tires.cn/greatTires is a great site that I love.')).to.be.true;
        });
    });
    describe ('whack after .uk', () => {
        it('should return true when https://www.tires.uk/greatTires in story field', () => {
            expect(checkURL('https://www.tires.uk/greatTires')).to.be.true;
        });
        it('should return true when https://www.tires.uk/greatTires in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. https://www.tires.uk/greatTires is a great site that I love.')).to.be.true;
        });
        it('should return true when www.tires.uk/greatTires in story field', () => {
            expect(checkURL('www.tires.uk/greatTires')).to.be.true;
        });
        it('should return true when www.tires.uk/greatTires in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. www.tires.uk/greatTires is a great site that I love.')).to.be.true;
        });
        it('should return true when tires.uk/greatTires in story field', () => {
            expect(checkURL('tires.uk/greatTires')).to.be.true;
        });
        it('should return true when tires.uk/greatTires in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. tires.uk/greatTires is a great site that I love.')).to.be.true;
        });
    });
    describe ('whack after .in', () => {
        it('should return true when https://www.tires.in/greatTires in story field', () => {
            expect(checkURL('https://www.tires.in/greatTires')).to.be.true;
        });
        it('should return true when https://www.tires.in/greatTires in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. https://www.tires.in/greatTires is a great site that I love.')).to.be.true;
        });
        it('should return true when www.tires.in/greatTires in story field', () => {
            expect(checkURL('www.tires.in/greatTires')).to.be.true;
        });
        it('should return true when www.tires.in/greatTires in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. www.tires.in/greatTires/greatTires is a great site that I love.')).to.be.true;
        });
        it('should return true when tires.in/greatTires in story field', () => {
            expect(checkURL('tires.in/greatTires')).to.be.true;
        });
        it('should return true when tires.in/greatTires in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. tires.in/greatTires is a great site that I love.')).to.be.true;
        });
    });
});

describe('checkURLInMyStory', () => {
    describe('Edge Cases', () => {
        it('should return false when www in story field', () => {
            expect(checkURL('www')).to.be.false;
        });
        it('should return false when www in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. www is a great site that I love.')).to.be.false;
        });
        it('should return false when http in story field', () => {
            expect(checkURL('http')).to.be.false;
        });
        it('should return false when http in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. http is a great site that I love.')).to.be.false;
        });
        it('should return false when http in story field', () => {
            expect(checkURL('https')).to.be.false;
        });
        it('should return false when http in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. https is a great site that I love.')).to.be.false;
        });
        it('should return false when 11111.com in story field', () => {
            expect(checkURL('11111.com')).to.be.false;
        });
        it('should return false when 11111.com in story field', () => {
            expect(checkURL('Hey here is some text that I have to write in the story about the site that I am trying to make up. 11111.com is a great site that I love.')).to.be.false;
        });
    });
});
