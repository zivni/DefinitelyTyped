// Type definitions for route-parser 0.0.5
// Project: https://github.com/rcs/route-parser
// Definitions by: zivni https://github.com/zivni
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**Import usage:
 * import * as Route from "route-parser"
 */

declare module 'route-parser' {
    interface Paramters {
        [parmeterName: string]: any
    }

    interface Route {
        match(path: string): Paramters
        reverse(params: Paramters)
    }

    interface RouteStatic {
        new (spec: string): Route;
    }

    var Route: RouteStatic;
    export = Route;
}