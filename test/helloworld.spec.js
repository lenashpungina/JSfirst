const {describe, it} = require('mocha');
const {assert} = require('chai');

const logger = require('../utils/log.util');
const dataTime = require('../utils/DateTimeUtil.util.js');

describe('Hello World TestSuite', () => {
    it('should write "Hello World"',  () => {
        logger.info('Hello World');
    });

    it('should check "Curret date"', () => {
        logger.info('Check the dateTime method [today] works correctly')
        var date = new Date();
        assert.strictEqual(dataTime.today().toUTCString(), date.toUTCString(), "The dateTime [today] method works incorrectly")
    });

    it('should check "Set year"', () => {
        var finalYear = 2005;
        var date = new Date();
        var secondDate = new Date();
        secondDate.setFullYear(finalYear)
        
        dataTime.setYear(date, finalYear);

        logger.info(date.toUTCString());
        assert.strictEqual(date.toUTCString(), secondDate.toUTCString(), "The dateTime method [set year] works incorrectly")
    
    });

    it('should check "Days Difference"', () => {
        var pastYear = 2018;
        var date = new Date();
        var expectedResultForLeapYear = 365;
        dataTime.setYear(date, pastYear);

        var currentDate = dataTime.today();

        logger.info(String(dataTime.daysDifference(currentDate, date)));
        assert.strictEqual(expectedResultForLeapYear, dataTime.daysDifference(currentDate, date), 
        "The dateTime method [Days Difference] works incorrectly")
    
    });
} );