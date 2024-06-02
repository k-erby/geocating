interface CatConstructor {
    cat: CatInformation,
    readonly owner: Partial<UserInformation>
}

// kerby, these get things go in my service. and this entity file can go in my prisma schema instead
export class Cat implements CatProvider {
    id: number

    cat: CatInformation;

    private owner: Partial<UserInformation>;

    constructor(details: CatConstructor) {
        this.cat = details.cat;
        this.owner = details.owner;
    }

    getCat(): CatInformation {
        return this.cat;
    }

    updateCat(information: Partial<CatInformation>): void {

    }

    // this should have some security around it. 
    getOwnerInformation(): Partial<UserInformation> {
        return this.owner;
    }
}