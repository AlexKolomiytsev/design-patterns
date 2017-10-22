export class TournamentBuilder {
    constructor(builder) {
        this.builder = builder;
    }

    build(builder) {
        builder = builder || this.builder;

        return builder.build()
    }
}
