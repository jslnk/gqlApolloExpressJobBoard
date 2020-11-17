const db = require('./db');


const Query={
    //job:(root, args)=> db.jobs.get(args.id), this is the same with below. 
    job:(root, {id})=> db.jobs.get(id),
    jobs:()=>db.jobs.list()
};

const Job={
    company:(job)=>db.companies.get( job.companyId)
}

module.exports={ Query, Job };
