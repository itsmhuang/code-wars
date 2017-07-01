var rgb = function( r, g, b ) {
    var hex = '';
    
    
    var alphaNums = function( input ) {
        var output;
        switch ( input ) {
            case 10:
                output = 'A';
                break;
            case 11:
                output = 'B';
                break;
            case 12:
                output = 'C';
                break;
            case 13:
                output = 'D';
                break;
            case 14:
                output = 'E';
                break;
            case 15:
                output = 'F';
                break;
            default:
                output = input;
                break;
        }
        // console.log( 'output:', output );
        return output;
    };
    
    var converter = function( input ) {
        if ( input > 255 ) {
            input = 255;
        }
        if ( input < 0 ) {
            input = 0;
        }
        var str = '';
        var whole = Math.floor( input/16 ) || 0;
        var remainder = input%16 || 0;
        
        str = alphaNums( whole ) + '' + alphaNums( remainder );
        
        return str;
    };
    
    hex = converter(r) + converter(g) + converter(b) ;
    console.log( 'hex:', hex );
    return hex;
    
};


// rgb(255, 255, 255); // returns FFFFFF
rgb(255, 255, 300); // returns FFFFFF
rgb(0,0,0); // returns 000000
rgb(148, 0, 211); // returns 9400D3

