"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Takes a short link to a Git repo and returns the absolute URL
 * @param repo The link to a Git repo to be expanded
 * @returns The absolute URL for the Git repo
 *
 * @example expandGitLink("madnesslabs/madnessenjincli") => "https://github.com/madnesslabs/madnessenjincli.git"
 */
function expandGitLink(repo) {
    let repoLink = "";
    let credentials = null;
    let host = "github.com";
    let hostRepo = "";
    // Add Protocol
    if (repo.indexOf("://") === -1) {
        repoLink += "https://";
    }
    // Get Credentials
    if (repo.indexOf("@") >= 0) {
        const repoArr = repo.split("@");
        credentials = repoArr[0];
        hostRepo = repoArr[1]
            .split("/")
            .slice(1)
            .join("/");
        if (repoArr[1].split("/")[0].indexOf(".") >= 0) {
            host = repoArr[1].split("/")[0];
        }
    }
    else {
        const repoArr = repo.split("/");
        if (repoArr[0].indexOf(".") >= 0) {
            host = repoArr[0];
            hostRepo = repoArr.slice(1).join("/");
        }
        else {
            hostRepo = repo;
        }
    }
    // Return Full HTTP Link
    return (repoLink += `${credentials ? credentials + "@" : ""}${host}/${hostRepo.indexOf(".git") >= 0 ? hostRepo : hostRepo + ".git"}`);
}
exports.expandGitLink = expandGitLink;
//# sourceMappingURL=expandGitLink.js.map