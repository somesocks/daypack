/** @namespace Daypack */
import { Pack } from './types';
/**
* @name Daypack
* @class
* @constructor
* @memberof Daypack
*/
declare const Daypack: {
    (this: any): Pack;
    ID_KEY: string;
    TYPE_KEY: string;
    V1_OUTPUT: boolean;
    V1_HEAD: string;
    /**
    * `fromJSON` de-serialized a JSON string into this pack
    * @name fromJSON
    * @param json - the json to unpack
    * @returns a JSON string
    * @memberof Daypack#
    */
    from(val: any): Pack;
    pack(val: any): import("./types").V2SerializedPack;
    unpack(val: any): any;
    /**
    * A function that packs a JavaScript value.
    * @param val - the value to pack
    * @returns an flattened object
    * @memberof Daypack
    */
    clone(val: any): any;
    register(type: any, packer: any): any;
    isSerializedPack(obj: any): boolean;
};
export = Daypack;
