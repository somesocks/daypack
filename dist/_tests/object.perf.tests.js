"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require("../"));
__1.default.V1_OUTPUT = false;
var reddit_json_1 = __importDefault(require("../_testing/reddit.json"));
for (var i = 0; i < 10000; i++) {
    var output = __1.default.pack(reddit_json_1.default);
}
