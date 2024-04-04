module.exports = function () {
    return {
        structurizrWorkspaceId: process.env.STRUCTURIZR_WORKSPACE_ID || 1,
        structurizrBasePath: process.env.STRUCTURIZR_BASEPATH || "https://diagrams-eddie.projekte.fh-hagenberg.at/"
    };
};