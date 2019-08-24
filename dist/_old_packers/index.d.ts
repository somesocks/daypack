declare const _default: {
    packers: {
        array: {
            pack: (arr: any, context: any) => any[];
            unpack: (arr: any, context: any) => any[];
        };
        boolean: {
            pack: (val: any, context: any) => any;
            unpack: (val: any, context: any) => any;
        };
        date: {
            pack: (val: any, context: any) => {
                [x: number]: string;
                value: any;
            };
            unpack: (val: any, context: any) => Date;
        };
        null: {
            pack: (val: any, context: any) => any;
            unpack: (val: any, context: any) => any;
        };
        number: {
            pack: (val: any, context: any) => any;
            unpack: (val: any, context: any) => any;
        };
        object: {
            pack: (val: any, context: any) => {};
            unpack: (val: any, context: any) => any;
        };
        regexp: {
            pack: (val: any, context: any) => {
                [x: number]: string;
                source: any;
                flags: any;
                lastIndex: any;
            };
            unpack: (val: any, context: any) => RegExp;
        };
        string: {
            pack: (val: any, context: any) => any;
            unpack: (val: any, context: any) => any;
        };
        undefined: {
            pack: (val: any, context: any) => any;
            unpack: (val: any, context: any) => any;
        };
    };
    pack: (val: any, context: any) => any;
    unpack: (val: any, context: any) => any;
};
export = _default;
