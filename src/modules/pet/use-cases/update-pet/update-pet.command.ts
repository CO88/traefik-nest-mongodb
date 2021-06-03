export interface UpdatePetProps {
    name: string;
    animalType: string;
    pictureUrl?: string;
    birthDate?: Date;
}

export class UpdatePetCommand {
    constructor(props: UpdatePetProps) {
        this.name = props.name;
        this.animalType = props.animalType;
        this.pictureUrl = props.pictureUrl;
        this.birthDate = props.birthDate;
    }

    readonly name: string;
    readonly animalType: string;
    readonly pictureUrl?: string;
    readonly birthDate?: Date;
}
