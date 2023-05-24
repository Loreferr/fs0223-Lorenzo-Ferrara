var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var redditoAnnuo = /** @class */ (function () {
    function redditoAnnuo(_codredd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) {
        this.codredd = _codredd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
    }
    return redditoAnnuo;
}());
var redditoLavoratore = /** @class */ (function (_super) {
    __extends(redditoLavoratore, _super);
    function redditoLavoratore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    redditoLavoratore.prototype.getUtileTasse = function () {
        if (this.redditoAnnuoLordo < 15000) {
            this.redditoAnnuoLordo = this.redditoAnnuoLordo - (this.redditoAnnuoLordo * 0.23);
        }
        else if (this.redditoAnnuoLordo > 15001 && this.redditoAnnuoLordo < 28000) {
            this.redditoAnnuoLordo = this.redditoAnnuoLordo - (this.redditoAnnuoLordo * 0.25);
        }
        else if (this.redditoAnnuoLordo > 28001 && this.redditoAnnuoLordo < 50000) {
            this.redditoAnnuoLordo = this.redditoAnnuoLordo - (this.redditoAnnuoLordo * 0.35);
        }
        else {
            this.redditoAnnuoLordo = this.redditoAnnuoLordo - (this.redditoAnnuoLordo * 0.43);
        }
        return this.redditoAnnuoLordo;
    };
    redditoLavoratore.prototype.getTasseInps = function () {
        this.tasseInps = this.redditoAnnuoLordo * 0.24;
        return this.tasseInps;
    };
    redditoLavoratore.prototype.getTasseIrpef = function () {
        if (this.redditoAnnuoLordo < 15000) {
            this.redditoAnnuoLordo = this.redditoAnnuoLordo * 0.23;
        }
        else if (this.redditoAnnuoLordo < 28000 && this.redditoAnnuoLordo > 15001) {
            this.redditoAnnuoLordo = this.redditoAnnuoLordo * 0.25;
        }
        else if (this.redditoAnnuoLordo < 35000 && this.redditoAnnuoLordo > 28001) {
            this.redditoAnnuoLordo = this.redditoAnnuoLordo * 0.35;
        }
        else {
            this.redditoAnnuoLordo = this.redditoAnnuoLordo * 0.48;
        }
        return this.redditoAnnuoLordo;
    };
    redditoLavoratore.prototype.getRedditoAnnuoNetto = function () {
        this.redditoAnnuoLordo = this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef());
        return this.redditoAnnuoLordo;
    };
    return redditoLavoratore;
}(redditoAnnuo));
var Giulio = new redditoLavoratore(2, 25000);
console.log(Giulio.getTasseInps());
console.log(Giulio.getRedditoAnnuoNetto());
