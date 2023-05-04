export class User {
    constructor(
        public email: string,
        public password: string,
        public firstName?: string,
        public lastName?: string,
        public birthday?: string,
        public genre?: string,
    ) {

    }
}