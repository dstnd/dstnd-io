import * as io from 'io-ts';
import { ErrResponseOf, OkResponseOf, RequestOf, Resource, ResponseOf } from '../../sdk/resource';
export declare namespace UserRegistration {
    const resource: Resource<io.TypeC<{
        firstName: io.StringC;
        lastName: io.StringC;
        verificationToken: io.StringC;
        username: io.StringC;
        countryCode: io.KeyofC<{
            AD: null;
            AE: null;
            AF: null;
            AG: null;
            AI: null;
            AL: null;
            AM: null;
            AO: null;
            AQ: null;
            AR: null;
            AS: null;
            AT: null;
            AU: null;
            AW: null;
            AX: null;
            AZ: null;
            BA: null;
            BB: null;
            BD: null;
            BE: null;
            BF: null;
            BG: null;
            BH: null;
            BI: null;
            BJ: null;
            BL: null;
            BM: null;
            BN: null;
            BO: null;
            BQ: null;
            BR: null;
            BS: null;
            BT: null;
            BV: null;
            BW: null;
            BY: null;
            BZ: null;
            CA: null;
            CC: null;
            CD: null;
            CF: null;
            CG: null;
            CH: null;
            CI: null;
            CK: null;
            CL: null;
            CM: null;
            CN: null;
            CO: null;
            CR: null;
            CU: null;
            CV: null;
            CW: null;
            CX: null;
            CY: null;
            CZ: null;
            DE: null;
            DJ: null;
            DK: null;
            DM: null;
            DO: null;
            DZ: null;
            EC: null;
            EE: null;
            EG: null;
            EH: null;
            ER: null;
            ES: null;
            ET: null;
            FI: null;
            FJ: null;
            FK: null;
            FM: null;
            FO: null;
            FR: null;
            GA: null;
            GB: null;
            GD: null;
            GE: null;
            GF: null;
            GG: null;
            GH: null;
            GI: null;
            GL: null;
            GM: null;
            GN: null;
            GP: null;
            GQ: null;
            GR: null;
            GS: null;
            GT: null;
            GU: null;
            GW: null;
            GY: null;
            HK: null;
            HM: null;
            HN: null;
            HR: null;
            HT: null;
            HU: null;
            ID: null;
            IE: null;
            IL: null;
            IM: null;
            IN: null;
            IO: null;
            IQ: null;
            IR: null;
            IS: null;
            IT: null;
            JE: null;
            JM: null;
            JO: null;
            JP: null;
            KE: null;
            KG: null;
            KH: null;
            KI: null;
            KM: null;
            KN: null;
            KP: null;
            KR: null;
            KW: null;
            KY: null;
            KZ: null;
            LA: null;
            LB: null;
            LC: null;
            LI: null;
            LK: null;
            LR: null;
            LS: null;
            LT: null;
            LU: null;
            LV: null;
            LY: null;
            MA: null;
            MC: null;
            MD: null;
            ME: null;
            MF: null;
            MG: null;
            MH: null;
            MK: null;
            ML: null;
            MM: null;
            MN: null;
            MO: null;
            MP: null;
            MQ: null;
            MR: null;
            MS: null;
            MT: null;
            MU: null;
            MV: null;
            MW: null;
            MX: null;
            MY: null;
            MZ: null;
            NA: null;
            NC: null;
            NE: null;
            NF: null;
            NG: null;
            NI: null;
            NL: null;
            NO: null;
            NP: null;
            NR: null;
            NU: null;
            NZ: null;
            OM: null;
            PA: null;
            PE: null;
            PF: null;
            PG: null;
            PH: null;
            PK: null;
            PL: null;
            PM: null;
            PN: null;
            PR: null;
            PS: null;
            PT: null;
            PW: null;
            PY: null;
            QA: null;
            RE: null;
            RO: null;
            RS: null;
            RU: null;
            RW: null;
            SA: null;
            SB: null;
            SC: null;
            SD: null;
            SE: null;
            SG: null;
            SH: null;
            SI: null;
            SJ: null;
            SK: null;
            SL: null;
            SM: null;
            SN: null;
            SO: null;
            SR: null;
            SS: null;
            ST: null;
            SV: null;
            SX: null;
            SY: null;
            SZ: null;
            TC: null;
            TD: null;
            TF: null;
            TG: null;
            TH: null;
            TJ: null;
            TK: null;
            TL: null;
            TM: null;
            TN: null;
            TO: null;
            TR: null;
            TT: null;
            TV: null;
            TW: null;
            TZ: null;
            UA: null;
            UG: null;
            UM: null;
            US: null;
            UY: null;
            UZ: null;
            VA: null;
            VC: null;
            VE: null;
            VG: null;
            VI: null;
            VN: null;
            VU: null;
            WF: null;
            WS: null;
            XK: null;
            YE: null;
            YT: null;
            ZA: null;
            ZM: null;
            ZW: null;
        }>;
    }>, io.TypeC<{
        accessToken: io.StringC;
    }>, io.UnionC<[io.TypeC<{
        type: io.LiteralC<"InputValidationError">;
        content: io.TypeC<{
            fields: io.RecordC<io.KeyofC<{
                firstName: io.StringC;
                lastName: io.StringC;
                verificationToken: io.StringC;
                username: io.StringC;
                countryCode: io.KeyofC<{
                    AD: null;
                    AE: null;
                    AF: null;
                    AG: null;
                    AI: null;
                    AL: null;
                    AM: null;
                    AO: null;
                    AQ: null;
                    AR: null;
                    AS: null;
                    AT: null;
                    AU: null;
                    AW: null;
                    AX: null;
                    AZ: null;
                    BA: null;
                    BB: null;
                    BD: null;
                    BE: null;
                    BF: null;
                    BG: null;
                    BH: null;
                    BI: null;
                    BJ: null;
                    BL: null;
                    BM: null;
                    BN: null;
                    BO: null;
                    BQ: null;
                    BR: null;
                    BS: null;
                    BT: null;
                    BV: null;
                    BW: null;
                    BY: null;
                    BZ: null;
                    CA: null;
                    CC: null;
                    CD: null;
                    CF: null;
                    CG: null;
                    CH: null;
                    CI: null;
                    CK: null;
                    CL: null;
                    CM: null;
                    CN: null;
                    CO: null;
                    CR: null;
                    CU: null;
                    CV: null;
                    CW: null;
                    CX: null;
                    CY: null;
                    CZ: null;
                    DE: null;
                    DJ: null;
                    DK: null;
                    DM: null;
                    DO: null;
                    DZ: null;
                    EC: null;
                    EE: null;
                    EG: null;
                    EH: null;
                    ER: null;
                    ES: null;
                    ET: null;
                    FI: null;
                    FJ: null;
                    FK: null;
                    FM: null;
                    FO: null;
                    FR: null;
                    GA: null;
                    GB: null;
                    GD: null;
                    GE: null;
                    GF: null;
                    GG: null;
                    GH: null;
                    GI: null;
                    GL: null;
                    GM: null;
                    GN: null;
                    GP: null;
                    GQ: null;
                    GR: null;
                    GS: null;
                    GT: null;
                    GU: null;
                    GW: null;
                    GY: null;
                    HK: null;
                    HM: null;
                    HN: null;
                    HR: null;
                    HT: null;
                    HU: null;
                    ID: null;
                    IE: null;
                    IL: null;
                    IM: null;
                    IN: null;
                    IO: null;
                    IQ: null;
                    IR: null;
                    IS: null;
                    IT: null;
                    JE: null;
                    JM: null;
                    JO: null;
                    JP: null;
                    KE: null;
                    KG: null;
                    KH: null;
                    KI: null;
                    KM: null;
                    KN: null;
                    KP: null;
                    KR: null;
                    KW: null;
                    KY: null;
                    KZ: null;
                    LA: null;
                    LB: null;
                    LC: null;
                    LI: null;
                    LK: null;
                    LR: null;
                    LS: null;
                    LT: null;
                    LU: null;
                    LV: null;
                    LY: null;
                    MA: null;
                    MC: null;
                    MD: null;
                    ME: null;
                    MF: null;
                    MG: null;
                    MH: null;
                    MK: null;
                    ML: null;
                    MM: null;
                    MN: null;
                    MO: null;
                    MP: null;
                    MQ: null;
                    MR: null;
                    MS: null;
                    MT: null;
                    MU: null;
                    MV: null;
                    MW: null;
                    MX: null;
                    MY: null;
                    MZ: null;
                    NA: null;
                    NC: null;
                    NE: null;
                    NF: null;
                    NG: null;
                    NI: null;
                    NL: null;
                    NO: null;
                    NP: null;
                    NR: null;
                    NU: null;
                    NZ: null;
                    OM: null;
                    PA: null;
                    PE: null;
                    PF: null;
                    PG: null;
                    PH: null;
                    PK: null;
                    PL: null;
                    PM: null;
                    PN: null;
                    PR: null;
                    PS: null;
                    PT: null;
                    PW: null;
                    PY: null;
                    QA: null;
                    RE: null;
                    RO: null;
                    RS: null;
                    RU: null;
                    RW: null;
                    SA: null;
                    SB: null;
                    SC: null;
                    SD: null;
                    SE: null;
                    SG: null;
                    SH: null;
                    SI: null;
                    SJ: null;
                    SK: null;
                    SL: null;
                    SM: null;
                    SN: null;
                    SO: null;
                    SR: null;
                    SS: null;
                    ST: null;
                    SV: null;
                    SX: null;
                    SY: null;
                    SZ: null;
                    TC: null;
                    TD: null;
                    TF: null;
                    TG: null;
                    TH: null;
                    TJ: null;
                    TK: null;
                    TL: null;
                    TM: null;
                    TN: null;
                    TO: null;
                    TR: null;
                    TT: null;
                    TV: null;
                    TW: null;
                    TZ: null;
                    UA: null;
                    UG: null;
                    UM: null;
                    US: null;
                    UY: null;
                    UZ: null;
                    VA: null;
                    VC: null;
                    VE: null;
                    VG: null;
                    VI: null;
                    VN: null;
                    VU: null;
                    WF: null;
                    WS: null;
                    XK: null;
                    YE: null;
                    YT: null;
                    ZA: null;
                    ZM: null;
                    ZW: null;
                }>;
            }>, io.UnionC<[io.StringC, io.UndefinedC]>>;
        }>;
    }>, io.TypeC<{
        type: io.LiteralC<"ValidationErrors">;
        content: io.TypeC<{
            fields: io.PartialC<Record<"firstName" | "lastName" | "username" | "countryCode" | "verificationToken", io.UnionC<[io.StringC, io.UndefinedC]>>>;
        }>;
    }>, io.TypeC<{
        type: io.LiteralC<"DuplicateUser">;
        content: io.UndefinedC;
    }>]>, {
        firstName: string;
        lastName: string;
        verificationToken: string;
        username: string;
        countryCode: "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "XK" | "YE" | "YT" | "ZA" | "ZM" | "ZW";
    }, {
        accessToken: string;
    }, {
        type: "InputValidationError";
        content: {
            fields: {
                firstName: string | undefined;
                lastName: string | undefined;
                username: string | undefined;
                countryCode: string | undefined;
                verificationToken: string | undefined;
            };
        };
    } | {
        type: "ValidationErrors";
        content: {
            fields: {
                firstName?: string | undefined;
                lastName?: string | undefined;
                username?: string | undefined;
                countryCode?: string | undefined;
                verificationToken?: string | undefined;
            };
        };
    } | {
        type: "DuplicateUser";
        content: undefined;
    }>;
    type Request = RequestOf<typeof resource>;
    type OkResponse = OkResponseOf<typeof resource>;
    type ErrResponse = ErrResponseOf<typeof resource>;
    type Response = ResponseOf<typeof resource>;
}
