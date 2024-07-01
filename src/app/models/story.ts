

export interface jobDataDTO {
    jobId:number,
    jobRole: string,
    location: string ,
    jobDescription:string,
    vacancy:number,
    skillsRequired:[],
    rolesAndResponsibilities: string,
    companyDescription: string,
    saved:boolean,
    applied:boolean
}

export interface submitDataDTO{
    name:string,
    email:string,
    phoneNumber:number,
    totalExperience:number,
    resume:any
}

export const STORY_ITEM_KEY = 'stories';
export const SPRINT_KEY = 'sprint';
export const MAX_SIZE: number = 2 * 1024 * 1024;
export const SUCCESS_MESSAGE='Submitted Successfully'