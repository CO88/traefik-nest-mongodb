/**
 * vo가 있으면 여기서 vo클래스를 사용합니다.
 */
export interface CreatePetProps {
    name: string;
    animalType: string;
    pictureUrl?: string;
    birthDate?: Date;
}

export class CreatePetCommand {
    constructor(props: CreatePetProps) {
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
