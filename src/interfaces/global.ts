"use strict";

declare global
{
    var __GLOBAL__: typeof globalThis;

    interface Object
    {
        __GLOBAL__: this;
    }
}

export {};
