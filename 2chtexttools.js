var TextCheck = function() {
    var S = ""; //Start
    var E = ""; //End
    var O = ""; //Background
    var P = ""; //Font
    var characterMain = "%";
    var ln1 = "";
    var ln2 = "";
    var ln3 = "";
    var ln4 = "";
    var ln5 = "";
    var ln6 = "";
    var ln7 = "";

    this.mode = "";

    this.getWord = function(source)
    {
        var code;
        if (source == "triforce")
        {
            code = this.lnTriforce();
        }
        else if (source == "newforce")
        {
            code = this.lnTriforceNew();
        }
        else if (source == "hitler")
        {
            code = this.lnHitler();
        }
        else
        {
            ln1 = S;
            ln2 = S;
            ln3 = S;
            ln4 = S;
            ln5 = S;
            ln6 = S;
            ln7 = S;
            for (i = 0; i < source.length; i++)
            {
                this.getLetter(source.charAt(i));
            }
            ln1 += O;
            ln2 += O;
            ln3 += O;
            ln4 += O;
            ln5 += O;
            ln6 += O;
            ln7 += O;
            code = ln1 + "\n" + ln2 + "\n" + ln3 + "\n" + ln4 + "\n" + ln5 + "\n" + ln6 + "\n" + ln7 + "\n";
        }
        if (this.mode == 'html') {
            code = code.replace(/\n/g, '<br>')
        }
        return code;

    };
    this.getLetter = function(letter)
    {
        switch (letter)
        {
            case '1':
                ln1 += O + O + O;
                ln2 += O + O + P;
                ln3 += O + P + P;
                ln4 += O + O + P;
                ln5 += O + O + P;
                ln6 += O + O + P;
                ln7 += O + O + O;
                break;
            case '2':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + O + O + P;
                ln4 += O + P + P + P;
                ln5 += O + P + O + O;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case '3':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + O + O + P;
                ln4 += O + O + P + P;
                ln5 += O + O + O + P;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case '4':
                ln1 += O + O + O + O;
                ln2 += O + P + O + P;
                ln3 += O + P + O + P;
                ln4 += O + P + P + P;
                ln5 += O + O + O + P;
                ln6 += O + O + O + P;
                ln7 += O + O + O + O;
                break;
            case '5':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + P + O + O;
                ln4 += O + P + P + P;
                ln5 += O + O + O + P;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case '6':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + P + O + O;
                ln4 += O + P + P + P;
                ln5 += O + P + O + P;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case '7':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + O + O + P;
                ln4 += O + O + P + O;
                ln5 += O + O + P + O;
                ln6 += O + O + P + O;
                ln7 += O + O + O + O;
                break;
            case '8':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + P + O + P;
                ln4 += O + P + P + P;
                ln5 += O + P + O + P;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case '9':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + P + O + P;
                ln4 += O + P + P + P;
                ln5 += O + O + O + P;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case '0':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + P + O + P;
                ln4 += O + P + O + P;
                ln5 += O + P + O + P;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case 'a':
                ln1 += O + O + O + O;
                ln2 += O + O + P + O;
                ln3 += O + P + O + P;
                ln4 += O + P + P + P;
                ln5 += O + P + O + P;
                ln6 += O + P + O + P;
                ln7 += O + O + O + O;
                break;
            case 'b':
                ln1 += O + O + O + O + O;
                ln2 += O + P + P + P + O;
                ln3 += O + P + O + O + P;
                ln4 += O + P + P + P + O;
                ln5 += O + P + O + O + P;
                ln6 += O + P + P + P + O;
                ln7 += O + O + O + O + O;
                break;
            case 'c':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + P + O + O;
                ln4 += O + P + O + O;
                ln5 += O + P + O + O;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case 'd':
                ln1 += O + O + O + O;
                ln2 += O + P + P + O;
                ln3 += O + P + O + P;
                ln4 += O + P + O + P;
                ln5 += O + P + O + P;
                ln6 += O + P + P + O;
                ln7 += O + O + O + O;
                break;
            case 'e':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + P + O + O;
                ln4 += O + P + P + O;
                ln5 += O + P + O + O;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case 'f':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + P + O + O;
                ln4 += O + P + P + P;
                ln5 += O + P + O + O;
                ln6 += O + P + O + O;
                ln7 += O + O + O + O;
                break;
            case 'g':
                ln1 += O + O + O + O + O;
                ln2 += O + P + P + P + P;
                ln3 += O + P + O + O + O;
                ln4 += O + P + O + P + P;
                ln5 += O + P + O + O + P;
                ln6 += O + P + P + P + P;
                ln7 += O + O + O + O + O;
                break;
            case 'h':
                ln1 += O + O + O + O;
                ln2 += O + P + O + P;
                ln3 += O + P + O + P;
                ln4 += O + P + P + P;
                ln5 += O + P + O + P;
                ln6 += O + P + O + P;
                ln7 += O + O + O + O;
                break;
            case 'i':
                ln1 += O + O;
                ln2 += O + P;
                ln3 += O + P;
                ln4 += O + P;
                ln5 += O + P;
                ln6 += O + P;
                ln7 += O + O;
                break;
            case 'j':
                ln1 += O + O + O + O;
                ln2 += O + O + O + P;
                ln3 += O + O + O + P;
                ln4 += O + O + O + P;
                ln5 += O + P + O + P;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case 'k':
                ln1 += O + O + O + O;
                ln2 += O + P + O + P;
                ln3 += O + P + O + P;
                ln4 += O + P + P + O;
                ln5 += O + P + O + P;
                ln6 += O + P + O + P;
                ln7 += O + O + O + O;
                break;
            case 'l':
                ln1 += O + O + O + O;
                ln2 += O + P + O + O;
                ln3 += O + P + O + O;
                ln4 += O + P + O + O;
                ln5 += O + P + O + O;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case 'm':
                ln1 += O + O + O + O + O + O;
                ln2 += O + P + O + O + O + P;
                ln3 += O + P + P + O + P + P;
                ln4 += O + P + O + P + O + P;
                ln5 += O + P + O + O + O + P;
                ln6 += O + P + O + O + O + P;
                ln7 += O + O + O + O + O + O;
                break;
            case 'n':
                ln1 += O + O + O + O + O;
                ln2 += O + P + O + O + P;
                ln3 += O + P + O + O + P;
                ln4 += O + P + P + O + P;
                ln5 += O + P + O + P + P;
                ln6 += O + P + O + O + P;
                ln7 += O + O + O + O + O;
                break;
            case 'o':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + P + O + P;
                ln4 += O + P + O + P;
                ln5 += O + P + O + P;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case 'p':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + P + O + P;
                ln4 += O + P + P + P;
                ln5 += O + P + O + O;
                ln6 += O + P + O + O;
                ln7 += O + O + O + O;
                break;
            case 'q':
                ln1 += O + O + O + O + O + O;
                ln2 += O + P + P + P + P + O;
                ln3 += O + P + O + O + P + O;
                ln4 += O + P + O + O + P + O;
                ln5 += O + P + O + O + P + O;
                ln6 += O + P + P + P + P + O;
                ln7 += O + O + O + O + O + P;
                break;
            case 'r':
                ln1 += O + O + O + O;
                ln2 += O + P + P + O;
                ln3 += O + P + O + P;
                ln4 += O + P + O + P;
                ln5 += O + P + P + O;
                ln6 += O + P + O + P;
                ln7 += O + O + O + O;
                break;
            case 's':
                ln1 += O + O + O + O;
                ln2 += O + O + P + P;
                ln3 += O + P + O + O;
                ln4 += O + O + P + O;
                ln5 += O + O + O + P;
                ln6 += O + P + P + O;
                ln7 += O + O + O + O;
                break;
            case 't':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + O + P + O;
                ln4 += O + O + P + O;
                ln5 += O + O + P + O;
                ln6 += O + O + P + O;
                ln7 += O + O + O + O;
                break;
            case 'u':
                ln1 += O + O + O + O;
                ln2 += O + P + O + P;
                ln3 += O + P + O + P;
                ln4 += O + P + O + P;
                ln5 += O + P + O + P;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case 'v':
                ln1 += O + O + O + O;
                ln2 += O + P + O + P;
                ln3 += O + P + O + P;
                ln4 += O + P + O + P;
                ln5 += O + P + O + P;
                ln6 += O + O + P + O;
                ln7 += O + O + O + O;
                break;
            case 'w':
                ln1 += O + O + O + O + O + O;
                ln2 += O + P + O + O + O + P;
                ln3 += O + P + O + O + O + P;
                ln4 += O + P + O + P + O + P;
                ln5 += O + P + O + P + O + P;
                ln6 += O + O + P + O + P + O;
                ln7 += O + O + O + O + O + O;
                break;
            case 'x':
                ln1 += O + O + O + O;
                ln2 += O + P + O + P;
                ln3 += O + P + O + P;
                ln4 += O + O + P + O;
                ln5 += O + P + O + P;
                ln6 += O + P + O + P;
                ln7 += O + O + O + O;
                break;
            case 'y':
                ln1 += O + O + O + O;
                ln2 += O + P + O + P;
                ln3 += O + P + O + P;
                ln4 += O + P + P + P;
                ln5 += O + O + O + P;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case 'z':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + O + O + P;
                ln4 += O + O + P + O;
                ln5 += O + P + O + O;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case 'а':
                ln1 += O + O + O + O;
                ln2 += O + O + P + O;
                ln3 += O + P + O + P;
                ln4 += O + P + P + P;
                ln5 += O + P + O + P;
                ln6 += O + P + O + P;
                ln7 += O + O + O + O;
                break;
            case 'б':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + P + O + O;
                ln4 += O + P + P + P;
                ln5 += O + P + O + P;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case 'в':
                ln1 += O + O + O + O + O;
                ln2 += O + P + P + P + O;
                ln3 += O + P + O + O + P;
                ln4 += O + P + P + P + O;
                ln5 += O + P + O + O + P;
                ln6 += O + P + P + P + O;
                ln7 += O + O + O + O + O;
                break;
            case 'г':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + P + O + O;
                ln4 += O + P + O + O;
                ln5 += O + P + O + O;
                ln6 += O + P + O + O;
                ln7 += O + O + O + O;
                break;
            case 'д':
                ln1 += O + O + O + O + O + O;
                ln2 += O + O + O + P + P + O;
                ln3 += O + O + P + O + P + O;
                ln4 += O + O + P + O + P + O;
                ln5 += O + P + P + P + P + P;
                ln6 += O + P + O + O + O + P;
                ln7 += O + O + O + O + O + O;
                break;
            case 'е':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + P + O + O;
                ln4 += O + P + P + P;
                ln5 += O + P + O + O;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case 'ё':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + P + O + O;
                ln4 += O + P + P + P;
                ln5 += O + P + O + O;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case 'ж':
                ln1 += O + O + O + O + O + O;
                ln2 += O + P + O + P + O + P;
                ln3 += O + P + O + P + O + P;
                ln4 += O + O + P + P + P + O;
                ln5 += O + P + O + P + O + P;
                ln6 += O + P + O + P + O + P;
                ln7 += O + O + O + O + O + O;
                break;
            case 'з':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + O + O + P;
                ln4 += O + O + P + O;
                ln5 += O + O + O + P;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case 'и':
                ln1 += O + O + O + O + O;
                ln2 += O + P + O + O + P;
                ln3 += O + P + O + O + P;
                ln4 += O + P + O + P + P;
                ln5 += O + P + P + O + P;
                ln6 += O + P + O + O + P;
                ln7 += O + O + O + O + O;
                break;
            case 'й':
                ln1 += O + O + P + P + O;
                ln2 += O + P + O + O + P;
                ln3 += O + P + O + O + P;
                ln4 += O + P + O + P + P;
                ln5 += O + P + P + O + P;
                ln6 += O + P + O + O + P;
                ln7 += O + O + O + O + O;
                break;
            case 'к':
                ln1 += O + O + O + O;
                ln2 += O + P + O + P;
                ln3 += O + P + O + P;
                ln4 += O + P + P + O;
                ln5 += O + P + O + P;
                ln6 += O + P + O + P;
                ln7 += O + O + O + O;
                break;
            case 'л':
                ln1 += O + O + O + O + O;
                ln2 += O + O + O + P + P;
                ln3 += O + O + P + O + P;
                ln4 += O + O + P + O + P;
                ln5 += O + O + P + O + P;
                ln6 += O + P + O + O + P;
                ln7 += O + O + O + O + O;
                break;
            case 'м':
                ln1 += O + O + O + O + O + O;
                ln2 += O + P + O + O + O + P;
                ln3 += O + P + P + O + P + P;
                ln4 += O + P + O + P + O + P;
                ln5 += O + P + O + O + O + P;
                ln6 += O + P + O + O + O + P;
                ln7 += O + O + O + O + O + O;
                break;
            case 'н':
                ln1 += O + O + O + O;
                ln2 += O + P + O + P;
                ln3 += O + P + O + P;
                ln4 += O + P + P + P;
                ln5 += O + P + O + P;
                ln6 += O + P + O + P;
                ln7 += O + O + O + O;
                break;
            case 'о':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + P + O + P;
                ln4 += O + P + O + P;
                ln5 += O + P + O + P;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case 'п':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + P + O + P;
                ln4 += O + P + O + P;
                ln5 += O + P + O + P;
                ln6 += O + P + O + P;
                ln7 += O + O + O + O;
                break;
            case 'р':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + P + O + P;
                ln4 += O + P + P + P;
                ln5 += O + P + O + O;
                ln6 += O + P + O + O;
                ln7 += O + O + O + O;
                break;
            case 'с':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + P + O + O;
                ln4 += O + P + O + O;
                ln5 += O + P + O + O;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            case 'т':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + O + P + O;
                ln4 += O + O + P + O;
                ln5 += O + O + P + O;
                ln6 += O + O + P + O;
                ln7 += O + O + O + O;
                break;
            case 'у':
                ln1 += O + O + O + O;
                ln2 += O + P + O + P;
                ln3 += O + P + O + P;
                ln4 += O + O + P + P;
                ln5 += O + O + O + P;
                ln6 += O + P + P + O;
                ln7 += O + O + O + O;
                break;
            case 'ф':
                ln1 += O + O + O + O + O + O;
                ln2 += O + P + P + P + P + P;
                ln3 += O + P + O + P + O + P;
                ln4 += O + P + P + P + P + P;
                ln5 += O + O + O + P + O + O;
                ln6 += O + O + O + P + O + O;
                ln7 += O + O + O + O + O + O;
                break;
            case 'х':
                ln1 += O + O + O + O;
                ln2 += O + P + O + P;
                ln3 += O + P + O + P;
                ln4 += O + O + P + O;
                ln5 += O + P + O + P;
                ln6 += O + P + O + P;
                ln7 += O + O + O + O;
                break;
            case 'ц':
                ln1 += O + O + O + O + O;
                ln2 += O + P + O + P + O;
                ln3 += O + P + O + P + O;
                ln4 += O + P + O + P + O;
                ln5 += O + P + O + P + O;
                ln6 += O + P + P + P + P;
                ln7 += O + O + O + O + P;
                break;
            case 'ч':
                ln1 += O + O + O + O + O;
                ln2 += O + P + O + O + P;
                ln3 += O + P + O + O + P;
                ln4 += O + P + O + O + P;
                ln5 += O + O + P + P + P;
                ln6 += O + O + O + O + P;
                ln7 += O + O + O + O + O;
                break;
            case 'ш':
                ln1 += O + O + O + O + O + O;
                ln2 += O + P + O + O + O + P;
                ln3 += O + P + O + P + O + P;
                ln4 += O + P + O + P + O + P;
                ln5 += O + P + O + P + O + P;
                ln6 += O + P + P + P + P + P;
                ln7 += O + O + O + O + O + O;
                break;
            case 'щ':
                ln1 += O + O + O + O + O + O + O;
                ln2 += O + P + O + O + O + P + O;
                ln3 += O + P + O + P + O + P + O;
                ln4 += O + P + O + P + O + P + O;
                ln5 += O + P + O + P + O + P + O;
                ln6 += O + P + P + P + P + P + P;
                ln7 += O + O + O + O + O + O + P;
                break;
            case 'ъ':
                ln1 += O + O + O + O + O;
                ln2 += O + P + P + O + O;
                ln3 += O + O + P + O + O;
                ln4 += O + O + P + P + O;
                ln5 += O + O + P + O + P;
                ln6 += O + O + P + P + O;
                ln7 += O + O + O + O + O;
                break;
            case 'ы':
                ln1 += O + O + O + O + O + O;
                ln2 += O + P + O + O + O + P;
                ln3 += O + P + O + O + O + P;
                ln4 += O + P + P + O + O + P;
                ln5 += O + P + O + P + O + P;
                ln6 += O + P + P + O + O + P;
                ln7 += O + O + O + O + O + O;
                break;
            case 'ь':
                ln1 += O + O + O + O;
                ln2 += O + P + O + O;
                ln3 += O + P + O + O;
                ln4 += O + P + P + O;
                ln5 += O + P + O + P;
                ln6 += O + P + P + O;
                ln7 += O + O + O + O;
                break;
            case 'э':
                ln1 += O + O + O + O;
                ln2 += O + P + P + O;
                ln3 += O + O + O + P;
                ln4 += O + O + P + P;
                ln5 += O + O + O + P;
                ln6 += O + P + P + O;
                ln7 += O + O + O + O;
                break;
            case 'ю':
                ln1 += O + O + O + O + O + O;
                ln2 += O + P + O + O + P + O;
                ln3 += O + P + O + P + O + P;
                ln4 += O + P + P + P + O + P;
                ln5 += O + P + O + P + O + P;
                ln6 += O + P + O + O + P + O;
                ln7 += O + O + O + O + O + O;
                break;
            case 'я':
                ln1 += O + O + O + O;
                ln2 += O + O + P + P;
                ln3 += O + P + O + P;
                ln4 += O + P + O + P;
                ln5 += O + O + P + P;
                ln6 += O + P + O + P;
                ln7 += O + O + O + O;
                break;
            case 'ї':
                ln1 += O + O + O + O;
                ln2 += O + P + O + P;
                ln3 += O + O + O + O;
                ln4 += O + O + P + O;
                ln5 += O + O + P + O;
                ln6 += O + O + P + O;
                ln7 += O + O + O + O;
                break;
            case 'і':
                ln1 += O + O;
                ln2 += O + P;
                ln3 += O + P;
                ln4 += O + P;
                ln5 += O + P;
                ln6 += O + P;
                ln7 += O + O;
                break;
            case '<':
                ln1 += O + O + O + O;
                ln2 += O + O + O + P;
                ln3 += O + O + P + O;
                ln4 += O + P + O + O;
                ln5 += O + O + P + O;
                ln6 += O + O + O + P;
                ln7 += O + O + O + O;
                break;
            case '>':
                ln1 += O + O + O + O;
                ln2 += O + P + O + O;
                ln3 += O + O + P + O;
                ln4 += O + O + O + P;
                ln5 += O + O + P + O;
                ln6 += O + P + O + O;
                ln7 += O + O + O + O;
                break;
            case '[':
                ln1 += O + O + O;
                ln2 += O + P + P;
                ln3 += O + P + O;
                ln4 += O + P + O;
                ln5 += O + P + O;
                ln6 += O + P + P;
                ln7 += O + O + O;
                break;
            case ']':
                ln1 += O + O + O;
                ln2 += O + P + P;
                ln3 += O + O + P;
                ln4 += O + O + P;
                ln5 += O + O + P;
                ln6 += O + P + P;
                ln7 += O + O + O;
                break;
            case '^':
                ln1 += O + O + O + O;
                ln2 += O + O + P + O;
                ln3 += O + P + O + P;
                ln4 += O + O + O + O;
                ln5 += O + O + O + O;
                ln6 += O + O + O + O;
                ln7 += O + O + O + O;
                break;
            case '(':
                ln1 += O + O + O;
                ln2 += O + O + P;
                ln3 += O + P + O;
                ln4 += O + P + O;
                ln5 += O + P + O;
                ln6 += O + O + P;
                ln7 += O + O + O;
                break;
            case ')':
                ln1 += O + O + O;
                ln2 += O + P + O;
                ln3 += O + O + P;
                ln4 += O + O + P;
                ln5 += O + O + P;
                ln6 += O + P + O;
                ln7 += O + O + O;
                break;
            case '{':
                ln1 += O + O + O + P;
                ln2 += O + O + P + O;
                ln3 += O + O + P + O;
                ln4 += O + P + P + O;
                ln5 += O + O + P + O;
                ln6 += O + O + P + O;
                ln7 += O + O + O + P;
                break;
            case '}':
                ln1 += O + P + O + O;
                ln2 += O + O + P + O;
                ln3 += O + O + P + O;
                ln4 += O + O + P + P;
                ln5 += O + O + P + O;
                ln6 += O + O + P + O;
                ln7 += O + P + O + O;
                break;
            case '|':
                ln1 += O + O;
                ln2 += O + P;
                ln3 += O + P;
                ln4 += O + P;
                ln5 += O + P;
                ln6 += O + P;
                ln7 += O + O;
                break;
            case ';':
                ln1 += O + O;
                ln2 += O + P;
                ln3 += O + O;
                ln4 += O + O;
                ln5 += O + P;
                ln6 += O + P;
                ln7 += O + O;
                break;
            case '+':
                ln1 += O + O + O + O;
                ln2 += O + O + O + O;
                ln3 += O + O + P + O;
                ln4 += O + P + P + P;
                ln5 += O + O + P + O;
                ln6 += O + O + O + O;
                ln7 += O + O + O + O;
                break;
            case '-':
                ln1 += O + O + O + O;
                ln2 += O + O + O + O;
                ln3 += O + O + O + O;
                ln4 += O + P + P + P;
                ln5 += O + O + O + O;
                ln6 += O + O + O + O;
                ln7 += O + O + O + O;
                break;
            case '*':
                ln1 += O + O + O + O;
                ln2 += O + O + O + O;
                ln3 += O + O + O + O;
                ln4 += O + O + P + O;
                ln5 += O + O + O + O;
                ln6 += O + O + O + O;
                ln7 += O + O + O + O;
                break;
            case '/':
                ln1 += O + O + O + O;
                ln2 += O + O + O + P;
                ln3 += O + O + O + P;
                ln4 += O + O + P + O;
                ln5 += O + P + O + O;
                ln6 += O + P + O + O;
                ln7 += O + O + O + O;
                break;
            case '\\':
                ln1 += O + O + O + O;
                ln2 += O + P + O + O;
                ln3 += O + P + O + O;
                ln4 += O + O + P + O;
                ln5 += O + O + O + P;
                ln6 += O + O + O + P;
                ln7 += O + O + O + O;
                break;
            case '=':
                ln1 += O + O + O + O;
                ln2 += O + O + O + O;
                ln3 += O + P + P + P;
                ln4 += O + O + O + O;
                ln5 += O + P + P + P;
                ln6 += O + O + O + O;
                ln7 += O + O + O + O;
                break;
            case '.':
                ln1 += O + O;
                ln2 += O + O;
                ln3 += O + O;
                ln4 += O + O;
                ln5 += O + O;
                ln6 += O + P;
                ln7 += O + O;
                break;
            case '!':
                ln1 += O + O;
                ln2 += O + P;
                ln3 += O + P;
                ln4 += O + P;
                ln5 += O + O;
                ln6 += O + P;
                ln7 += O + O;
                break;
            case '?':
                ln1 += O + O + O + O;
                ln2 += O + P + P + P;
                ln3 += O + O + O + P;
                ln4 += O + O + P + P;
                ln5 += O + O + O + O;
                ln6 += O + O + P + O;
                ln7 += O + O + O + O;
                break;
            case ':':
                ln1 += O + O;
                ln2 += O + O;
                ln3 += O + P;
                ln4 += O + O;
                ln5 += O + P;
                ln6 += O + O;
                ln7 += O + O;
                break;
            case ' ':
                ln1 += O + O;
                ln2 += O + O;
                ln3 += O + O;
                ln4 += O + O;
                ln5 += O + O;
                ln6 += O + O;
                ln7 += O + O;
                break;
            case ',':
                ln1 += O + O;
                ln2 += O + O;
                ln3 += O + O;
                ln4 += O + O;
                ln5 += O + O;
                ln6 += O + P;
                ln7 += O + P;
                break;
            case '_':
                ln1 += O + O + O + O;
                ln2 += O + O + O + O;
                ln3 += O + O + O + O;
                ln4 += O + O + O + O;
                ln5 += O + O + O + O;
                ln6 += O + P + P + P;
                ln7 += O + O + O + O;
                break;
            default:
                break;
        }
    }
    this.setColor = function(mode)
    {
        
        if (this.mode == "markdown") {
            var colorStart = "mailto:";
            var colorEnd = "";
            var characterEnd = "[I][/I]";
            var quoteStart = ">";
            var quoteEnd = "";
        } else {
            var colorStart = "<a href='mailto:█'>";
            var colorEnd = "</a>";
            var characterEnd = "<i></i>";
            var quoteStart = "<span class='unkfunc'>>";
            var quoteEnd = "</span>";
        }
        if (mode == 1)
        {
            S = "";
            O = characterMain + characterEnd;
            P = colorStart + characterMain + colorEnd + characterEnd;
            E = "";
        }
        else if (mode == 2)
        {
            S = "";
            O = colorStart + characterMain + colorEnd + characterEnd;
            P = characterMain + characterEnd;
            E = "";
        }
        else if (mode == 3)
        {
            S = quoteStart;
            O = characterMain + characterEnd;
            P = colorStart + characterMain + colorEnd + characterEnd;
            E = quoteEnd;
        }
        else if (mode == 4)
        {
            S = quoteStart;
            O = colorStart + characterMain + colorEnd + characterEnd;
            P = characterMain + characterEnd;
            E = quoteEnd;
        }
        else
        {
            S = "";
            O = characterMain + characterEnd;
            P = colorStart + characterMain + colorEnd + characterEnd;
            E = "";
        }
    }
    this.setTransparency = function(value)
    {
        switch (parseInt(value))
        {
            case 1: break;
            case 2:
                O = O.replace(/█/g, "▓");
                P = P.replace(/█/g, "▓");
                break;
            case 3:
                O = O.replace(/█/g, "▒");
                P = P.replace(/█/g, "▒");
                break;
            case 4:
                O = O.replace(/█/g, "░");
                P = P.replace(/█/g, "░");
                break;
        }
    }
    this.setWidth = function(value)
    {
        if (value == 1)
        {
            characterMain = "█";
        }
        else if (value == 2)
        {
            characterMain = "██";
        }
    }
    this.lnTriforce = function()
    {
        var result = "";
        var ln = new Array(9);
        ln[0] = S + O + O + O + O + O + O + O + O + O + O + O + O + O;
        ln[1] = S + O + O + O + O + O + O + P + O + O + O + O + O + O;
        ln[2] = S + O + O + O + O + O + P + P + P + O + O + O + O + O;
        ln[3] = S + O + O + O + O + P + P + P + P + P + O + O + O + O;
        ln[4] = S + O + O + O + O + O + O + O + O + O + O + O + O + O;
        ln[5] = S + O + O + O + P + O + O + O + O + O + P + O + O + O;
        ln[6] = S + O + O + P + P + P + O + O + O + P + P + P + O + O;
        ln[7] = S + O + P + P + P + P + P + O + P + P + P + P + P + O;
        ln[8] = S + O + O + O + O + O + O + O + O + O + O + O + O + O;
        for (i = 0; i <= 8; i++)
        {
            result += ln[i] + "\n";
        }
        return result;
    }
    this.lnTriforceNew = function()
    {
        var result = "";
        var ln = new Array(9);
        ln[0] = S + O + O + O + O + O + O + O + O + O + O + O + O + O;
        ln[1] = S + O + O + O + P + O + O + O + O + O + O + O + O + O;
        ln[2] = S + O + O + P + P + P + O + O + O + O + O + O + O + O;
        ln[3] = S + O + P + P + P + P + P + O + O + O + O + O + O + O;
        ln[4] = S + O + O + O + O + O + O + O + O + O + O + O + O + O;
        ln[5] = S + O + O + O + P + O + O + O + O + O + P + O + O + O;
        ln[6] = S + O + O + P + P + P + O + O + O + P + P + P + O + O;
        ln[7] = S + O + P + P + P + P + P + O + P + P + P + P + P + O;
        ln[8] = S + O + O + O + O + O + O + O + O + O + O + O + O + O;
        for (i = 0; i <= 8; i++)
        {
            result += ln[i] + "\n";
        }
        return result;
    }
    this.lnHitler = function()
    {
        var result = "";
        var ln = new Array(14);
        ln[0] = S + O + O + O + O + O + O + O + O + O + O + O + O + O + O;
        ln[1] = S + O + P + P + O + O + O + P + P + P + P + P + P + P + O;
        ln[2] = S + O + P + P + O + O + O + P + P + P + P + P + P + P + O;
        ln[3] = S + O + P + P + O + O + O + P + P + O + O + O + O + O + O;
        ln[4] = S + O + P + P + O + O + O + P + P + O + O + O + O + O + O;
        ln[5] = S + O + P + P + O + O + O + P + P + O + O + O + O + O + O;
        ln[6] = S + O + P + P + P + P + P + P + P + P + P + P + P + P + O;
        ln[7] = S + O + P + P + P + P + P + P + P + P + P + P + P + P + O;
        ln[8] = S + O + O + O + O + O + O + P + P + O + O + O + P + P + O;
        ln[9] = S + O + O + O + O + O + O + P + P + O + O + O + P + P + O;
        ln[10] = S + O + O + O + O + O + O + P + P + O + O + O + P + P + O;
        ln[11] = S + O + P + P + P + P + P + P + P + O + O + O + P + P + O;
        ln[12] = S + O + P + P + P + P + P + P + P + O + O + O + P + P + O;
        ln[13] = S + O + O + O + O + O + O + O + O + O + O + O + O + O + O;
        for (i = 0; i <= 13; i++)
        {
            result += ln[i] + "\n";
        }
        return result;
    }
}
