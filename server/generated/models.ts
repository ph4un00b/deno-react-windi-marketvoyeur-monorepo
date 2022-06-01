// To parse this data:
//
//   import { Convert, Coin } from "./file";
//
//   const coin = Convert.toCoin(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Coin {
    data:   Data;
    status: string;
}

export interface Data {
    coins: CoinElement[];
    stats: Stats;
}

export interface CoinElement {
    "24hVolume":    string;
    btcPrice:       string;
    change:         string;
    coinrankingUrl: string;
    color:          string;
    iconUrl:        string;
    listedAt:       number;
    lowVolume:      boolean;
    marketCap:      string;
    name:           string;
    price:          string;
    rank:           number;
    sparkline:      string[];
    symbol:         string;
    tier:           number;
    uuid:           string;
}

export interface Stats {
    total:          number;
    total24hVolume: string;
    totalCoins:     number;
    totalExchanges: number;
    totalMarketCap: string;
    totalMarkets:   number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toCoin(json: string): Coin {
        return cast(JSON.parse(json), r("Coin"));
    }

    public static coinToJson(value: Coin): string {
        return JSON.stringify(uncast(value, r("Coin")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Coin": o([
        { json: "data", js: "data", typ: r("Data") },
        { json: "status", js: "status", typ: "" },
    ], false),
    "Data": o([
        { json: "coins", js: "coins", typ: a(r("CoinElement")) },
        { json: "stats", js: "stats", typ: r("Stats") },
    ], false),
    "CoinElement": o([
        { json: "24hVolume", js: "24hVolume", typ: "" },
        { json: "btcPrice", js: "btcPrice", typ: "" },
        { json: "change", js: "change", typ: "" },
        { json: "coinrankingUrl", js: "coinrankingUrl", typ: "" },
        { json: "color", js: "color", typ: "" },
        { json: "iconUrl", js: "iconUrl", typ: "" },
        { json: "listedAt", js: "listedAt", typ: 0 },
        { json: "lowVolume", js: "lowVolume", typ: true },
        { json: "marketCap", js: "marketCap", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "price", js: "price", typ: "" },
        { json: "rank", js: "rank", typ: 0 },
        { json: "sparkline", js: "sparkline", typ: a("") },
        { json: "symbol", js: "symbol", typ: "" },
        { json: "tier", js: "tier", typ: 0 },
        { json: "uuid", js: "uuid", typ: "" },
    ], false),
    "Stats": o([
        { json: "total", js: "total", typ: 0 },
        { json: "total24hVolume", js: "total24hVolume", typ: "" },
        { json: "totalCoins", js: "totalCoins", typ: 0 },
        { json: "totalExchanges", js: "totalExchanges", typ: 0 },
        { json: "totalMarketCap", js: "totalMarketCap", typ: "" },
        { json: "totalMarkets", js: "totalMarkets", typ: 0 },
    ], false),
};
