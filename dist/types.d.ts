export declare type PackHeap = {
    [key: string]: any;
};
export declare type V2SerializedPack = {
    _daypack: string;
    head: any;
    heap: PackHeap;
};
export declare type V1SerializedPack = {
    __daypack__: any;
    [key: string]: any;
};
export declare type SerializedPack = V2SerializedPack;
export declare type EachCall = (val: any, key: string) => void;
export declare type Filter = (val: any, key: string) => boolean;
export declare type PreFilter = (key: string) => boolean;
export declare type Mapper = (val: any, key: string) => any;
export declare type Reducer = (state: any, val: any, key: any) => any;
export declare type Pack = {
    _head: any;
    _heap: PackHeap;
    _type_key: string;
    _id_key: string;
    withHeap: (this: Pack, heap: PackHeap) => Pack;
    withHead: (this: Pack, head: any) => Pack;
    pack: (this: Pack, val: any) => Pack;
    packHeap: (this: Pack, val: any, key?: string) => Pack;
    unpack: (this: Pack, val?: any) => any;
    each: (this: Pack, each: EachCall) => Pack;
    filter: (this: Pack, filter: Filter, preFilter?: PreFilter) => Pack;
    map: (this: Pack, mapper: Mapper, preFilter?: PreFilter) => Pack;
    reduce: (this: Pack, reducer: Reducer, state?: any, preFilter?: PreFilter) => any;
    toObject: (this: Pack) => SerializedPack;
    fromObject: (this: Pack, object: SerializedPack) => Pack;
    toJSON: (this: Pack) => string;
    fromJSON: (this: Pack, json: string) => Pack;
};
