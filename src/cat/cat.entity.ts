import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

interface CatConstructor {
    cat: CatInformation,
    readonly owner: Partial<UserInformation>
}

@Entity("cat")
export class Cat implements CatProvider {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    cat: CatInformation;

    @Column()
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