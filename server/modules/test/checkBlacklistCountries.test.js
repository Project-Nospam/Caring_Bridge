const expect = require('chai').expect
const checkBlacklistCountries = require('../checkBlacklistCountries');


 // edge cases ip address with change to a single digit

describe('checkCountriesIP', () => {
    describe ('check China', () => {
        describe ('edge cases for China', () => {
            it('should return true if country IP address begins with 183. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('183.255.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 180. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('180.127.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 180. and IP address ends with .7', () => {
                expect(checkBlacklistCountries('180.168.12.7')).to.be.true;
            });
            it('should return true if country IP address begins with 180. and IP address ends with .191', () => {
                expect(checkBlacklistCountries('180.169.64.191')).to.be.true;
            });
            it('should return true if country IP address begins with 106. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('106.50.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 106. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('106.95.255.255')).to.be.true;
            });
        });
            
        describe ('normal cases for China', () => {
            it('should return true if country IP address begins with 183. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('183.255.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 183. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('183.170.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 183. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('183.71.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 183. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('183.85.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 183. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('183.175.255.255')).to.be.true;
            }); 
            it('should return true if country IP address begins with 103. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('103.212.111.255')).to.be.true;
            });
            it('should return true if country IP address begins with 103. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('103.212.167.255')).to.be.true;
            });
            it('should return true if country IP address begins with 103. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('103.198.159.255')).to.be.true;
            });
            it('should return true if country IP address begins with 103. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('103.195.139.255')).to.be.true;
            });
            it('should return true if country IP address begins with 103. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('103.110.139.255')).to.be.true;
            });
            it('should return true if country IP address begins with 118. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('118.103.240.255')).to.be.true;
            });
            it('should return true if country IP address begins with 118. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('118.31.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 118. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('118.193.15.255')).to.be.true;
            });
            it('should return true if country IP address begins with 118. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('118.67.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 118. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('118.230.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 118. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('118.103.240.255')).to.be.true;
            });
            it('should return true if country IP address begins with 118. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('118.31.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 118. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('118.193.15.255')).to.be.true;
            });
            it('should return true if country IP address begins with 118. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('118.67.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 118. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('118.230.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 218. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('218.99.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 218. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('218.100.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 218. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('218.31.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 218. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('218.207.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 218. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('218.247.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 220. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('220.207.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 220. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('220.115.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 220. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('220.252.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 220. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('220.243.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 220. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('220.234.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 223. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('223.117.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 223. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('223.163.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 223. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('223.167.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 223. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('223.251.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 223. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('223.255.127.255')).to.be.true;
            });
        });
    });

    describe ('check India', () => {
        describe ('edge cases for India', () => {
            it('should return true if country IP address begins with 13. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('13.235.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 14. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('14.99.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 27. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('27.107.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 59. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('59.99.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 42. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('42.111.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 49. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('49.249.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 59. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('59.165.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 59. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('59.185.255.255')).to.be.true;
            });
        });
        
        describe ('normal cases for India', () => {
            it('should return true if country IP address begins with 58. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('58.68.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 58. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('58.2.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 58. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('58.146.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 58. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('58.84.63.255')).to.be.true;
            });
            it('should return true if country IP address begins with 58. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('58.84.27.255')).to.be.true;
            });
            it('should return true if country IP address begins with 59. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('59.165.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 59. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('59.185.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 59. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('59.153.123.255')).to.be.true;
            });
            it('should return true if country IP address begins with 59. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('59.153.99.255')).to.be.true;
            });
            it('should return true if country IP address begins with 59. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('59.145.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 61. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('61.3.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 61. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('61.17.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 61. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('61.246.168.47')).to.be.true;
            });
            it('should return true if country IP address begins with 61. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('61.246.112.167')).to.be.true;
            });
            it('should return true if country IP address begins with 61. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('61.95.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 101. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('101.0.63.255')).to.be.true;
            });
            it('should return true if country IP address begins with 101. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('101.2.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 101. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('101.53.159.255')).to.be.true;
            });
            it('should return true if country IP address begins with 101. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('101.63.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 101. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('101.223.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 122. and IP address ends with .99', () => {
                expect(checkBlacklistCountries('122.184.133.99')).to.be.true;
            });
            it('should return true if country IP address begins with 122. and IP address ends with .103', () => {
                expect(checkBlacklistCountries('122.160.209.103')).to.be.true;
            });
            it('should return true if country IP address begins with 122. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('122.187.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 122. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('122.98.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 121. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('121.247.63.255')).to.be.true;
            });
            it('should return true if country IP address begins with 123. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('123.239.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 123. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('123.201.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 123. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('123.136.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 123. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('123.63.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 123. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('123.252.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 182. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('182.95.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 182. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('182.156.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 182. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('183.83.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 182. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('183.87.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 182. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('182.237.191.255')).to.be.true;
            });
        });
    })

    describe ('check Indonesia', () => {
        describe ('edge cases for Indonesia', () => {
            it('should return true if country IP address begins with 222. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('222.124.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 221. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('221.132.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 219. and IP address ends with .95', () => {
                expect(checkBlacklistCountries('219.83.70.95')).to.be.true;
            });
            it('should return true if country IP address begins with 218. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('218.33.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 210. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('210.210.191.255')).to.be.true;
            });
        });
          
        describe ('normal cases for Indonesia', () => {
            it('should return true if country IP address begins with 223. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('223.164.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 223. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('223.255.231.255')).to.be.true;
            });
            it('should return true if country IP address begins with 223. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('223.130.23.255')).to.be.true;
            });
            it('should return true if country IP address begins with 223. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('223.25.111.255')).to.be.true;
            });
            it('should return true if country IP address begins with 223. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('223.27.159.255')).to.be.true;
            });
            it('should return true if country IP address begins with 203. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('203.89.31.255')).to.be.true;
            });
            it('should return true if country IP address begins with 203. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('203.89.149.255')).to.be.true;
            });
            it('should return true if country IP address begins with 203. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('203.99.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 203. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('203.130.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 203. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('203.142.87.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.179.139.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.179.191.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.180.31.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.180.55.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.182.63.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.154.63.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.155.117.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.158.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.159.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.169.63.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.77.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.75.111.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.75.31.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.87.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.89.223.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.59.175.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.58.223.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.57.31.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.53.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.51.239.255')).to.be.true;
            });
            it('should return true if country IP address begins with 180. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('180.254.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 180. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('180.240.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 180. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('180.235.151.255')).to.be.true;
            });
            it('should return true if country IP address begins with 180. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('180.233.159.255')).to.be.true;
            });
            it('should return true if country IP address begins with 180. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('180.178.111.255')).to.be.true;
            });
        });
    });

    describe ('check Australia', () => {
        describe ('edge cases for Australia', () => {
            it('should return true if country IP address begins with 1. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('1.44.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 1. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('1.159.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 1. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('1.179.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 13. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('13.55.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 8. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('8.36.77.255')).to.be.true;
            });
            it('should return true if country IP address begins with 1. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('1.159.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 1. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('1.44.255.255')).to.be.true;
            });
        });
            
        describe ('normal cases for Australia', () => {
            it('should return true if country IP address begins with 183. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('183.255.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 183. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('183.170.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 183. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('183.71.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 220. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('183.85.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 220. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('183.175.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 23. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('23.4.175.255')).to.be.true;
            });
            it('should return true if country IP address begins with 23. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('23.7.31.255')).to.be.true;
            });
            it('should return true if country IP address begins with 23. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('23.7.253.255')).to.be.true;
            });
            it('should return true if country IP address begins with 23. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('23.11.211.255')).to.be.true;
            });
            it('should return true if country IP address begins with 23. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('23.32.55.255')).to.be.true;
            });
            it('should return true if country IP address begins with 23. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('23.63.107.255')).to.be.true;
            });
            it('should return true if country IP address begins with 23. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('23.77.159.255')).to.be.true;
            });
            it('should return true if country IP address begins with 23. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('23.101.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 23. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('23.204.223.255	')).to.be.true;
            });
            it('should return true if country IP address begins with 23. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('23.207.167.255')).to.be.true;
            });
            it('should return true if country IP address begins with 13. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('13.55.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 13. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('13.70.191.255')).to.be.true;
            });
            it('should return true if country IP address begins with 13. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('13.72.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 13. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('13.75.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 13. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('13.77.63.255')).to.be.true;
            });
            it('should return true if country IP address begins with 52. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('52.147.63.255')).to.be.true;
            });
            it('should return true if country IP address begins with 52. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('52.156.191.255')).to.be.true;
            });
            it('should return true if country IP address begins with 52. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('52.187.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 52. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('52.237.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 52. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('52.243.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 58. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('58.7.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 58. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('58.65.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 58. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('58.84.223.255')).to.be.true;
            });
            it('should return true if country IP address begins with 58. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('58.87.15.255')).to.be.true;
            });
            it('should return true if country IP address begins with 58. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('58.111.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 59. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('59.86.191.255')).to.be.true;
            });
            it('should return true if country IP address begins with 58. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('58.181.95.255')).to.be.true;
            });
            it('should return true if country IP address begins with 58. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('58.179.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 58. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('58.175.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 58. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('58.145.159.255')).to.be.true;
            });
        });
    });







    describe ('check Russia', () => {
        describe ('edge cases for Russia', () => {
            it('should return true if country IP address begins with 37. and IP address ends with .3', () => {
                expect(checkBlacklistCountries('37.9.98.3')).to.be.true;
            });
            it('should return true if country IP address begins with 2. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('2.63.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 5. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('5.3.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 5. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('5.19.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 13. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('13.55.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 8. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('8.36.77.255')).to.be.true;
            });
            it('should return true if country IP address begins with 1. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('1.159.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 1. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('1.44.255.255')).to.be.true;
            });
        });
            
        describe ('normal cases for Russia', () => {
            it('should return true if country IP address begins with 31. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('31.130.95.255')).to.be.true;
            });
            it('should return true if country IP address begins with 31. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('31.129.159.255')).to.be.true;
            });
            it('should return true if country IP address begins with 31. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('31.47.191.255')).to.be.true;
            });
            it('should return true if country IP address begins with 31. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('31.43.223.255')).to.be.true;
            });
            it('should return true if country IP address begins with 31. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('31.42.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 31. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('31.40.103.255')).to.be.true;
            });
            it('should return true if country IP address begins with 31. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('31.29.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 31. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('31.28.63.255')).to.be.true;
            });
            it('should return true if country IP address begins with 31. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('31.23.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 31. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('31.10.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 31. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('31.8.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.1.87.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.9.159.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.18.35.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.18.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.23.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.29.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.49.223.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.79.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.110.159.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.114.7.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.122.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.147.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.190.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.195.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.204.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.205.95.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.232.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.235.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 46. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('46.8.235.255')).to.be.true;
            });
            it('should return true if country IP address begins with 46. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('46.8.158.255')).to.be.true;
            });
            it('should return true if country IP address begins with 46. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('46.8.24.255')).to.be.true;
            });
            it('should return true if country IP address begins with 46. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('46.8.7.255')).to.be.true;
            });
            it('should return true if country IP address begins with 46. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('46.3.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 46. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('46.0.255.255')).to.be.true;
            });
        });
    });

    describe ('check Pakistan', () => {
        describe ('normal cases for Pakistan', () => {
            it('should return true if country IP address begins with 14. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('14.1.107.255')).to.be.true;
            });
            it('should return true if country IP address begins with 27. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('27.255.63.255')).to.be.true;
            });
            it('should return true if country IP address begins with 36. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('36.255.35.255')).to.be.true;
            });
            it('should return true if country IP address begins with 39. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('39.63.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 42. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('42.201.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 45. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('45.64.183.255')).to.be.true;
            });

            it('should return true if country IP address begins with 45. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('45.62.40.255')).to.be.true;
            });
            it('should return true if country IP address begins with 31. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('31.6.58.255')).to.be.true;
            });
            it('should return true if country IP address begins with 223. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('223.29.239.255')).to.be.true;
            });
            it('should return true if country IP address begins with 221. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('221.132.119.255')).to.be.true;
            });
            it('should return true if country IP address begins with 221. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('221.120.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 218. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('218.100.85.255')).to.be.true;
            });
            it('should return true if country IP address begins with 210. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('210.56.31.255')).to.be.true;
            });
            it('should return true if country IP address begins with 210. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('210.2.191.255')).to.be.true;
            });
            it('should return true if country IP address begins with 209. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('209.150.159.255')).to.be.true;
            });
            it('should return true if country IP address begins with 208. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('208.240.139.255')).to.be.true;
            });
            it('should return true if country IP address begins with 203. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('203.215.191.255')).to.be.true;
            });
            it('should return true if country IP address begins with 203. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('203.135.63.255')).to.be.true;
            });
            it('should return true if country IP address begins with 203. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('203.81.239.255')).to.be.true;
            });
            it('should return true if country IP address begins with 203. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('203.124.63.255')).to.be.true;
            });
            it('should return true if country IP address begins with 203. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('203.99.63.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.166.175.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.163.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 37. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('37.23.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.142.191.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.141.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.125.159.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.69.15.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.63.223.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.59.95.255')).to.be.true;
            });
            it('should return true if country IP address begins with 202. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('202.5.159.255')).to.be.true;
            });
            it('should return true if country IP address begins with 196. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('196.194.191.255')).to.be.true;
            });
            it('should return true if country IP address begins with 196. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('196.195.63.255')).to.be.true;
            });
            it('should return true if country IP address begins with 196. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('196.194.191.255')).to.be.true;
            });
            it('should return true if country IP address begins with 182. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('182.191.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 182. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('182.255.51.255')).to.be.true;
            });
            it('should return true if country IP address begins with 175. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('175.111.15.255')).to.be.true;
            });
            it('should return true if country IP address begins with 175. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('175.107.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 139. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('139.190.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 119. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('119.160.127.255')).to.be.true;
            });
            it('should return true if country IP address begins with 117. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('117.102.63.255')).to.be.true;
            });
            it('should return true if country IP address begins with 116. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('116.71.255.255')).to.be.true;
            });
            it('should return true if country IP address begins with 115. and IP address ends with .255', () => {
                expect(checkBlacklistCountries('115.186.191.255')).to.be.true;
            });
        });
    });

    describe ('normal cases for Russia', () => {
        it('should return False if country IP address has no input', () => {
            expect(checkBlacklistCountries('')).to.be.false;
        });
        it('should return False if country IP address has no integer, but text  ', () => {
            expect(checkBlacklistCountries('textTesting')).to.be.false;
        });
        it('should return False if country IP address has no integer, no text, but special characters  ', () => {
            expect(checkBlacklistCountries('!@#$%^&*')).to.be.false;
        });
    });

});
