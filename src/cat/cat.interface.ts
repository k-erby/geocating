interface CatProvider {
    getCat(): CatInformation;
    updateCat(information: Partial<CatInformation>): void;
    getOwnerInformation(): UserInformation;
}

interface CatInformation {
    name: string,
    bio: string,
    lostInfo: LostInformation,
    basicInfo: BasicInformation,
    image?: string // kerby: hmm, maybe like a path?
}

interface BasicInformation {
    age?: number,
    furColor: string,
    eyeColor: string,
    temperment?: string
}

interface LostInformation {
    date: Date,
    location: [number, number], // lat long coords
}
