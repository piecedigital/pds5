"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Project = /** @class */ (function () {
    function Project(projectPK, show, projectName, refName, img, desc, skillsApplied, relatedLinks, gallery, order) {
        this.projectPK = projectPK;
        this.show = show;
        this.projectName = projectName;
        this.refName = refName;
        this.img = img;
        this.desc = desc;
        this.skillsApplied = skillsApplied;
        this.relatedLinks = relatedLinks;
        this.gallery = gallery;
        this.order = order;
    }
    return Project;
}());
exports.Project = Project;
var ProjectSchema = new mongoose_1.Schema({
    projectPK: { type: String, required: true },
    show: { type: Boolean, default: true },
    projectName: { type: [String], required: true },
    refName: { type: String, required: true },
    img: { type: Boolean, default: false },
    desc: { type: [String], required: true },
    skillsApplied: { type: Object, default: true },
    relatedLinks: { type: [String], required: true },
    gallery: { type: Number, default: 0 },
    order: { type: Number, default: 0 }
}, { timestamps: true });
exports.ProjectModel = mongoose_1.model("pds5-projects", ProjectSchema);
