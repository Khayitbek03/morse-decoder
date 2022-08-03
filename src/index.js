const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const letterLength=10;
    const symbolLength=2;
    let str='';
    for(let i=0;i<expr.length;i+=letterLength){
        let letter=expr.slice(i,i+letterLength);
        let morseLetter='';
        if(letter==='**********'){
            str+=' ';
        }
    }
    for(let j=0;j<letter.length;j+=symbolLength){
        let symbol=letter.slice(j,j+symbolLength);
        if(symbol==='10'){
            morseLetter+='.';
        }
        if(symbol==='11'){
            morseLetter+='-';
        }

        for(let key in MORSE_TABLE){
            if(key===morseLetter){
                str+=MORSE_TABLE[key];
            }
        }
    }
    return str;
}

module.exports = {
    decode
}