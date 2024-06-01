interface CatConstructor {
    cat: CatInformation,
    readonly owner: UserInformation
}

export class Cat implements CatProvider {
    cat: CatInformation;
    private owner: UserInformation;

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
    getOwnerInformation(): UserInformation {
        return this.owner;
    }
}