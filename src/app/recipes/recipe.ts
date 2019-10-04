export class Ingredent {
    name: string;
    unit: string;
    constructor(name: string = '', unit: string = '') {
        this.name = name;
        this.unit = unit;
    }
}
export class Recipe {
    id: number;
    name: string;
    ingredents: Array<Ingredent>;
    preparation: string;
    uploader: string;
    type: string;
    lackings: Array<string>;
    temperature: string;
    month: Array<string>;
    preserved: boolean;
    created: Date;
    updated: Date;
    rating: number;
    active: boolean;
    inspected: boolean;
    valid: boolean;
    constructor(
        id: number = null,
        name: string = '',
        ingredents: Array<Ingredent> = [],
        preparation: string = '',
        uploader: string = '',
        type: string = '',
        lackings: Array<string> = [],
        temperature: string = '',
        month: Array<string> = [],
        preserved: boolean = null,
        created: Date = null,
        updated: Date = null,
        rating: number = null,
        active: boolean = false,
        inspected: boolean = false,
        valid: boolean = false,
    ) {
        this.id = id;
        this.name = name;
        this.ingredents = ingredents;
        this.preparation = preparation;
        this.uploader = uploader;
        this.type = type;
        this.lackings = lackings;
        this.temperature = temperature;
        this.month = month;
        this.preserved = preserved;
        this.created = created;
        this.updated = updated;
        this.rating = rating;
        this.active = active;
        this.inspected = inspected;
        this.valid = valid;
    }
}
