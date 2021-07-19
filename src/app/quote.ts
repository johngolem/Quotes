export class Quote {

    showVotes:boolean;

    constructor(public saying:string,public author:string,public upvotes:number,public downvotes:number)
    {
       this.showVotes = false
      
    }


}