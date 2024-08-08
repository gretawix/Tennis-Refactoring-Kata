import { TennisGame } from "./TennisGame";

type Players = {
    [playerName: string]: {
        points: number;
        result: string;
    };
};

export class TennisGame2 implements TennisGame {
    P1point: number = 0;
    P2point: number = 0;

    P1res: string = "";
    P2res: string = "";

    private player1Name: string;
    private player2Name: string;

    // players: Players = {};

    constructor(player1Name: string, player2Name: string) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;

        // this.players[player1Name] = {
        //     points: 0,
        //     result: "",
        // };
        // this.players[player2Name] = {
        //     points: 0,
        //     result: "",
        // };
    }

    isEqual(): boolean {
        return this.P1point === this.P2point;
    }

    getScore(): string {
        let score: string = "";

        const scoreNames: { [key: number]: string } = {
            0: "Love",
            1: "Fifteen",
            2: "Thirty",
            3: "Forty",
        };

        if (this.P1point > 0 && this.P2point === 0) {
            this.P1res = scoreNames[this.P1point];
            this.P2res = "Love";
        }

        if (this.P2point > 0 && this.P1point === 0) {
            this.P2res = scoreNames[this.P2point];
            this.P1res = "Love";
        }

        if (this.P1point > this.P2point && this.P1point < 4) {
            this.P1res = scoreNames[this.P1point];
            this.P2res = scoreNames[this.P2point];
        }

        if (this.P2point > this.P1point && this.P2point < 4) {
            this.P1res = scoreNames[this.P1point];
            this.P2res = scoreNames[this.P2point];
        }
        score = this.P1res + "-" + this.P2res;

        if (this.P1point > this.P2point && this.P2point >= 3) {
            score = `Advantage ${this.player1Name}`;
        }

        if (this.P2point > this.P1point && this.P1point >= 3) {
            score = `Advantage ${this.player2Name}`;
        }

        if (this.P1point >= 4 && this.P1point - this.P2point >= 2) {
            score = `Win for ${this.player1Name}`;
        }
        if (this.P2point >= 4 && this.P2point - this.P1point >= 2) {
            score = `Win for ${this.player2Name}`;
        }

        if (this.isEqual()) {
            if (this.P1point < 4) score = scoreNames[this.P1point] + "-All";
            if (this.P1point >= 3) score = "Deuce";
        }

        return score;
    }

    wonPoint(player: string): void {
        if (player === this.player1Name) this.P1point++;
        else this.P2point++;

        // this.players[player].points++;
    }
}
