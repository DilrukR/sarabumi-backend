"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsService = void 0;
const common_1 = require("@nestjs/common");
const paginate_1 = require("../common/pagination/paginate");
let TagsService = class TagsService {
    constructor() {
        this.tags = [];
    }
    create(createTagDto) {
        return Object.assign({ id: this.tags.length + 1 }, createTagDto);
    }
    findAll({ page, limit }) {
        if (!page)
            page = 1;
        const url = `/tags?limit=${limit}`;
        return Object.assign({ data: this.tags }, (0, paginate_1.paginate)(this.tags.length, page, limit, this.tags.length, url));
    }
    findOne(id) {
        return `This action returns a #${id} tag`;
    }
    update(id, updateTagDto) {
        return this.tags[0];
    }
    remove(id) {
        return `This action removes a #${id} tag`;
    }
};
TagsService = __decorate([
    (0, common_1.Injectable)()
], TagsService);
exports.TagsService = TagsService;
