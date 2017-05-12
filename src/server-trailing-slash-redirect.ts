import * as express from "express";

// https://github.com/avinoamr/connect-slashes
export function trailingSlashRedirect(req: express.Request, res: express.Response, next: express.NextFunction) {

    const i = req.originalUrl.indexOf("?");

    let pathWithoutQuery = req.originalUrl;
    if (i >= 0) {
        pathWithoutQuery = pathWithoutQuery.substr(0, i);
    }
    if (pathWithoutQuery.substr(-1) === "/"
        || pathWithoutQuery.indexOf(".") >= 0) {
        return next();
    }

    let redirect = pathWithoutQuery + "/";
    if (i >= 0) {
        redirect += req.originalUrl.substr(i);
    }

    console.log("REDIRECT: " + req.originalUrl + " ==> " + redirect);
    res.redirect(301, redirect);
}
