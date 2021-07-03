var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
////https://stackoverflow.com/questions/46991237/how-to-import-json-file-into-a-typescript-file
var searchBar = document.getElementById("barra");
var searchButton = document.getElementById("searchButton");
var functionFetch = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("./db.json")];
            case 1: return [4 /*yield*/, (_a.sent()).json()];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var dataFromDatabase = null;
(function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, functionFetch()];
            case 1:
                dataFromDatabase = _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
searchButton === null || searchButton === void 0 ? void 0 : searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    var informazioni;
    if (dataFromDatabase !== null) {
        if (event != null) {
            var input = searchBar;
            var inputUtente_1 = input.value;
            informazioni = dataFromDatabase.find(function (element) {
                return element.razza.includes(inputUtente_1);
            });
        }
        var modale = document.createElement("div");
        /*modale.innerHTML = `<div class="modal" tabindex="1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${informazioni.razza}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>${informazioni.descrizione + '' + informazioni.temperamento}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
        </div> `*/
        //Inner Template in JavaScript, è una stringa utilizzabile per scrivere pezzi di codice
        modale.innerHTML = "<div class=\"modal\" tabindex=\"1\" role=\"dialog\" style=\"display: block\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">" + informazioni.razza + "</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>" + (informazioni.descrizione + '\n' + informazioni.temperamento) + "</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>";
        document.getElementById("spawnModale").appendChild(modale);
        console.log(informazioni);
    }
});
//ONce è un foreach che fa un break quando trova l'elemente
//JS è asincrono. (esempio gelato: sincrono = do il gelato a tutti e poi mangiano)
//sincrono = do il gelato al primo e inizia a mangiare
//CONCETTO DI PROMISE, è la promessa di ricevere un tipo di dato (non necessariamente specificato) senza sapere quando
//Ma a noi i dati del json servono subito, quindi E' UN MODO PER RENDERE SINCRONO QUESTO PROCESSO
//File System non posso accedere dal client. Questi problemi li hai avuti perché le richieste che abbiamo fatto (require) 
//sono misti back-end/front-end
//USA LA FETCH
