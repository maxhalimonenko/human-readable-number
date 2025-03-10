module.exports = function toReadable (number) {
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
    'ninety'];
    
    var numString = number.toString();
    
    if (number < 0) throw new Error('Negative numbers are not supported.');
    
    if (number === 0) return 'zero';
    
    //the case of 1 - 20
    if (number < 20) {
    return ones[number];
    }
    
    if (numString.length === 2 ) {
    return (tens[numString[0]] + ' ' + ones[numString[1]]).trim();
    }
    
    //100 and more
    if (numString.length == 3) {
    if (numString[1] === '0' && numString[2] === '0')
    return (ones[numString[0]] + ' hundred ').trim();
    else
    return (ones[numString[0]] + ' hundred ' + toReadable(+(numString[1] + numString[2]))).trim();
    }
    
    if (numString.length === 4) {
    var end = +(numString[1] + numString[2] + numString[3]);
    if (end === 0) return ones[numString[0]] + ' thousand ';
    if (end < 100) return ones[numString[0]] + ' thousand ' + toReadable(end);
    return ones[numString[0]] + ' thousand ' + toReadable(end);
    }
    
    }