import * as mongoose from "mongoose";

import {
    Model,
    model,
    Document,
    Schema,
} from "mongoose";

export class Project {
    projectPK: string;
    show?: boolean;
    projectName: string[];
    refName: string;
    img?: boolean;
    desc: string[];
    skillsApplied?: Record<string, string[]>;
    relatedLinks: string[];
    gallery?: number;
    order: number;

    constructor(
        projectPK: string,
        show: boolean,
        projectName: string[],
        refName: string,
        img: boolean,
        desc: string[],
        skillsApplied: Record<string, string[]>,
        relatedLinks: string[],
        gallery: number,
        order: number
    ) {
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
}

const ProjectSchema: Schema = new Schema({
    projectPK: { type: String, required: true},
    show: { type: Boolean, default: true},
    projectName: { type: [String], required: true },
    refName: { type: String, required: true},
    img: { type: Boolean, default: false},
    desc: { type: [String], required: true },
    skillsApplied: { type: Object, default: true},
    relatedLinks: { type: [String], required: true },
    gallery: { type: Number, default: 0 },
    order: { type: Number, default: 0 }
}, { timestamps: true });

export const ProjectModel: Model<Document> = model("pds5-projects", ProjectSchema);